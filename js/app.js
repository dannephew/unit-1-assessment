const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")
const answer = document.querySelector(".answer")
const insert = document.querySelector(".insert")
let num
insert.addEventListener("input", numFunction)
function numFunction(e) {
    console.log("numFunction")
    num = Number(e.data)
    console.log("num", num)
}

console.log(parseInt(answer.textContent))

plusBtn.onclick = function() {
    answer.textContent = parseInt(answer.textContent) + num
}

minusBtn.onclick = function() {
    answer.textContent = parseInt(answer.textContent) - num
}