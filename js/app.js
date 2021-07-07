const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")
const answer = document.querySelector(".answer")
const insert = document.querySelector(".insert")
let num
insert.addEventListener("input", numFunction)
function numFunction(e) {
    // console.log("numFunction")
    num = parseInt(e.target.value)
    // console.log("numFunction num", num)
    // console.log("num", parseInt(e.target.value))
}

console.log("answer", typeof(parseInt(answer.textContent)))

plusBtn.onclick = function() {
    // console.log("num", num)
    answer.textContent = parseInt(answer.textContent) + num
    // console.log(parseInt(answer.textContent) + num)
    // console.log(parseInt(answer.textContent))
    // console.log(num)
}

minusBtn.onclick = function() {
    answer.textContent = parseInt(answer.textContent) - num
}
