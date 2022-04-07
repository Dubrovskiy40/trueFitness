const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require("cors");

const users = [
    { phone: "89999999999", password: "123456" },
    { phone: "81111111111", password: "654321" },
];

const recipes = [
    {id: 1, nameRecipe: 'Молочный коктейль', recipe: 'Тут рецепт приготовления молочного коктейля'},
    {id: 2, nameRecipe: 'Мясной коктейль:)', recipe: 'Тут рецепт приготовления мясного коктейля'},
    {id: 3, nameRecipe: 'Человеческий коктейль', recipe: 'Тут рецепт приготовления человеческого коктейля'},
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger("dev")); // мидвар, который позволяет выводить все логи в консоль

app.post("/auth", (req, res) => {
    const { phone, password } = req.body;
    console.log('body', req.body);
    if (phone && password) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].phone === phone && users[i].password === password) {
                console.log('Свой:)')
                return res.json(users[i]);
            }
        }
    }
    res.sendStatus(400);
});

app.get("/food", (req, res) => {
    res.json(recipes);
});

app.delete("/food", (req, res) => {
    console.log(req.query, "id delete");
});

app.post("/food", (req, res) => {
    console.log(req.body, "body");
    const { value } = req.body;
    console.log(value);
    recipes.push(value);
    res.json(recipes);
});


app.listen(3001, () => {
    console.log("servak start");
});