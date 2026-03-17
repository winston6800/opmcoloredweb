class MangaReader {
    constructor() {
        this.currentChapter = null;
        this.currentPage = 1;
        this.readingMode = 'clickPage';
        this.settings = { ...MANGA_CONFIG.defaultSettings };
        this.isLoading = false;
        this.currentView = 'landing';
        this.imageCache = new Map();
        this.intersectionObserver = null;

        this.initElements();
        this.bindEvents();
        this.loadSettings();
        this.initReader();
        this.setupObserver();
    }

    initElements() {
        this.landingPage = document.getElementById('landingPage');
        this.readerView = document.getElementById('readerView');
        this.landingChaptersGrid = document.getElementById('landingChaptersGrid');
        this.chapterSearch = document.getElementById('chapterSearch');
        this.readerViewport = document.getElementById('readerViewport');
        this.pageContainer = document.getElementById('pageContainer');
        this.loadingOverlay = document.getElementById('loadingOverlay');
        this.homeBtn = document.getElementById('homeBtn');
        this.mangaTitle = document.querySelector('.manga-title');
        this.prevChapterBtn = document.getElementById('prevChapterBtn');
        this.nextChapterBtn = document.getElementById('nextChapterBtn');
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
    }

    bindEvents() {
        if (this.chapterSearch) {
            this.chapterSearch.addEventListener('input', (e) => this.filterChapters(e.target.value));
        }

        const firstBtn = document.querySelector('.first-chapter');
        const latestBtn = document.querySelector('.new-chapter');
        if (firstBtn) {
            firstBtn.addEventListener('click', () => {
                this.showReader();
                this.loadChapter(MANGA_CONFIG.chapters[0].id);
            });
        }
        if (latestBtn) {
            latestBtn.addEventListener('click', () => {
                this.showReader();
                this.loadChapter(MANGA_CONFIG.chapters[MANGA_CONFIG.chapters.length - 1].id);
            });
        }

        if (this.homeBtn) this.homeBtn.addEventListener('click', () => this.showLanding());
        if (this.mangaTitle) {
            this.mangaTitle.addEventListener('click', () => this.showLanding());
            this.mangaTitle.style.cursor = 'pointer';
        }
        if (this.prevChapterBtn) this.prevChapterBtn.addEventListener('click', () => this.prevChapter());
        if (this.nextChapterBtn) this.nextChapterBtn.addEventListener('click', () => this.nextChapter());
        if (this.fullscreenBtn) this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());

        document.querySelectorAll('.arc-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.arc-card');
                const startNum = parseInt(card.dataset.start);
                const ch = MANGA_CONFIG.chapters.find(c => c.num >= startNum);
                if (ch) {
                    this.showReader();
                    this.loadChapter(ch.id);
                }
            });
        });

        document.addEventListener('keydown', (e) => this.handleKey(e));
        document.addEventListener('contextmenu', (e) => {
            if (e.target.tagName === 'IMG') e.preventDefault();
        });
    }

    initReader() {
        this.loadLandingChapters();
    }

    loadLandingChapters() {
        if (!this.landingChaptersGrid) return;
        this.landingChaptersGrid.innerHTML = '';

        MANGA_CONFIG.chapters.forEach(ch => {
            const item = document.createElement('div');
            item.className = 'chapter-item';
            item.innerHTML = `<h5>${ch.title}</h5><span class="chapter-page-count">${ch.pageCount} pages</span>`;
            item.addEventListener('click', () => {
                this.showReader();
                this.loadChapter(ch.id);
            });
            this.landingChaptersGrid.appendChild(item);
        });

        const title = document.querySelector('.chapters-title');
        if (title) title.textContent = `All Chapters (${MANGA_CONFIG.chapters.length})`;
    }

    filterChapters(term) {
        if (!this.landingChaptersGrid) return;
        const search = term.toLowerCase().trim();
        this.landingChaptersGrid.querySelectorAll('.chapter-item').forEach(item => {
            const text = item.querySelector('h5').textContent.toLowerCase();
            const numMatch = text.match(/chapter\s*(\d+)/);
            const num = numMatch ? numMatch[1] : '';
            item.style.display = (!search || num.includes(search) || text.includes(search)) ? 'flex' : 'none';
        });
    }

    showLanding() {
        this.currentView = 'landing';
        this.landingPage.style.display = 'flex';
        this.readerView.style.display = 'none';
    }

    showReader() {
        this.currentView = 'reader';
        this.landingPage.style.display = 'none';
        this.readerView.style.display = 'flex';
    }

    async loadChapter(chapterId) {
        if (this.isLoading) return;
        const chapter = getChapterById(chapterId);
        if (!chapter) return;

        this.isLoading = true;
        this.showLoading();

        try {
            this.currentChapter = chapter;
            this.currentPage = 1;
            this.updateHeader(chapter);
            this.updateNavButtons();
            await this.loadPages();
            this.setReadingMode(this.settings.readingMode);
            this.readerViewport.scrollTop = 0;
        } catch (err) {
            console.error('Error loading chapter:', err);
        } finally {
            this.isLoading = false;
            this.hideLoading();
        }
    }

    async loadPages() {
        this.pageContainer.innerHTML = '';
        const pages = getChapterPages(this.currentChapter);
        const preloadCount = Math.min(3, pages.length);
        const preloadPromises = [];

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            const img = document.createElement('img');
            img.className = 'manga-page';
            img.alt = `Page ${page.number}`;
            img.loading = i < preloadCount ? 'eager' : 'lazy';

            img.addEventListener('click', (e) => {
                if (this.readingMode !== 'clickPage') return;
                const rect = img.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                if (clickX < rect.width / 2) this.prevPage();
                else this.nextPage();
            });

            img.addEventListener('error', () => {
                img.style.display = 'none';
            });

            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });

            if (this.readingMode === 'clickPage' && i > 0) {
                img.style.display = 'none';
            }

            this.pageContainer.appendChild(img);

            if (i < preloadCount) {
                preloadPromises.push(this.preloadImage(page.path, img));
            } else if (this.intersectionObserver) {
                img.dataset.src = page.path;
                this.intersectionObserver.observe(img);
            } else {
                img.src = page.path;
            }
        }

        try { await Promise.all(preloadPromises); } catch {}
        this.updatePageInfo();
    }

    preloadImage(src, imgEl) {
        return new Promise((resolve) => {
            if (this.imageCache.has(src)) { imgEl.src = src; resolve(); return; }
            const img = new Image();
            img.onload = () => { this.imageCache.set(src, true); imgEl.src = src; resolve(); };
            img.onerror = () => { imgEl.src = src; resolve(); };
            img.src = src;
        });
    }

    setupObserver() {
        if (!('IntersectionObserver' in window)) return;
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src && !img.src) {
                        this.preloadImage(img.dataset.src, img);
                    }
                    this.intersectionObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px 0px', threshold: 0.1 });
    }

    setReadingMode(mode) {
        this.readingMode = mode;
        this.settings.readingMode = mode;
        this.pageContainer.className = 'page-container ' + mode + '-page';
        if (mode === 'clickPage') this.updateClickPageView();
        else if (mode === 'longStrip') this.updateLongStripView();
        if (this.settings.autoFit) this.pageContainer.classList.add('auto-fit');
        this.saveSettings();
    }

    updateClickPageView() {
        if (!this.currentChapter) return;
        const pages = this.pageContainer.querySelectorAll('.manga-page');
        pages.forEach((page, i) => {
            if (i + 1 === this.currentPage) {
                page.style.display = 'block';
                page.style.maxWidth = '100%';
                page.style.maxHeight = 'calc(100vh - 80px)';
                page.style.width = 'auto';
                page.style.height = 'auto';
                page.style.objectFit = 'contain';
                page.style.margin = '0 auto';
            } else {
                page.style.display = 'none';
            }
        });
        this.readerViewport.scrollTop = 0;
    }

    updateLongStripView() {
        this.pageContainer.querySelectorAll('.manga-page').forEach(page => {
            page.style.display = 'block';
            page.style.width = '100%';
            page.style.maxWidth = '100%';
            page.style.height = 'auto';
        });
        this.readerViewport.style.overflowY = 'auto';
    }

    nextPage() {
        if (!this.currentChapter) return;
        if (this.currentPage < this.currentChapter.pageCount) {
            this.currentPage++;
            this.updateClickPageView();
            this.updatePageInfo();
        } else {
            this.nextChapter();
        }
    }

    prevPage() {
        if (!this.currentChapter) return;
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updateClickPageView();
            this.updatePageInfo();
        } else {
            const prev = getPreviousChapter(this.currentChapter.id);
            if (prev) {
                this.loadChapter(prev.id);
            }
        }
    }

    nextChapter() {
        if (!this.currentChapter) return;
        const next = getNextChapter(this.currentChapter.id);
        if (next) this.loadChapter(next.id);
    }

    prevChapter() {
        if (!this.currentChapter) return;
        const prev = getPreviousChapter(this.currentChapter.id);
        if (prev) this.loadChapter(prev.id);
    }

    updateHeader(chapter) {
        const chapterNav = document.querySelector('.chapter-nav');
        const pageNav = document.querySelector('.page-nav');
        if (chapterNav) chapterNav.querySelector('.chapter').textContent = `Ch. ${chapter.num}`;
        if (pageNav) {
            pageNav.querySelector('.current-page').textContent = this.currentPage;
            pageNav.querySelector('.total-pages').textContent = chapter.pageCount;
        }
    }

    updatePageInfo() {
        if (!this.currentChapter) return;
        const pageNav = document.querySelector('.page-nav');
        if (pageNav) {
            pageNav.querySelector('.current-page').textContent = this.currentPage;
            pageNav.querySelector('.total-pages').textContent = this.currentChapter.pageCount;
        }
    }

    updateNavButtons() {
        if (!this.currentChapter) return;
        this.prevChapterBtn.disabled = !getPreviousChapter(this.currentChapter.id);
        this.nextChapterBtn.disabled = !getNextChapter(this.currentChapter.id);
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            document.body.classList.add('fullscreen');
        } else {
            document.exitFullscreen();
            document.body.classList.remove('fullscreen');
        }
    }

    handleKey(e) {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
        switch (e.key) {
            case 'ArrowLeft': e.preventDefault(); if (this.currentView === 'reader') this.prevPage(); break;
            case 'ArrowRight': e.preventDefault(); if (this.currentView === 'reader') this.nextPage(); break;
            case 'ArrowUp': e.preventDefault(); if (this.currentView === 'reader') this.prevChapter(); break;
            case 'ArrowDown': e.preventDefault(); if (this.currentView === 'reader') this.nextChapter(); break;
            case 'f': case 'F': e.preventDefault(); this.toggleFullscreen(); break;
            case 'h': case 'H': e.preventDefault(); this.showLanding(); break;
            case 'Escape': this.showLanding(); break;
        }
    }

    showLoading() { this.loadingOverlay.classList.add('active'); }
    hideLoading() { this.loadingOverlay.classList.remove('active'); }

    loadSettings() {
        const saved = localStorage.getItem('opmReaderSettings');
        if (saved) this.settings = { ...this.settings, ...JSON.parse(saved) };
    }

    saveSettings() {
        localStorage.setItem('opmReaderSettings', JSON.stringify(this.settings));
    }
}

document.addEventListener('DOMContentLoaded', () => new MangaReader());
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) document.body.classList.remove('fullscreen');
});
