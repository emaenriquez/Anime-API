
let contenedor = document.querySelector('.contenedor');

const obtencionDeElementos = (id) => {
	fetch(`https://api.aniapi.com/v1/anime/${id}`, {
		method: 'GET',
		headers: {
			'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyODEiLCJuYmYiOjE2NDYyNjY2MzIsImV4cCI6MTY0ODg1ODYzMiwiaWF0IjoxNjQ2MjY2NjMyfQ.vlbNuh2y9Vig5liqesMh_t32SSjLlDJkEo1k1jGcwbs',
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then(res => res.json())
		.then(data => imagenes(data));
}

const imagenes = (imagenesAnime) => {

	const div = document.createElement('div');
	div.classList.add('card-contenedor');
	div.style.width = '18rem';
	contenedor.appendChild(div);

	// mostrar portada de los animes
	let imgAnime = document.createElement("img");
	imgAnime.classList.add('card-img');
	imgAnime.src = imagenesAnime.data.cover_image;

	imgAnime.addEventListener('click', () => {
		descripcion.classList.remove("card-text-display")
		temporada.classList.remove('card-text-temporadas-display');
	})

	// mostrar el titulo de los animes
	let titulo = document.createElement("h5");
	titulo.classList.add('card-title');
	titulo.innerHTML = imagenesAnime.data.titles.en;

	// mostrar la descripcion de los animes
	let descripcion = document.createElement("p");
	descripcion.classList.add('card-text', "card-text-display");
	descripcion.innerHTML = imagenesAnime.data.descriptions.en;

	// mostrar el temporada de los animes
	let temporada = document.createElement("p");
	temporada.classList.add('card-text-temporadas', 'card-text-temporadas-display');
	temporada.innerHTML = `Season: ${imagenesAnime.data.season_period}`;

	div.appendChild(imgAnime);
	div.appendChild(titulo);
	div.appendChild(descripcion);
	div.appendChild(temporada);
}

const obtenerAnimes = () => {
	for (let i = 1; i <= 6; i++) {
		obtencionDeElementos(i);
	}
}

obtenerAnimes()