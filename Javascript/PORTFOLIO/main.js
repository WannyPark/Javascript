const hcjHead = document.querySelector('.html-css-js-head');
const hcjList = document.querySelector('.html-css-js-list');
const jsHead = document.querySelector('.javascript-head');
const jsList = document.querySelector('.javascript-list');
const alHead = document.querySelector('.algorithm-head');
const alList = document.querySelector('.algorithm-list');

hcjHead.addEventListener('click', () => {
    if (hcjList.classList.contains('none')) {
        hcjList.classList.remove('none');
    } else {
        hcjList.classList.add('none');
    }
});
jsHead.addEventListener('click', () => {
    if (jsList.classList.contains('none')) {
        jsList.classList.remove('none');
    } else {
        jsList.classList.add('none');
    }
});
alHead.addEventListener('click', () => {
    if (alList.classList.contains('none')) {
        alList.classList.remove('none');
    } else {
        alList.classList.add('none');
    }
});