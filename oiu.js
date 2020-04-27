let age = 9
let year = 1
let newage = age + year
console.log("next year, samantha will be " + newage)
document.getElementById("addbutton").addEventListener("click", addnumbers)
document.getElementById("subtractbutton").addEventListener("click", subtractnumbers)

function addnumbers() {
    let a1 = document.getElementById("addend1")
    let a2 = document.getElementById("addend2")

    let sum = parseInt(a1.value) + parseInt(a2.value)
    console.log("the answer is " + sum)
    let answer = document.getElementById("answer")
    answer.textContent = sum
}
document.getElementById("hibutton").addEventListener("click", hisam)

function hisam() {
    let hiheader = document.getElementById("hiheader")
    hiheader.textContent = "hi im sam"
}

function subtractnumbers() {
    let n1 = document.getElementById("number1")
    let n2 = document.getElementById("number2")

    let give = parseInt(n1.value) - parseInt(n2.value)
    let equals = document.getElementById("equals")
    equals.textContent = give

}