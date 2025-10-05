const readline = require("readline");


numero = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("de que numero quieres la tabla de multiplicar: ", (RTAnumero) =>
{
        numero = parseInt(RTAnumero);
        rl.close();
    for(i=1; i<=10; i++)
    {
        console.log(numero, "x", i, "=", numero*i)
    }
});