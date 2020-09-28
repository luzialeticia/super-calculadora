let inputA = null, inputB = null, inputSum = null, inputSub = null, inputMult = null, inputDivA = null, inputDivB = null, powA = null, powB = null, dividerA = null, dividerB = null, factA = null, factB = null


const calcular = (event) => {
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
       let howMuchDividers;
       let dividersToString;
       let dividersToPlural = `divisor`
    
       for (let i = 1; i <= num; i++) {
           if (num % i === 0) {
               dividers.push(i)
           }
       }
    
       howMuchDividers = dividers.length
       dividersToString = dividers.join(', ')
    
       if (howMuchDividers > 1) {
           dividersToPlural = `divisores`
       }
    
       return `${dividersToString} (${howMuchDividers} ${dividersToPlural})`
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
    
    const numberA = document.getElementById('numberA').valueAsNumber
    const numberB = document.getElementById('numberB').valueAsNumber
    let resultSum = document.getElementById('sum').valueAsNumber
    
    resultSum = sum(numberA, numberB)
}