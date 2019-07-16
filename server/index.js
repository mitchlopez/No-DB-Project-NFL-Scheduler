const express = require("express");
const data = require("./schedules.json");
let favorites = [];
let favId = 0;

const PORT = 5050;

const App = express();
App.use(express.json());

weekSchedule = inputNum => {
  let weekNum = [];
  for (let i = 0; i < data.length; i++) {
    weekNum.push(data[i][inputNum]);
  }
  return weekNum;
};

App.get("/api/favorites", (req, res) => {
  res.json(favorites);
});

App.post("/api/favorites", (req, res) => {
  console.log(req.body);
  const { name, abv, games, week } = req.body;
  favorites.push({ favId, name, abv, games, week });
  favId++;
  res.json(favorites);
});

App.get("/api", (req, res) => {
  res.json(data);
});

App.get("/api/:id", (req, res) => {
  res.json(data.filter(data => data.abreviation === req.params.id));
  console.log("sent data");
});

App.get("/api/week/:week", (req, res) => {
  res.json(weekSchedule(req.params.week));
});

App.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
