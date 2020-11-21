export  const getValidDelta = (obj) => {
    let validXGuesses = [];
    let validYGuesses = []
    for (let i = 1; i <= 20; i++) {
        validXGuesses.push(obj.x + i)
        validXGuesses.push(obj.x - i)
        validYGuesses.push(obj.y + i)
        validYGuesses.push(obj.y - i)
    }
    return {validXGuesses, validYGuesses}
}