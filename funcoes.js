function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 6, 7,) /** ignora os numeros (4,5,6,7) retorna 12 */


function soma(a, b = 10) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))


// função na variavel. 
