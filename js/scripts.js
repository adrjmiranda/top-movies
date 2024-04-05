const toggleMenuButton = document.querySelector('#toggle-menu');
const menu = document.querySelector('.menu');

if (toggleMenuButton && menu) {
	toggleMenuButton.addEventListener('click', () => {
		menu.classList.toggle('show');
	});
}
