let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++)
{
    if (i % 2 === 0)
        {
            pares.push([i]);
        } else if (i % 2 !== 0)
            {
                impares.push([i]);
            }
}
console.log("los pares son", pares);
console.log("los impares son", impares);