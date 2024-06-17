const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Root Page');
    res.send('Root Page');
})


app.get('/display', (req, res) => {
    console.log('Display Page');
    res.send('Display Page');
})

app.listen(3000, () => console.log('Server running on port 3000'));
