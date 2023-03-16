// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes'
import heroes from '../data/heroes';

// console.log( owners );

//console.log( heroes );

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => {
//         if( heroe.id === 2 ){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }



export const getHeroeById = (id) => { return heroes.find( (heroe) => heroe.id === id); }

// console.log( getHeroeById(2) );

export const getHeroesByOwner = (owner) => { return heroes.filter( (heroe) => heroe.owner === owner); }

// console.log( getHeroesByOwner('DC') );
// console.log( getHeroesByOwner('Marvel') );

