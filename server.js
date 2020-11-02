const express = require('express'); // how we import in node
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(new Date());
    res.json([
        {
            name: 'spot'
        },
        {
            name: 'rover'
        }
    ]);
});

app.get('/drinks', (req, res) => {
    const drinks = [
        {
            name: 'apple juice'
        }, 
        {
            name: 'beer'
        }, 
        {
            name: 'sprite'
        }
    ];

    res.json(drinks);    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});