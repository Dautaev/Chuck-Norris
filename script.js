// fetch('https://api.chucknorris.io/jokes/random')
//     .then(data => {
//     console.log(data)
// })
const random = document.querySelector(".btn");
const text = document.querySelector(".text");

random.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((data) => {
            return data.json();
        })
        .then((data2) => {
            text.textContent = data2.value; 
        });
    });

