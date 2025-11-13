const output = document.getElementById("output")
const inputs = document.getElementsByTagName("input")
const buttons = []

Array.from(inputs).forEach((input) => {
    if(input.type === "button") {
        buttons.push(input)
    }
})