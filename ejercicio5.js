let palabra = "aibofobia";
let palabraAlReves = "";

for (let i = palabra.length -1; i>=0; i--)
    {
        palabraAlReves += palabra[i];
    }
    if (palabraAlReves === palabra){
        console.log("La palabra", palabra, "es un palindromo")
    } else {
        console.log("La palabra", palabra, "no es un palindromo")
    }