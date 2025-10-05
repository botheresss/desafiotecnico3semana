let vocales = ["a","e","i","o","u"];
let palabra = "murcielago";
let contador = 0;

for (let letra of palabra)
{
    if (vocales.includes(letra))
    {
        contador += 1;
    }
}
console.log("hay", contador, "vocales en la palabra", palabra)