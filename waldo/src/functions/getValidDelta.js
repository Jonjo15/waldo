export  const getValidDelta = (obj) => {
    let validXGuesses = [];
    let validYGuesses = []
    for (let i = 1; i <= 20; i++) {
        validXGuesses.push(obj.X + i)
        validXGuesses.push(obj.X - i)
        validYGuesses.push(obj.Y + i)
        validYGuesses.push(obj.Y - i)
    }
    // console.log(obj)
    return {validXGuesses, validYGuesses}
}