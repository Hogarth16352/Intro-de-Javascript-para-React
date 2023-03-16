//Async - Await

// const getImagenPromesa = () =>  new Promise( resolve => resolve('https://kidfuhkvnhv.com'));
// getImagenPromesa().then(  console.log );

const getImagen = async() => {

    try {

        const apiKey = 'aSP2IorT4VtzFMngw918h9mtsOVv0x5g';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        
    } catch (error) {
        //Manejo del error
        console.error( error);
    }

}

// console.log( getImagen() );

getImagen();