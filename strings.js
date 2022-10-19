const escola = 'Cod3r Cinho'

console.log(escola.charAt(4)) /**RETORNA A STRING NA POSIÇÃO 4 */

console.log(escola.charAt(5)) /**RETORNA VAZIO, POIS NÃO HÁ NADA NA POSILÇAO 5.  */

console.log(escola.charCodeAt(3)) /**RETORNA O VALOR  DA STRING CORRESPONDENTE (3) NA TABELA ASCII*/

console.log(escola.indexOf('3')) /**RETORNA A STRING ASSOCIADA AO DIGITO (3) */

console.log(escola.substring(1))/**RETORNA AS STRINGS A PARTIR DO INDICE DIGITADO. */

console.log(escola.substring(3, 4)) /**RETORNA AS STRINGS QUE CORRESPONDEM O INDICE 3 ATÉ O INDICE 4 (NAO INCLUINDO O INDICE 4)*/

console.log('escola '.concat(escola).concat('!'))/**CONCATENA AS STRIGS COM A VARIAVEL 'ESCOLA' */


console.log(escola.replace('3', "e"))/**SUBSTITUI A STRING QUE CORRESPONDE AO PRIMEIRO PARAMETRO PELO DIGITO DO SEGUNDO PARAMETRO (TROCOU A STRING '3' POR 'E', ficando 'Coder') */

console.log(escola.replace(/\w/, 't'))/**SUBSTITUI A PRIMEIRA A STRING PELO DIGITO DO SEGUNDO PARAMETRO. (TROCOU A PRIMEIRA STRING 'C' POR 'T', FICANDO tod3r) */

console.log(escola.replace(/\w/g, 't'))/**SUBSTITUI *TODAS* AS STRINGS CORRESPONDENDO AO PRIMEIRO PARAMETRO PELO DIGITO DO SEGUNDO PARAMETRO. (TROCOU TODAS AS STRINGS POR 't', FICANDO 'ttttt') */

console.log('Anna, Brenda, Maria'.split(','))/**RETORNA UM ARRAY, SENDO DIVIDIDO OS ELEMENTOS DEPOIS DA VIRGULA. EX: [ 'Anna', ' Brenda', ' Maria' ] */



