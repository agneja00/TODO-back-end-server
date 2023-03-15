import express from "express"
import listController from "./controllers/listController.mjs"
import createTodoController from "./controllers/createTodoController.mjs"
import removeTodoController from "./controllers/removeTodoController.mjs";

const app = express();

const bodyParse = express.json();

app.use(bodyParse);
app.get('/api/list', listController)
app.post('/api/todo', createTodoController)
app.delete('/api/todo', removeTodoController)

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})

// http  localhost:3000    /api/todo