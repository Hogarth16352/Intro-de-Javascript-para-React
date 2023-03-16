//Promesas

import { getHeroeById } from "./Bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//             // console.log('2 segundos después');
//             //Tarea
//             //Importen el
//             const p1 = getHeroeById(2);
//             // console.log(heroe);
//             resolve(p1);
//             // reject('No se pudo encontrar el héroe');
//     }, 2000);

// } );

// promesa.then( (heroe) => {
//     console.log('Heroe: ',heroe)
// })
// .catch( err => console.warn(err) );

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
                const p1 = getHeroeById(id);
                if( p1 ){
                    resolve(p1);
                }else{
                    reject('No se pudo encontrar el héroe');
                }
        }, 2000);

    } );


}

getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.warn );