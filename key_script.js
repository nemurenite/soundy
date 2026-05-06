// JS
const textarea = document.querySelector('.textarea');

// キーが押されたとき
textarea.addEventListener('keydown', () => {
    console.log('キーが押されました。');
});

// 文字が入力された
textarea.addEventListener('keypress', () => {
    console.log('文字が入力されました。');
});

// キーが離されたとき
textarea.addEventListener('keyup', () => {
    console.log('キーが離されました。');
});
