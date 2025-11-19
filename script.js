const output = document.getElementById("output")
const inputs = document.getElementsByTagName("input")
const buttons = []
const pi = 3.14159265

Array.from(inputs).forEach((input) => {
    if(input.type === "button") {
        buttons.push(input)
    }
})

const touchButton = (e) => {
    if(e.target.value === "C") {
        output.value = ''
    }
    else if(e.target.value === "DE") {
        output.value = output.value.slice(0, -1)
    }
    else if(e.target.value === "π") {
        if(output.value === '') {
            output.value = pi
        }
        else if(output.value.includes("+") || output.value.includes("-") || output.value.includes("×") || output.value.includes("÷")) {
            output.value = output.value + pi
        }
        else{
            output.value *= pi
        }
    }
    else if(e.target.value === "=") {
        output.value = output.value.replace("×", "*")
        output.value = output.value.replace("÷", "/")
        output.value = eval(output.value)
    }
    else{
        output.value += e.target.value
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", touchButton)
}