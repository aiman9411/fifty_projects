const toggle = document.getElementById('mode');

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('aiman');

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        console.log(data)
    } catch(err) {
        console.log(err.message);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);
         search.value = '';
    }
})