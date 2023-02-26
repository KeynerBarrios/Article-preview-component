let shareBtn = document.querySelector('.main_container__S2__button');
let viewSocialIcons = document.querySelector('.main_container__S2__social-icons');

shareBtn.addEventListener('click', () => {
    viewSocialIcons.classList.toggle('show');
});