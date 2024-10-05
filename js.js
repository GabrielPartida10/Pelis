const animes = [
     {
        imgSrc: "https://media.revistagq.com/photos/6061de8b7e6648d674c91a59/master/pass/attack%20on%20titan.jpeg",
        altText: "Anime 1",
        title: "Attack on Titan",
        description: "Un emocionante anime sobre la lucha de la humanidad contra gigantes devoradores de hombres."
    },
    ,
    {
        imgSrc: "https://cdn.myanimelist.net/images/anime/1988/111094l.jpg",
        altText: "Anime 2",
        title: "Demon Slayer",
        description: "La historia de un joven que lucha contra demonios para vengar a su familia y salvar a su hermana."
    },
    {
        imgSrc: "https://cdn.myanimelist.net/images/anime/1429/109795l.jpg",
        altText: "Anime 3",
        title: "My Hero Academia",
        description: "Un mundo donde casi todos tienen superpoderes, y un joven sin poderes sueña con ser el héroe número uno."
    },
    {
        imgSrc: "https://cdn.myanimelist.net/images/anime/10/75815l.jpg",
        altText: "Anime 4",
        title: "Naruto",
        description: "La historia de un ninja joven con un gran sueño de convertirse en el Hokage, el líder más fuerte de su aldea."
    },
    {
        imgSrc: "https://cdn.myanimelist.net/images/anime/1795/95088l.jpg",
        altText: "Anime 5",
        title: "One Piece",
        description: "Las aventuras del joven pirata Monkey D. Luffy en busca del tesoro más grande del mundo."
    },
    {
        imgSrc: "https://cdn.myanimelist.net/images/anime/5/73199l.jpg",
        altText: "Anime 6",
        title: "Sword Art Online",
        description: "Jugadores atrapados en un mundo de realidad virtual deben luchar para sobrevivir y escapar del juego."
    },
    {
        imgSrc: "https://cdn.myanimelist.net/images/anime/9/80019l.jpg",
        altText: "Anime 7",
        title: "Tokyo Ghoul",
        description: "Un estudiante universitario se transforma en mitad ghoul y debe adaptarse a su nueva vida como depredador."
    },
    {
        imgSrc: "https://cdn.myanimelist.net/images/anime/11/39717l.jpg",
        altText: "Anime 8",
        title: "Death Note",
        description: "Un estudiante descubre un cuaderno sobrenatural que le permite matar a cualquiera cuyo nombre escriba en él."
    },
    {
        imgSrc: "https://cdn.myanimelist.net/images/anime/13/17405l.jpg",
        altText: "Anime 9",
        title: "Fullmetal Alchemist: Brotherhood",
        description: "Dos hermanos alquimistas buscan la Piedra Filosofal para recuperar sus cuerpos tras un trágico experimento fallido."
    },
    {
        imgSrc: "makina.jpg",
        altText: "Anime 10",
        title: "One Punch Man",
        description: "Un héroe que puede derrotar a cualquier enemigo con un solo golpe busca un desafío digno de su poder."
    }
]
window.$ = (selector) => document.querySelector(selector);
window.$$ = (selector) => document.querySelectorAll(selector);

window.$class = (className) => document.getElementsByClassName(className);
window.$id = (id) => document.getElementById(id);

const animeGrid = $('#anime-list');

// Crear HTML de las tarjetas de anime
const html = animes.map(anime => `
    <div class="anime-card">
        <img src="${anime.imgSrc}" alt="${anime.altText}">
        <div class="anime-info">
            <h3>${anime.title}</h3>
            <p>${anime.description}</p>
        </div>
    </div>
`).join('');

// Insertar el HTML en el contenedor
animeGrid.innerHTML = html;
