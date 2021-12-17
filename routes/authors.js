const res = require("express/lib/response");

// const express = require(express);
const router = express.Router();


// All Authors Route
router.get("/", (req, res) => {
    res.send('authors/index');
})

// New Author Route
router.get("/new", (req, res) => {
    res.send('authors/new');
})

// Create Author Route
router.post('/', (req, res) => {
    res.send('create');
})



module.exports = {
    router
};