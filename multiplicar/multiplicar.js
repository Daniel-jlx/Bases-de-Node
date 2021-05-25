const fs = require('fs');
const colors = require('colors');



let ListarTabla = (base, limite) => {

    console.log('=================='.red);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.red);

    for (i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}\n`);
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla*${ base },txt`)

        });
    });
}

module.exports = {
    crearArchivo,
    ListarTabla

}