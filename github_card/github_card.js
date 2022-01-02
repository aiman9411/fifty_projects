const toggle = document.getElementById('mode');
const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

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

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        createUserCard(data);
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

function createUserCard(user) {
    const cardHTML = 
    `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="avatar" class="avatar">
        </div>

        <div class="details">
            <h1 id="name">${user.name}</h1>
            <p id="desc">${user.bio}</p>
            <ul class="list">
                <li class="follows">${user.followers} followers</li>
                <li class="follows">${user.following} following</li>
                <li class="follows">${user.public_repos} repos</li>
            </ul>
            <ul class="list2">
                <li class="repo">Repo 1</li>
                <li class="repo">Repo 2</li>
                <li class="repo">Repo 3</li>
            </ul>
        </div>
    </div>
    `
    main.innerHTML = cardHTML;
} 
