class Student {
    constructor(name, age, notes){
        this.name = name;
        this.age = age;
        this.notes= notes
    }

    addNote(note) {
        if (!isNaN(note )){
            if (note >= 0 && note <= 10){
                this.notes.push(note);
            }else console.log("Introduce a real note");
        } else console.log("ERROR,Introduce a Number")
    }

    average() {
        let addition = 0
        this.notes.forEach( (note) => addition += note)
        let result = Math.round(addition/this.notes.length)
        if (result >= 5){
            console.log(`${this.name} approved with a: ${result}`)
        }else{
            console.log(`${this.name} suspended with a: ${result}`)
        }
    }
}

const student = new Student('Adrián',21,[7,8,10,6,5,4]);
student.addNote(7)
student.addNote(50)
student.addNote("hola")
student.average()