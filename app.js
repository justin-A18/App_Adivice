// URL de la API "Advice Slip" para obtener consejos aleatorios
const APIURL = "https://api.adviceslip.com/advice";

// Función para obtener un consejo aleatorio
const getRandomAdvice = () => {
    // Realiza una solicitud GET a la API
    fetch(APIURL)
    .then((response) => {
        // Verifica si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error("La solicitud no fue exitosa");
        }
        // Parsea la respuesta como JSON
        return response.json();
    })
    .then((data) => {
        // Extrae el ID del consejo y el consejo en sí del objeto JSON
        const adviceId = data.slip.id;
        const advice = data.slip.advice;
        
        // Actualiza el contenido de elementos HTML con los datos obtenidos
        document.getElementById("advice-id").textContent = adviceId; 
        document.getElementById("advice").textContent = `"${advice}"`; 
    })
    .catch((err) => {
        // Maneja errores y muestra mensajes en la consola
        console.error(`Hubo un error: ${err}`);
    });
}

// Agrega un event listener al botón con el id "advice-btn"
document.getElementById("advice-btn").addEventListener("click", () => {
    // Cuando se hace clic en el botón, llama a la función para obtener un consejo aleatorio
    getRandomAdvice();
});
