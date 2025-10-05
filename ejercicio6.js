let pedro = 25;
let carlos = 33;
let juan = 45;

let personas = [pedro ,  carlos, juan];

let mayor = 0;

for (i=0 ; i < personas.length; i++)
    {
        if (personas[i] > mayor)
            {
                mayor = personas[i];
            }
    }

console.log(mayor);