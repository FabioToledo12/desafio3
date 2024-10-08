

class Hero {
	constructor(name, age, tipo){
		this.name = name
		this.age = age
		this.tipo = tipo
	}

	ataque(tipo){
		let tipoAtaque = ""
		if(tipo === "guerreiro"){
			tipoAtaque = "espada"
		}else if (tipo === "mago"){
			tipoAtaque = "magia"
		}else if (tipo === "monge"){
			tipoAtaque = "artes marciais"
		}else if (tipo === "ninja"){
			tipoAtaque = "shuriken"
		}else {
			tipoAtaque = "Faio, vc não possui ataque"
		}
		return tipoAtaque
	}
}

// biome-ignore lint/style/useConst: <explanation>
let newHero = new Hero("HeroTwo", 31, "guerreiro")

console.log("========================================================")

console.log(
	`O ${newHero.tipo} atacou usando ${newHero.ataque(newHero.tipo)}`,
);

console.log("========================================================")

newHero.tipo = "monge"
console.log(
	`O ${newHero.tipo} atacou usando ${newHero.ataque(newHero.tipo)}`,
);

console.log("========================================================")

newHero.tipo = "ninja"
console.log(
	`O ${newHero.tipo} atacou usando ${newHero.ataque(newHero.tipo)}`,
);

console.log("========================================================")

newHero.tipo = "mago"
console.log(
	`O ${newHero.tipo} atacou usando ${newHero.ataque(newHero.tipo)}`,
);

console.log("========================================================")

// biome-ignore lint/style/useConst: <explanation>
let newHero2 = new Hero("HeroTen", 45, "")
console.log("===============  Segundo Heroi  ========================")
console.log("========================================================")

console.log(
	`O ${newHero2.tipo} atacou usando ${newHero2.ataque(newHero2.tipo)}`,
);

console.log("========================================================")

newHero2.tipo = "guerreiro"
console.log(
	`O ${newHero2.tipo} atacou usando ${newHero2.ataque(newHero2.tipo)}`,
);

console.log("========================================================")

newHero2.tipo = "mago"
console.log(
	`O ${newHero2.tipo} atacou usando ${newHero2.ataque(newHero2.tipo)}`,
);

console.log("========================================================")

newHero2.tipo = "ninja"
console.log(
	`O ${newHero2.tipo} atacou usando ${newHero.ataque(newHero2.tipo)}`,
);