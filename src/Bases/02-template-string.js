const nombre = 'Alan';
const apellido = 'Romero';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${nombre} ${apellido} `;
const saludo = 'Hola Mundo';

console.log( nombreCompleto );

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log( ` Este es un texto: ${ getSaludo(nombre) }` );