const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.post('/places/:id', (req, res) => {

    const { id } = req.params;
    const { name } = req.body;
    const { rate } = req.body;

    if (!rate | !name) {
        res.status(418).send({ message: 'Values are missing'})
    }

    res.send({
        place: `Place ${name} has been created with a ${rate} rate`
    })

});

app.get('/places/:id', (req, res) => {
    res.status(200).send({})
    res.send({
        place: `${id.name} has a ${id.rate} rate`
    })
})