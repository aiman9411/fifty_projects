//Define API variables
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6b2d2f00a8d1c438c197ea4c44eede8&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=b6b2d2f00a8d1c438c197ea4c44eede8&query=';

//Create element via query
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

//Call function
getMovies(API_URL);

//Define getMovies function
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results);
    showMovies(data.results);
}

//Define showMovies function
function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
        `
        main.appendChild(movieEl);
    })
}

function getClassByRate(rate) {
    if(rate >=8) {
        return 'green'
    } else if(rate >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
})