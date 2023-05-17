
export const getRandomNumber = (min, max) => {
    // Obtenemos la distancia entre los dos numeros
    const amplitude = Math.abs(max - min)

    // Generamos un numero aleatorio entre 0 y esa distancia
    const randomNumber = Math.round(Math.random() * amplitude)

    // La distancia aleatoria se suma al minimo donde el caso de extremo a 0 nos quedamos en la distancia minima y en el caso donde da la distancia completa nos quedamos con el maximo
    return min + randomNumber
}