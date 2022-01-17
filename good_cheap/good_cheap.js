const toggles = document.querySelectorAll('.toggle');
const decentralised = document.querySelector('#decentralised');
const scalable = document.querySelector('#scalable');
const secured = document.querySelector('#secured');
const result = document.getElementById('result');
const answer = document.getElementById('answer');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

// function doTheTrick(theClickedOne) {
//     if(decentralised.checked && scalable.checked) {
//         secured.checked = false;
//         result.innerText = 'Multi-chain ecosystems';
//     } else if(scalable.checked && secured.checked) {
//         decentralised.checked = false;
//         result.innerText = 'High-TPS chains';
//     } else if(secured.checked && decentralised.checked) {
//         scalable.checked = false;
//         result.innerText = 'Traditional blockchains';
//     }
// }


function doTheTrick(theClickedOne) {
    if(decentralised.checked && scalable.checked && secured.checked) {

        if(decentralised == theClickedOne) {
            secured.checked = false;
            answer.innerText = 'Answer: Multi-chain ecosystems';
        }

        if(scalable == theClickedOne) {
            decentralised.checked = false;
            answer.innerText = 'Answer: High-TPS chain';
        }

        if(secured == theClickedOne) {
            scalable.checked = false;
            answer.innerText = 'Answer: Traditional blockchains';
        }
    }
}