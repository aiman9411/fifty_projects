const pokeContainer = document.getElementById("poke-container");
const pokeNum = 150;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for(let i = 1; i <= pokeNum; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemon(data);
}

function createPokemon(data) {
    const pokemon = document.createElement('div');
    pokemon.classList.add("pokemon");
    
    const name = data.name[0].toUpperCase() + data.name.slice(1);

    const pokeType = data.types.map(type => type.type.name);

    const id = (data.id > 9) ? `0${data.id}` : `00${data.id}`;
    
    const type = main_types.find(a => pokeType.indexOf(a) > -1);

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="Pokemon">
        </div>

        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    pokemon.innerHTML = pokeInnerHTML;

    pokemon.style.backgroundColor = colors[type];

    pokeContainer.appendChild(pokemon);
}

fetchPokemons();