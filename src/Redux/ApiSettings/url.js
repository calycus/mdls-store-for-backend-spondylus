
/////////
// Función encargada de retornar un objeto el cual almacena las variables URL y HEADERS para el proceso de consumo de la API.
const API = () => {
    let api = {
        url: "https://localhost:8000",
        headers: {
            'Accept-Version': 1,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': '*',
            'X-Requested-With': 'XMLHttpRequest'
        },
    }
    return api
}

export default API