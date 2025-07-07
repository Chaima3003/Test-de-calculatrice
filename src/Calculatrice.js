class Calculatrice {


    #verifier(a, b) {
        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error("les parametres doivent etre des nombres");
        }
    }


    additionner(a, b){
        this.#verifier(a, b)
        return a + b;
    }

    soustraire(a, b){
        this.#verifier(a, b)
        return a - b;
    }

    multiplier (a, b){
        this.#verifier(a, b)
        return a * b;
    }

    diviser (a, b) {
        this.#verifier(a, b)
        if (b === 0) {
            throw new Error("Division par zero impossible")
        }
        return a / b;
    }
}

module.exports = Calculatrice