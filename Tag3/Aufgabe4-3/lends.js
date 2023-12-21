const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

// Beispielarray für ausgeliehene Bücher von ChatGPT
bookArray = [
    {
        id: 1,
        customer_id: 101,
        isbn: "1234567890",
        borrowed_at: "2023-01-15T10:30:00",
        returned_at: "2023-01-20T15:45:00"
    },
    {
        id: 2,
        customer_id: 102,
        isbn: "0987654321",
        borrowed_at: "2023-02-05T14:00:00",
        returned_at: "2023-02-10T12:20:00"
    },
    {
        id: 3,
        customer_id: 103,
        isbn: "1112223334",
        borrowed_at: "2023-03-12T09:45:00",
        returned_at: "2023-03-18T17:30:00"
    },
    {
        id: 4,
        customer_id: 104,
        isbn: "5556667778",
        borrowed_at: "2023-04-08T11:20:00",
        returned_at: "2023-04-15T14:10:00"
    },
    {
        id: 5,
        customer_id: 105,
        isbn: "9998887776",
        borrowed_at: "2023-05-20T13:15:00",
        returned_at: "2023-05-25T16:40:00"
    },
    {
        id: 6,
        customer_id: 106,
        isbn: "4443332221",
        borrowed_at: "2023-06-02T10:00:00",
        returned_at: "2023-06-08T18:05:00"
    },
    {
        id: 7,
        customer_id: 107,
        isbn: "7778889990",
        borrowed_at: "2023-07-15T16:30:00",
        returned_at: "2023-07-22T11:55:00"
    },
    {
        id: 8,
        customer_id: 108,
        isbn: "6665554443",
        borrowed_at: "2023-08-01T08:45:00",
        returned_at: "2023-08-07T14:20:00"
    },
    {
        id: 9,
        customer_id: 109,
        isbn: "3332221110",
        borrowed_at: "2023-09-10T12:00:00",
        returned_at: "2023-09-15T15:30:00"
    },
    {
        id: 10,
        customer_id: 110,
        isbn: "0009998887",
        borrowed_at: "2023-10-05T09:15:00",
        returned_at: "2023-10-12T17:10:00"
    }
];

app.get('/lends', (req, res) => res.json(bookArray));

app.get('/lends/:id', (req, res) => res.json(bookArray.find(lend => lend.id == req.params.id)));

app.post('/lends', (req, res) => {
    const book = req.body;
    bookArray.push(book);
    res.status(201).json(book);
});
   
app.patch('/lends/:id', (req, res) => {
    const index = bookArray.findIndex(lend => lend.id === req.params.id);
    bookArray[index] = req.body;
  });

app.delete('/lends/:id', (req, res) => {
    const index = bookArray.findIndex(lend => lend.id === req.params.id);
    bookArray.splice(index, 1);
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});