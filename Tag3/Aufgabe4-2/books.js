const express = require('express');
const app = express();
const port = 3000;

//Idee von ChatGPT, ohne diese Middlware würde es nicht merken, das es ein JSON ist, den man hinzufügen möchte. (würde sonst als String gesehen werden)
app.use(express.json());

const books = [

];

// Array mit ChatGPT gemacht
const booksArray = [
    { isbn: "1234567890", title: "The Catcher in the Rye", year: 1951, author: "J.D. Salinger" },
    { isbn: "0987654321", title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee" },
    { isbn: "9876543210", title: "1984", year: 1949, author: "George Orwell" },
    { isbn: "5678901234", title: "The Great Gatsby", year: 1925, author: "F. Scott Fitzgerald" },
    { isbn: "3456789012", title: "One Hundred Years of Solitude", year: 1967, author: "Gabriel García Márquez" },
    { isbn: "2345678901", title: "Brave New World", year: 1932, author: "Aldous Huxley" },
    { isbn: "6543210987", title: "The Hobbit", year: 1937, author: "J.R.R. Tolkien" },
    { isbn: "4321098765", title: "The Lord of the Rings", year: 1954, author: "J.R.R. Tolkien" },
    { isbn: "2109876543", title: "Pride and Prejudice", year: 1813, author: "Jane Austen" },
    { isbn: "8765432109", title: "The Harry Potter series", year: 1997, author: "J.K. Rowling" }
];

app.get('/books', (request, response) => {
    response.send(booksArray);
});

app.get('/books/:isbn', (request, response) => {
    const isbnToFind = request.params.isbn;
    const foundBook = booksArray.find(book => book.isbn === isbnToFind);
    response.send(foundBook);
});

app.post('/books', (req, res) => {
    const newBook = req.body; 
    booksArray.push(newBook);
    res.json(newBook);
});

app.put('/books/:isbn', (request, response) => {
    const isbnToFind = request.params.isbn;
    const updatedBookData = request.body;
    const foundBookIndex = booksArray.findIndex(book => book.isbn === isbnToFind);
    response.json(foundBookIndex !== -1 ? (booksArray[foundBookIndex] = { ...booksArray[foundBookIndex], ...updatedBookData }) : { error: 'Book not found' });
});

app.delete('/books/:isbn', (request, response) => {
    const isbnToFind = request.params.isbn;
    const foundBookIndex = booksArray.findIndex(book => book.isbn === isbnToFind);
    response.status(foundBookIndex !== -1 ? (booksArray.splice(foundBookIndex, 1), 204) : 404).end();
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

