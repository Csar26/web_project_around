const lado = 4;
const cuadradoNode = document.querySelector('.template').content.cloneNode(true);
function area() {
    return lado * lado;
}

function perimetro() {
    return lado * 4;
}

const ladoTri = 3;


const estructuraCuadrado = {
    lado: 4,
    node: document.querySelector('.template').content.cloneNode(true),
    area() {
        return lado * lado;
    }, 
    perimetro() {
        return lado * 4; 
    }
}

class Cuadrado {
    constructor(lado) {
        this.lado;
    }

    area() {
        return this.lado * this.lado;
    } 

    perimetro() {
        return this.lado * 4; 
    }
}

const n = new Cuadrado(34);
n.perimetro();
