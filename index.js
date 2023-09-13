import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
let items = [];
let newItem = "";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});

app.get("/", (req, res) => {
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today = new Date();
    var formattedDate = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
    res.render("index", {
        date: formattedDate,
        newItems: items
    });
});


app.post("/", (req, res) => {
    newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/");
})