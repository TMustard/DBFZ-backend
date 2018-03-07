const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/tips", (request, response) => {
  queries
    .list()
    .then(tips => {
      response.json({ tips });
    })
    .catch(console.error);
});

app.get("/tips/:id", (request, response) => {
  queries
    .read(request.params.id)
    .then(tips => {
      response ? response.json({ tips }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/tips", (request, response) => {
  queries
    .create(request.body)
    .then(tip => {
      response.status(201).json({ tip: tip });
    })
    .catch(console.error);
});

app.delete("/tips/:id", (request, response) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/tips/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(tip => {
      response.json({ tip: tip[0] });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.sendStatus(404);
});

module.exports = app;
