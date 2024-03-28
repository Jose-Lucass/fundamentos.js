//consoles
console.log("Este é o metodo log")

console.warn("Esse é o metodo warn")

console.error("Esse é o metodo error")

console.table("Coloque um array aqui")

console.info("Esse é o metodo info")

//variaveis
var banana = 15
let morango = 15
//variavel constante
const uva = 10

console.log(banana)
console.log(morango)
console.log(uva)
console.log(uva)

//tipo de dados

const name ='José Lucas dos Santos Soares'
let qtd = 5
const isApproved = false
let lasName = null
let age 
const language = ["JavaScript", "PHP", "Phyton"]
const user = {email: 'cjcj@teste.com', password: 'teste123'}

console.log(name)
console.log(qtd)
console.log(isApproved)
console.log(lasName)
console.log(age)
console.table(language)
console.log(user)




const numero = [1,2,3,45,5,54,4]

console.table(numero)


let laranja = [
  {email: "Sasssaas", password: "ASassaas" },
  {email: "Sasssaas", password: "ASassaas" },
  {email: "Sasssaas", password: "ASassaas" }
]

console.table(laranja)

//metodo de string

const fullName = 'JoséXLucasXdosXSantosXSoares'

console.log(fullName, 'nome completo')

const stringToArray = fullName.split('X')
console.table(stringToArray)

const firstName = stringToArray[0]

const lastName = stringToArray[3]

const userName = `Bem vindo, ${firstName} ${lastName}`
console.log(userName)

console.log(fullName.toLowerCase())

console.log(fullName.toUpperCase())

console.log(fullName.length)

console.log(fullName.indexOf())

console.log(fullname.indexOf ('Santos'))

//teste slice

console.log(fullname.slice(14, 21))

// métodos de array
//push

const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length, 'array')
console.log(list[4])

list [5] = 'f'
console.log(list)

//push chama mais pro final

list.push('g')
console.log(list, 'push')

//

console.log(list[list.length -1], 'aqui')

//pop tirar o ultimo

list.pop()
console.log(list)

