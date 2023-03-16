//Funciones JS

// const saludar = function(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola, Mundo`;


//console.log( saludar( 'Goku' ) );

console.log( saludar2("Vegeta") );
console.log( saludar3("Goku") );
console.log( saludar4() );

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi69', 
});

const user = getUser();
console.log( getUser() );

// 1. Tranformar a funcion flecha
// 2. Tiene que regresar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC123',
//         username: nombre
//     }
// };

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC123',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Jimmy');
console.log( usuarioActivo );