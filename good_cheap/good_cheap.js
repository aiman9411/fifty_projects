const toggles = document.querySelectorAll('.toggle');
const decentralised = document.querySelector('#decentralised');
const scalable = document.querySelector('#scalable');
const secured = document.querySelector('#secured');
const answer = document.getElementById('answer');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

// function doTheTrick(theClickedOne) {
//     if(decentralised.checked && scalable.checked && secured.checked) {
//         if(decentralised == theClickedOne) {
//             secured.checked = false;
//             answer.innerText = 'Multi-chain ecosystems';
//         }

//         if(scalable == theClickedOne) {
//             decentralised.checked = false;
//             answer.innerText = 'High-TPS chains';
//         }

//         if(secured == theClickedOne) {
//             scalable.checked = false;
//             answer.innerText = 'Traditional blockchains';
//         }
//     }
// }