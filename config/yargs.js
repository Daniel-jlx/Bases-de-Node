const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'L',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicacion', opts)
    .help()
    .argv

module.exports = {
    argv
}