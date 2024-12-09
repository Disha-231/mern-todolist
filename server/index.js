const express = require('express');

const port = 9000;

const app = express();

const db = require('./config/db')

const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use(express.urlencoded());

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);
})
