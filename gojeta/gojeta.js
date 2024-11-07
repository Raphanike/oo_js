class Lutador {
    constructor(nome, forca, velocidade, evolucao) {
        this.nome = nome;
        this.forca = forca;
        this.velocidade = velocidade;
        this.evolucao = evolucao;
    }

    power() {
        console.log(`${this.nome}: Eu sou o ${this.nome}, e estou pronto para lutar!`);
    }

    combater(outroLutador) {
        console.log(`${this.nome} está enfrentando ${outroLutador.nome}!`);
        
        let pontosDeForca = this.forca + this.velocidade + this.evolucao;
        let pontosDeForcaOponente = outroLutador.forca + outroLutador.velocidade + outroLutador.evolucao;
        let sorteGoku = Math.random(); 
        let sorteVegeta = Math.random(); 

        pontosDeForca *= sorteGoku;
        pontosDeForcaOponente *= sorteVegeta;

        if (pontosDeForca > pontosDeForcaOponente) {
            console.log(`${this.nome} venceu!`);
        } else if (pontosDeForca < pontosDeForcaOponente) {
            console.log(`${outroLutador.nome} venceu!`);
        } else {
            console.log("Foi um empate!");
        }
    }
}

class Goku extends Lutador {
    constructor() {
        super("Goku", 95, 85, 100); 
    }
}

class Vegeta extends Lutador {
    constructor() {
    
        super("Vegeta", 85, 89, 95);
    }
}

const goku = new Goku();
const vegeta = new Vegeta();
goku.combater(vegeta);

