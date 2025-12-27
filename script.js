const output = document.getElementById("output")
const inputs = document.getElementsByTagName("input")
const buttons = []
const pi = 3.14159265
let afterEquals =  false
const symbols = ["=", "+", "-", "×", "÷", "C", "DE"]

Array.from(inputs).forEach((input) => {
    if(input.type === "button") {
        buttons.push(input)
    }
})

const touchButton = (e) => {
    if(afterEquals && !symbols.includes(e.target.value)) {
        output.value = ''
    }

    if(e.target.value === "C") {
        output.value = ''
        afterEquals = false
    }
    else if(e.target.value === "DE") {
        output.value = output.value.slice(0, -1)
        afterEquals = false
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
        afterEquals = false
    }
    else if(e.target.value === "=") {
        if(output.value === '') {return}
        output.value = output.value.replace("×", "*")
        output.value = output.value.replace("÷", "/")
        output.value = eval(output.value)
        afterEquals = true
    }
    else{
        output.value += e.target.value
        afterEquals = false
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", touchButton)
}