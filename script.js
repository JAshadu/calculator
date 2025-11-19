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
    else if(e.target.value === "π") {}
    else if(e.target.value === "÷") {}
    else if(e.target.value === "×") {}
    else if(e.target.value === "-") {}
    else if(e.target.value === "+") {}
    else if(e.target.value === "=") {}
    else{
        output.value += e.target.value
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", touchButton)
}