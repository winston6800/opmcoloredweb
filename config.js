// One Punch Man Colored Manga Configuration
// Set IMAGE_BASE_URL to use Cloudflare R2 (e.g. 'https://pub-xxx.r2.dev'). Leave null for local paths.
const IMAGE_BASE_URL = 'https://pub-9e08c8a268a5410792a6069c3790e92b.r2.dev';

const CHAPTERS = [
    { num: 100, pages: 32, folder: '../colorized/chapter 100', ext: '.jpg' },
    { num: 101, pages: 53, folder: '../colorized/chapter 101', ext: '.jpg' },
    { num: 102, pages: 42, folder: '../colorized/chapter 102', ext: '.jpg' },
    { num: 103, pages: 57, folder: '../colorized/chapter 103', ext: '.jpg' },
    { num: 104, pages: 50, folder: '../colorized/chapter 104', ext: '.jpg' },
    { num: 105, pages: 22, folder: '../colorized/chapter 105', ext: '.jpg' },
    { num: 106, pages: 20, folder: '../colorized/chapter 106', ext: '.jpg' },
    { num: 107, pages: 41, folder: '../colorized/chapter 107', ext: '.jpg' },
    { num: 108, pages: 27, folder: '../colorized/chapter 108', ext: '.jpg' },
    { num: 109, pages: 65, folder: '../colorized/chapter 109', ext: '.jpg' },
    { num: 110, pages: 25, folder: '../colorized/chapter 110', ext: '.jpg' },
    { num: 111, pages: 10, folder: '../colorized/chapter 111', ext: '.jpg' },
    { num: 112, pages: 15, folder: '../colorized/chapter 112', ext: '.jpg' },
    { num: 113, pages: 51, folder: '../colorized/chapter 113', ext: '.jpg' },
    { num: 114, pages: 25, folder: '../colorized/chapter 114', ext: '.jpg' },
    { num: 115, pages: 33, folder: '../colorized/chapter 115', ext: '.jpg' },
    { num: 116, pages: 26, folder: '../colorized/chapter 116', ext: '.jpg' },
    { num: 117, pages: 27, folder: '../colorized/chapter 117', ext: '.jpg' },
    { num: 118, pages: 18, folder: '../colorized/chapter 118', ext: '.jpg' },
    { num: 119, pages: 33, folder: '../colorized/chapter 119', ext: '.jpg' },
    { num: 120, pages: 22, folder: '../colorized/chapter 120', ext: '.jpg' },
    { num: 121, pages: 22, folder: '../colorized/chapter 121', ext: '.jpg' },
    { num: 122, pages: 27, folder: '../colorized/chapter 122', ext: '.jpg' },
    { num: 123, pages: 29, folder: '../colorized/chapter 123', ext: '.jpg' },
    { num: 124, pages: 26, folder: '../colorized/chapter 124', ext: '.jpg' },
    { num: 125, pages: 24, folder: '../colorized/chapter 125', ext: '.jpg' },
    { num: 126, pages: 54, folder: '../colorized/chapter 126', ext: '.jpg' },
    { num: 127, pages: 17, folder: '../colorized/chapter 127', ext: '.jpg' },
    { num: 128, pages: 14, folder: '../colorized/chapter 128', ext: '.jpg' },
    { num: 129, pages: 18, folder: '../colorized/chapter 129', ext: '.jpg' },
    { num: 130, pages: 37, folder: '../colorized/chapter 130', ext: '.jpg' },
    { num: 131, pages: 33, folder: '../colorized/chapter 131', ext: '.jpg' },
    { num: 132, pages: 29, folder: '../colorized/chapter 132', ext: '.jpg' },
    { num: 133, pages: 28, folder: '../colorized/chapter 133', ext: '.jpg' },
    { num: 134, pages: 29, folder: '../colorized/chapter 134', ext: '.jpg' },
    { num: 135, pages: 24, folder: '../colorized/chapter 135', ext: '.jpg' },
    { num: 136, pages: 20, folder: '../colorized/chapter 136', ext: '.jpg' },
    { num: 137, pages: 40, folder: '../colorized/chapter 137', ext: '.jpg' },
    { num: 138, pages: 20, folder: '../colorized/chapter 138', ext: '.jpg' },
    { num: 139, pages: 33, folder: '../colorized/chapter 139', ext: '.jpg' },
    { num: 140, pages: 14, folder: '../colorized/chapter 140', ext: '.jpg' },
    { num: 141, pages: 38, folder: '../colorized/chapter 141', ext: '.jpg' },
    { num: 142, pages: 24, folder: '../colorized/chapter 142', ext: '.jpg' },
    { num: 143, pages: 22, folder: '../colorized/chapter 143', ext: '.jpg' },
    { num: 144, pages: 29, folder: '../colorized/chapter 144', ext: '.jpg' },
    { num: 145, pages: 34, folder: '../colorized/chapter 145', ext: '.jpg' },
    { num: 146, pages: 29, folder: '../colorized/chapter 146', ext: '.jpg' },
    { num: 147, pages: 29, folder: '../colorized/chapter 147', ext: '.jpg' },
    { num: 148, pages: 37, folder: '../colorized/chapter 148', ext: '.jpg' },
    { num: 149, pages: 25, folder: '../colorized/chapter 149', ext: '.jpg' },
    { num: 150, pages: 41, folder: '../colorized/chapter 150', ext: '.jpg' },
    { num: 151, pages: 35, folder: '../colorized/chapter 151', ext: '.jpg' },
    { num: 152, pages: 34, folder: '../colorized/chapter 152', ext: '.jpg' },
    { num: 153, pages: 46, folder: '../colorized/chapter 153', ext: '.jpg' },
    { num: 154, pages: 42, folder: '../colorized/chapter 154', ext: '.jpg' },
    { num: 155, pages: 41, folder: '../colorized/chapter 155', ext: '.jpg' },
    { num: 156, pages: 42, folder: '../colorized/chapter 156', ext: '.jpg' },
    { num: 157, pages: 24, folder: '../colorized/chapter 157', ext: '.jpg' },
    { num: 158, pages: 27, folder: '../colorized/chapter 158', ext: '.jpg' },
    { num: 159, pages: 21, folder: '../colorized/chapter 159', ext: '.jpg' },
    { num: 160, pages: 41, folder: '../colorized/chapter 160', ext: '.jpg' },
    { num: 161, pages: 39, folder: '../colorized/chapter 161', ext: '.jpg' },
    { num: 163, pages: 42, folder: '../colorized/chapter 163', ext: '.jpg' },
    { num: 164, pages: 44, folder: '../colorized/chapter 164', ext: '.jpg' },
    { num: 165, pages: 52, folder: '../colorized/chapter 165', ext: '.jpg' },
    { num: 166, pages: 71, folder: '../colorized/chapter 166', ext: '.jpg' },
    { num: 167, pages: 45, folder: '../colorized/chapter 167', ext: '.jpg' },
    { num: 168, pages: 23, folder: '../colorized/chapter 168', ext: '.jpg' },
    { num: 169, pages: 30, folder: '../colorized/chapter 169', ext: '.jpg' },
    { num: 170, pages: 36, folder: '../colorized/chapter 170', ext: '.jpg' },
    { num: 171, pages: 35, folder: '../colorized/chapter 171', ext: '.jpg' },
    { num: 172, pages: 28, folder: '../colorized/chapter 172', ext: '.jpg' },
    { num: 173, pages: 30, folder: '../colorized/chapter 173', ext: '.jpg' },
    { num: 174, pages: 26, folder: '../colorized/chapter 174', ext: '.jpg' },
    { num: 175, pages: 34, folder: '../colorized/chapter 175', ext: '.jpg' },
    { num: 176, pages: 28, folder: '../colorized/chapter 176', ext: '.jpg' },
    { num: 177, pages: 35, folder: '../colorized/chapter 177', ext: '.jpg' },
    { num: 178, pages: 33, folder: '../colorized/chapter 178', ext: '.jpg' },
    { num: 179, pages: 29, folder: '../colorized/chapter 179', ext: '.jpg' },
    { num: 180, pages: 38, folder: '../colorized/chapter 180', ext: '.jpg' },
    { num: 181, pages: 27, folder: '../colorized/chapter 181', ext: '.jpg' },
    { num: 182, pages: 28, folder: '../colorized/chapter 182', ext: '.jpg' },
    { num: 183, pages: 29, folder: '../colorized/chapter 183', ext: '.jpg' },
    { num: 184, pages: 33, folder: '../colorized/chapter 184', ext: '.jpg' },
    { num: 185, pages: 41, folder: '../colorized/chapter 185', ext: '.jpg' },
    { num: 186, pages: 30, folder: '../colorized/chapter 186', ext: '.jpg' },
    { num: 187, pages: 32, folder: '../colorized/chapter 187', ext: '.jpg' },
    { num: 188, pages: 34, folder: '../colorized/chapter 188', ext: '.jpg' },
    { num: 189, pages: 33, folder: '../colorized/run_2026-03-02T19-01-04/chapter 189', ext: '.png' },
    { num: 190, pages: 35, folder: '../colorized/run_2026-03-02T19-01-04/chapter 190', ext: '.png' },
    { num: 191, pages: 32, folder: '../colorized/run_2026-03-02T19-01-04/chapter 191', ext: '.png' },
    { num: 192, pages: 37, folder: '../colorized/run_2026-03-02T19-01-04/chapter 192', ext: '.png' },
    { num: 193, pages: 15, folder: '../colorized/run_2026-03-02T19-01-04/chapter 193', ext: '.png' },
    { num: 194, pages: 21, folder: '../colorized/run_2026-03-02T19-01-04/chapter 194', ext: '.png' },
    { num: 195, pages: 18, folder: '../colorized/run_2026-03-02T19-01-04/chapter 195', ext: '.png' },
    { num: 196, pages: 12, folder: '../colorized/run_2026-03-02T19-01-04/chapter 196', ext: '.png' },
    { num: 197, pages: 16, folder: '../colorized/run_2026-03-02T19-01-04/chapter 197', ext: '.png' },
    { num: 198, pages: 14, folder: '../colorized/run_2026-03-02T19-01-04/chapter 198', ext: '.png' },
    { num: 199, pages: 23, folder: '../colorized/run_2026-03-02T19-01-04/chapter 199', ext: '.png' },
    { num: 200, pages: 12, folder: '../colorized/run_2026-03-02T19-01-04/chapter 200', ext: '.png' },
    { num: 201, pages: 25, folder: '../colorized/run_2026-03-04T03-41-13/chapter 201', ext: '.png' },
    { num: 202, pages: 14, folder: '../colorized/run_2026-03-04T03-41-13/chapter 202', ext: '.png' },
    { num: 203, pages: 23, folder: '../colorized/run_2026-03-04T03-41-13/chapter 203', ext: '.png' },
    { num: 204, pages: 15, folder: '../colorized/run_2026-03-04T03-41-13/chapter 204', ext: '.png' },
    { num: 205, pages: 15, folder: '../colorized/run_2026-03-04T03-41-13/chapter 205', ext: '.png' },
    { num: 206, pages: 19, folder: '../colorized/run_2026-03-04T03-41-13/chapter 206', ext: '.png' },
    { num: 207, pages: 17, folder: '../colorized/run_2026-03-04T03-41-13/chapter 207', ext: '.png' },
    { num: 208, pages: 16, folder: '../colorized/run_2026-03-04T03-41-13/chapter 208', ext: '.png' },
    { num: 209, pages: 21, folder: '../colorized/run_2026-03-04T03-41-13/chapter 209', ext: '.png' },
    { num: 210, pages: 16, folder: '../colorized/run_2026-03-04T03-41-13/chapter 210', ext: '.png' },
    { num: 211, pages: 14, folder: '../colorized/run_2026-03-04T03-41-13/chapter 211', ext: '.png' },
    { num: 212, pages: 18, folder: '../colorized/run_2026-03-04T03-41-13/chapter 212', ext: '.png' },
    { num: 213, pages: 19, folder: '../colorized/run_2026-03-04T03-41-13/chapter 213', ext: '.png' },
    { num: 214, pages: 17, folder: '../colorized/run_2026-03-04T03-41-13/chapter 214', ext: '.png' },
    { num: 215, pages: 23, folder: '../colorized/run_2026-03-04T03-41-13/chapter 215', ext: '.png' },
    { num: 216, pages: 20, folder: '../colorized/run_2026-03-04T03-41-13/chapter 216', ext: '.png' },
    { num: 217, pages: 22, folder: '../colorized/run_2026-03-04T03-41-13/chapter 217', ext: '.png' },
    { num: 218, pages: 23, folder: '../colorized/run_2026-03-04T03-41-13/chapter 218', ext: '.png' },
    { num: 219, pages: 16, folder: '../colorized/run_2026-03-04T03-41-13/chapter 219', ext: '.png' },
    { num: 220, pages: 20, folder: '../colorized/run_2026-03-04T03-41-13/chapter 220', ext: '.png' },
    { num: 221, pages: 18, folder: '../colorized/run_2026-03-04T03-41-13/chapter 221', ext: '.png' },
];

const MANGA_CONFIG = {
    title: 'One Punch Man',
    subtitle: 'AI Colored Manga Reader',
    author: 'ONE & Yusuke Murata',
    description: 'Read One Punch Man manga in full color, enhanced with AI colorization.',

    chapters: CHAPTERS.map(ch => ({
        id: 'chapter' + ch.num,
        num: ch.num,
        title: 'Chapter ' + ch.num,
        folder: ch.folder,
        pageCount: ch.pages,
        ext: ch.ext,
    })),

    defaultSettings: {
        readingMode: 'clickPage',
        autoFit: true,
        pageGap: 10,
        backgroundColor: '#111',
        showControls: true,
    },
};

function getChapterById(id) {
    return MANGA_CONFIG.chapters.find(ch => ch.id === id);
}

function getChapterIndex(id) {
    return MANGA_CONFIG.chapters.findIndex(ch => ch.id === id);
}

function getNextChapter(currentId) {
    const idx = getChapterIndex(currentId);
    return idx < MANGA_CONFIG.chapters.length - 1 ? MANGA_CONFIG.chapters[idx + 1] : null;
}

function getPreviousChapter(currentId) {
    const idx = getChapterIndex(currentId);
    return idx > 0 ? MANGA_CONFIG.chapters[idx - 1] : null;
}

function getChapterPages(chapter) {
    const pages = [];
    for (let i = 1; i <= chapter.pageCount; i++) {
        const filename = i + '_colorized' + (IMAGE_BASE_URL ? '.webp' : chapter.ext);
        const path = IMAGE_BASE_URL
            ? `${IMAGE_BASE_URL}/colorizedopm/chapter ${chapter.num}/${filename}`
            : chapter.folder + '/' + filename;
        pages.push({
            number: i,
            filename,
            path,
        });
    }
    return pages;
}
