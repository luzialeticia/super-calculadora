const sum = (a, b) => a + b

const subtractionA = (a, b) => a - b
const subtractionB = (a, b) => b - a

const multiplication = (a, b) => a * b

const divisionA = (a, b) => {
    if (b === 0) {
        return `Não é possível efetuar divisão por 0`
    } else {
        return a / b
    }
}
const divisionB = (a, b) => {
    if (a === 0) {
        return `Não é possível efetuar divisão por 0`
    } else {
        return b / a
    }
}

const exponent = (num) => Math.pow(num, 2)

const divider = (num) => {
   const dividers = []

   for (let i = 1; i <= num; i++) {
       if (num % i === 0) {
           dividers.push(i)
       }
   }
   return dividers
}

const factorial = (num) => {
    if (num <= 21) {
        let factorial = 1

        for (let i = 1; i <= num; i++) {
            factorial = factorial * i
        }
        return factorial
    } else {
        return `Número muito grande.`
    }
}