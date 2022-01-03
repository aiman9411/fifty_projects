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
        getRepos(username);
    } catch(err) {
        if(err.response.status = '404') {
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos')

        addReposToCard(data)
    } catch(err) {
        createErrorCard('Problem fetching repos')
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

            <div id="repos"></div>
        </div>
    </div>
    `
    main.innerHTML = cardHTML
    main.style.border = '1px solid var(--tertiary-color)';
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')
    repos
        .slice(0,6)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url;
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl);
        })
}


function createErrorCard(message) {
    const cardHTML = 
    `
    <div class="card">
        <h1 id="name">${message}</h1>
    </div>
    `
    main.innerHTML = cardHTML
    main.style.border = '1px solid var(--tertiary-color)';
}
