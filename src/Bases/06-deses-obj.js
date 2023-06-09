//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({ clave, nombre, edad, rango = 'Capitán'}) => {

    // console.log( edad, nombre, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.544,
            lng: -12.146
        }
    }
}

const { nombreClave,anios,latlng:{ lat,lng } } = useContext( persona );
// const { lat,lng } = latlng;

console.log(nombreClave,anios);
console.log( lat, lng );