const input = document.getElementById("input");
const part2 = document.querySelector(".part2");
const listItems = [];
const button = document.getElementById("helo")

getUser();
input.addEventListener('input', (e) => searchItem(e.target.value));

async function getUser() {
    const res = await fetch("https://randomuser.me/api/?results=50");
    const {results} = await res.json();
    part2.innerHTML = '';

    results.forEach(item => {
        const user = document.createElement("div");
        user.classList.add("user");
        user.innerHTML = 
        `
            <img src="${item.picture.large}" alt="User" class="image">
            <div class="info">
                <h4 class="name">${item.name.first} ${item.name.last}</h4>
                 <p class="location">${item.location.state}, ${item.location.country}</p>
            </div>
        `
        listItems.push(user);
        part2.appendChild(user);
    })

}

function searchItem(searchTerm) {
    listItems.forEach(item => {
        if(!item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.add("active")
        } else {
            item.classList.remove("active");
        }
    })
}