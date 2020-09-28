function calcular() {
    const numberA = document.getElementById("numberA").valueAsNumber
    const numberB = document.getElementById("numberB").valueAsNumber

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

//Resultados:
    document.getElementById('sum').valueAsNumber = sum(numberA, numberB)
    document.getElementById('subtractionA').valueAsNumber = subtractionA(numberA, numberB)
    document.getElementById('subtractionB').valueAsNumber = subtractionB(numberA, numberB)
    document.getElementById('multiplication').valueAsNumber = multiplication(numberA, numberB)
    document.getElementById('divisionA').valueAsNumber = divisionA(numberA, numberB).toFixed(2)
    document.getElementById('divisionB').valueAsNumber = divisionB(numberA, numberB).toFixed(2)
    document.getElementById('exponentBaseA').valueAsNumber = exponent(numberA)
    document.getElementById('exponentBaseB').valueAsNumber = exponent(numberB)
    document.getElementById('dividerA').value = divider(numberA)
    document.getElementById('dividerB').value = divider(numberB)
    document.getElementById('factorialA').value = factorial(numberA)
    document.getElementById('factorialB').value = factorial(numberB)
}