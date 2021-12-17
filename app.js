if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();

/* -------------------- Mongoose -------------------- */

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser : true});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

/* -------------------- app.use -------------------- */

app.use(express.static("Public"));

app.use('/Public/header/', express.static('./public/header/')); // in order to use the picture

/* -------------------- File system -------------------- */

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/index.html", "utf-8");


/* -------------------- frontpage -------------------- */

app.get('/', (req, res) => {
    res.send(header + frontpage + footer);
});












/* -------------------- Server start -------------------- */

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});