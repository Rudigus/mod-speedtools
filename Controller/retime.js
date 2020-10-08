let calculateButton = document.getElementById("calculateButton")
let startTimeInput = document.getElementById("startTimeInput")
let endTimeInput = document.getElementById("endTimeInput")
let runTimeParagraph = document.getElementById("runTimeParagraph")
calculateButton.addEventListener("click", calculate)

function calculate() {
    let startTime = startTimeInput.value
    let endTime = endTimeInput.value
    let runTime = endTime - startTime
    runTimeParagraph.textContent = `Run Time: ${runTime}`
}