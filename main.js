var main = document.getElementById('main');
var galeria = document.getElementById('galeria');

function openImage() {
	var overlay = document.createElement('div');
	overlay.classList.add('overlay');

	var img = document.createElement('img');
	img.setAttribute('src', this.getAttribute('src'));
	img.classList.add('gallery-item-open');

	var button = document.createElement('button');
	button.classList.add('btn-close');
	button.addEventListener('click', function() {
		overlay.innerHTML = '';
		overlay.style.display = 'none';
	});

	overlay.appendChild(img);
	overlay.appendChild(button);
	main.appendChild(overlay);
}

document.querySelectorAll('.galeria-item').forEach(item => item.addEventListener('click', openImage, false));