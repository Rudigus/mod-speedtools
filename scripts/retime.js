let calculateButton = document.getElementById("calculateButton")
let startTimeInput = document.getElementById("startTimeInput")
let endTimeInput = document.getElementById("endTimeInput")
let runTimeParagraph = document.getElementById("runTimeParagraph")
calculateButton.addEventListener("click", calculate)

function calculate() {
    let startTime = startTimeInput.value
    let endTime = endTimeInput.value
    let runTime = endTime - startTime

    let hours = Math.floor(runTime / 3600)
    let minutes = Math.floor(runTime / 60) - hours * 60
    let seconds = Math.floor(runTime) - hours * 3600 - minutes * 60
    let milliseconds = Math.round((runTime * 1000 - (hours * 3600 + minutes * 60 + seconds) * 1000) * 1000) / 1000
    runTimeParagraph.textContent = `Run Time: ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`
}