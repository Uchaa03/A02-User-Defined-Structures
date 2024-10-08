//Books Objects Array

const book1 = {
    title: "Black Clover",
    autor: "Yuki Tabata",
    pages: 250,
    //Method to resume the book content
    resume() {
        return `Title: ${this.title}\n Autor: ${this.autor}\n Pages: ${this.pages}\n`;

    }
}

const book2 = {
    title: "El Quijote",
    autor: "Cervantes",
    pages: 400,
    resume() {
        return `Title: ${this.title}\n Autor: ${this.autor}\n Pages: ${this.pages}\n`;

    }
}

const book3 = {
    title: "Harry Potter",
    autor: "J.K.Rowling",
    pages: 320,
    //Method to resume the book content
    resume() {
        return `Title: ${this.title}\n Autor: ${this.autor}\n Pages: ${this.pages}\n`;

    }
}

//Array of books
const books = [book1, book2, book3];

books.forEach(book => alert(book.resume()))