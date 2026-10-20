// JavaScript

const allTabButtons = document.querySelectorAll('.tab-button');
const allTabContents = document.querySelectorAll('.tab-content');
const encouragementButton = document.querySelector('.encouragement-button');
const encouragementMessage = document.querySelector('.encouragement-message');

const encouragements = [
    '今日もあなたのペースで大丈夫 🌼',
    'ひと息ついて、えらい！ ☕',
    '小さな一歩も、ちゃんと前進 ✨',
    'あなたにいいことがありますように 🍀',
    '今日のあなたに花まるを 💮'
];

let previousEncouragement = -1;

encouragementButton?.addEventListener('click', () => {
    let nextEncouragement = Math.floor(Math.random() * encouragements.length);
    if (encouragements.length > 1 && nextEncouragement === previousEncouragement) {
        nextEncouragement = (nextEncouragement + 1) % encouragements.length;
    }

    previousEncouragement = nextEncouragement;
    encouragementMessage.textContent = encouragements[nextEncouragement];
    encouragementMessage.classList.remove('is-updated');
    requestAnimationFrame(() => encouragementMessage.classList.add('is-updated'));
});

function resetAllTabs() {
    // 全てのタブから .active クラスを削除する
    allTabButtons.forEach(button => {
        button.classList.remove('active');
    });
    // 全てのコンテンツから .active クラスを削除する
    allTabContents.forEach(content => {
        content.classList.remove('active');
    });
}

function activateTab(tabId) {
    const content = document.getElementById(tabId);
    const button = document.querySelector(`.tab-button[data-id="${tabId}"]`);
    
    if (content) content.classList.add('active');
    if (button) button.classList.add('active');
}

allTabButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const clickedTabId = event.currentTarget.dataset.id;

        if (!clickedTabId) return;

        resetAllTabs();
        activateTab(clickedTabId);
    });
});