const valores = [3, 4, 6, 7, 3, 2, 5, 3, 8]
console.log(valores[3], valores[7])
/** mostra os valores correspondentes aos indices queforam passados. [] */

valores[4] = 20 /** substitui valor corespondente ao indice '[4]'  por '20'. */
console.log(valores)

console.log(valores.length)/**  mostra o tamaho do array. */

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)
//** push adiciona valores ao array. */

console.log(valores.pop()) //** POP retorna o ultimo elemento de um array. */

delete valores[4]; /** delete tira o elemento que corresponde ao indice '[4]' e AJUSTA O ARRAY NOS INDICES. */
console.log(valores)

console.log(typeof valores) /**TYPEOF mostra o tipo que é o array, no caso, um objeto. */
