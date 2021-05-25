let ListarTabla = (base, limite) => {
    for (i = 1; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i}\n`;
    }
}

console.log(listarTabla(2, 4));