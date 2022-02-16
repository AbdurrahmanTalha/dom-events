let blueBtn = document.getElementById('blue-button')
const greenBtn = document.getElementById('green-button');
const goldenBtn = document.getElementById('golden-button');


blueBtn.onclick =
    function () {
        document.body.style.backgroundColor = 'blue'
    }

// handle Blue Button click by settings Function name

greenBtn.onclick = function makegreen() {
    document.body.style.backgroundColor = 'green'
};
goldenBtn.addEventListener('click', goldenBtnBackground);

function goldenBtnBackground() {
    document.body.style.backgroundColor = 'goldenrod'
}
const hotPinkButton = document.getElementById('pink-button');
console.log(hotPinkButton)
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink'
})

document.getElementById('lighBlue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightcoral'
})

document.getElementById('lighBlue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightcoral'
})