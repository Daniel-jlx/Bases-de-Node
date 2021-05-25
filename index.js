// requireds
// const fs = require('espress');
// const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');



const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'Listar':
        ListarTabla(argv.base, argv.limite);
        break;

    case 'Crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// // console.log(argv.base);


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]