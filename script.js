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
            return data2.value;
        })
        .then((data3) => {
            text.textContent = data3;
        });
    });

