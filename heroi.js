class Heroi{

	constructor(nome, idade, tipo){
    	this.nome = nome;
    	this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar(){
        let ataque = this.getAtaque()
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    
    }

    getAtaque(){
        switch(this.tipo){
            case "ninja": 
            return "shuriken"

            case "guerreiro":
            return "espada"

            case "mago":
            return "magia"

            case "monge":
            return "artes marciais"
        }
        
    }

}
let akemi = new Heroi("akemi", 23, "ninja")
akemi.atacar()
