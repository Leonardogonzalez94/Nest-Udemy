export let name= "Leonardo"
export const age:number= 35;
export const isValid: boolean=true;
name= "Melissa"
//name=true --->> no es asignable por que es de tipo string,ni booleano, numer , arreglo, objeto

export const templateString=`Èsto es un string 
multilinea
que puede tener 
" dobles
' simples
inyectar valores ${name}
expresiones ${1+1}
numeros: ${age}
booleanos ${isValid}`
console.log(templateString);