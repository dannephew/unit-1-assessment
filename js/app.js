const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")
const answer = document.querySelector(".answer")

console.log(parseInt(answer.textContent))
plusBtn.onclick = function() {
    answer.textContent = parseInt(answer.textContent) + 1
}

minusBtn.onclick = function() {
    answer.textContent = parseInt(answer.textContent) - 1
}