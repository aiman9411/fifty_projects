const input = document.getElementById("input");
const part2 = document.querySelector(".part2");

getUser();

async function getUser() {
    const res = await fetch("https://randomuser.me/api/?results=50");
    const {results} = await res.json();

    results.forEach(item => {
        const user = document.createElement("div");
        user.classList.add("user");
        user.innerHTML = 
        `
            <img src="${item.picture.large}" alt="User" class="image">
            <div class="info">
                <h4 class="name">${item.name.first} ${item.name.last}</h4>
                 <p class="location">${item.location.city}, ${item.location.state}</p>
            </div>
        `

        part2.appendChild(user);
    })

}

// input.addEventListener("input", (e) => {
//     const users = document.querySelectorAll(".user");
//     users.forEach(user => {
//         if(e.target.value !== user.name.first) {
//             user.classList.add("hide");
//         }
//     })
// })


function searchItem(term) {
    const listUsers = document.querySelectorAll(".user");
    
}
