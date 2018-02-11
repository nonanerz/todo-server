const express = require('express')

const Todo = require('./model')

const router = express.Router()

router.get('/todos', (req, res, next) => {
  Todo.find({})
        .then(todos => {
          res.json({todos})
        })
        .catch(next)
})

router.post('/todos', (req, res, next) => {
  new Todo(req.body.todo)
        .save()
        .then(todo => {
          res.json({todo})
        })
        .catch(next)
})

router.put('/todos/:id', function (req, res) {
  Todo.findById(req.params.id, (err, todo) => {
    todo.text = req.body.todo.text || todo.text
    todo.url = req.body.todo.url || todo.url
    todo.date = req.body.todo.date || todo.date
    todo.complete = req.body.todo.complete
    todo.save((err, todo) => {
      if (err) {
        res.status(400).json(err)
      }
      res.status(200).json(todo)
    })
  })
})

router.delete('/todos/:id', function (req, res) {
  let id = req.params.id
  Todo.remove({
    _id: id
  }, function () {
    res.json()
  })
})

module.exports = router
