const fs = require('fs');

let base = 5;

let data = '';

for (i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base * i}\n`;
}

fs.writeFile(`tablas/tabla-${ base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ base }.txt ha sido creado`);
});