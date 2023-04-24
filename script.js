const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
const fruta2 = document.getElementById("fruta-2")
const fruta3 = document.getElementById("fruta-3")
let fruta4 = document.getElementById("fruta-4")

const input = document.getElementById("fruta4")
console.log(input.value)

fruta1.innerHTML = frutas[0]
fruta2.innerHTML = frutas[1]
fruta3.innerHTML = frutas[2]

const mostrarNoInput =() =>{
    console.log(input.value)
}

const adicionar = () => {
    fruta4.innerHTML = input.value
    input.value = ""
}
