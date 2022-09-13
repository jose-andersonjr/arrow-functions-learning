// arrow function
// (a, b) => {
//     return a + b
// }

// (a, b) => a + b

let a = 5
let b = 10

let c = (n1, n2) => n1 + n2
console.log(c(a, b)) //Chama a função C passando como parâmetros a e b

let d = (x, y) => {
    let op

    if(x > 5) {
        op = x * y
    } else {
        op = x / y
    }

    return op
}

console.log(d(b, addEventListener))

// Arrow functions com um argumento
let frase = "O Anderson é um ótimo DEV"

let fraseArray = (frase) => frase.split(' ')

console.log(fraseArray(frase))

// sem arg
let semArg = () => console.log('Não tenho argumentos')

semArg()

//Casos de uso 
let roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 80, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'Camiseta', preco: 15, cor: 'Rosa'},
    {produto: 'Calção', preco: 20, cor: 'Azul'},
]

let precoMaiorQue50 = roupas.filter((roupa) => {
    return roupa.preco >= 50 // essa equivale a 'Para cada roupa em roupas'
})

console.log(precoMaiorQue50)

setTimeout(() => {
    console.log('Deu tempo! arrow')
}, 150)

// A mesma função sem arrow function
setTimeout(function() {
    console.log('Deu tempo! normal')
}, 150)

// Não usar uma arrow 
let pessoa = {
    
}
