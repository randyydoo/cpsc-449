const express = require(`express`);
const bodyParser = require(`body parser`);

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json("Hello World");
})

app.listen(PORT, () => {
    console.log(`Listening on port $(port)`);
})


