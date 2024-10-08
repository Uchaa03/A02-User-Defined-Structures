//En este caso para no copiar tu ejemplo de clases y ya que la actividad pide
// un objeto e corregido la funcionalidd de lo ya creado por mi simplemente,
//a pesar de que lo coherente es hacerlo con objetos

const players = []

const player1 = {
    name: "Kratos",
    race: "Humano",
    level: 1,
    life: 100,
    //Implement direct functions in the object
    atacar: function (enemy) {
        enemy.life -= 10;
        if (enemy.life <=0) {
            enemy.levelUp()
        }
    },
    recoverLife: function () {
        this.life += 20
        if (this.life > 100){
            this.life = 100
        }
    },
    levelUp: function () {
        this.life = 100
        this.level = 1
        alert(`Player ${this.name} has been defeat and reset`)
    }
}

const player2 = {
    name: "Tyler",
    race: "Enano",
    level: 1,
    life: 100,
    //Implement direct functions in the object
    //Implement direct functions in the object
    atacar: function (enemy) {
        enemy.life -= 10;
        if (enemy.life <=0) {
            enemy.levelUp()
        }
    },
    recoverLife: function () {
        this.life += 20
        if (this.life > 100){
            this.life = 100
        }
    },
    levelUp: function () {
        this.life = 100
        this.level = 1
        alert(`Player ${this.name} has been defeat and reset`)
    }
}

players.push(player1)
players.push(player2)

//Testing function
player1.atacar(player2)
player1.atacar(player2)
player1.atacar(player2)
player2.atacar(player2)
player2.atacar(player2)
player1.atacar(player2)
player1.atacar(player2)
player2.atacar(player2)
player1.atacar(player2)
player2.recoverLife()
player1.recoverLife()
player1.atacar(player2)
player1.atacar(player2)
player1.atacar(player2)
player1.atacar(player2)
player1.atacar(player2)
player1.atacar(player2)
player1.atacar(player2)