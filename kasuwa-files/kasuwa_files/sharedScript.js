let backdrop = document.querySelector('.backdrop');
let toggleButton = document.querySelector('.toggle-button');
backdrop.addEventListener('click', closeModal);
function closeModal() {
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
}
let mobileNav = document.querySelector('.mobile-nav');
toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});