const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6b2d2f00a8d1c438c197ea4c44eede8&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=b6b2d2f00a8d1c438c197ea4c44eede8&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        
        search.value = ''
    } else {
        window.location.reload();
    }

})
