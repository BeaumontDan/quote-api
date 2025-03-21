const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

///// TASK 4: GET /api/quotes/random route /////
app.get('/api/quotes/random', (req, res) => {
    res.send({
        quote: getRandomElement(quotes)
    });
});

///// TASK 5: GET /api/quotes/ route /////
app.get('/api/quotes', (req, res) => {
    if (req.query.person !== undefined) {
        const personQuotes = quotes.filter(quote => quote.person === req.query.person);
        res.send({
            quotes: personQuotes
        });
    } else {
        res.send({
            quotes
        });
    }
});

///// TASK 6: POST /api/quotes/ route /////
app.post('/api/quotes', (req, res) => {
    const newQuote = {
        quote: req.query.quote,
        person: req.query.person
    };

    if (newQuote.quote && newQuote.person && newQuote.person.trim() !== '' && newQuote.person.trim() !== '') {
        quotes.push(newQuote);
        res.send({
            quote: newQuote
        });
    } else {
        res.status(400).send({
            error: 'Missing quote or person.'
        });
    };
});

///// TASK 8: Extra Credits /////
app.delete('api/quotes/:id', (req, res) => {
    const quoteIndex = quotes.findIndex(quote => quote.id === parseInt(req.params.id));

    if (quoteIndex !== -1) {
        quotes.splice(quoteIndex, 1);
        res.send({
            message: 'Quote deleted successfully.'
        });
    } else {
        res.status(404).send({
            error: 'Quote not found.'
        });
    }
})

///// TASK 3: Listen on PORT /////
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });