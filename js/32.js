//Async - await

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes ... espere ...');

        setTimeout( function(){
            console.log('Los Clientes fueron Descargados') // se ejecuta solo una vez
        }, 5000);
    });
}

/* setInterval( function(){
    console.log('set timeout ...') //por intervalos una y otra vez
}, 3000); */

async function app(){
    try{
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch(error){
        console.log(error)
    }
}

app();
