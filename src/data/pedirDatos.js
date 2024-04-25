
/**Separada en este archivo la llamada a la api, dado en ambos un setTimeout para hacer que respuesta tarde un segundo más y ver más el efecto Loading*/

//pido todos los cockteles, usado dentro de useEffect en ContainerCocktail
export function pedirCocteles() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    resolve(data); // Resuelve la promesa con los datos
                })
                .catch((error) => {
                    reject(error); // Rechaza la promesa en caso de error
                });
        }, 1000);
    });
}

//pido un solo cocktail usando el id de este, usado dentro de useEffect en CocktailDetalleContainer
export function pedirCoctel(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    resolve(data); // Resuelve la promesa con los datos
                })
                .catch((error) => {
                    reject(error); // Rechaza la promesa en caso de error
                });
        }, 1000);
    });
}
    


//export async function pedirCoctel(id){

//}