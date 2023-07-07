const express = require('express')
const { v4: uuidv4 } = require('uuid')
const { validateParams, validateRequestBody } = require('./validators')

const { calculatePoints } = require('./points')

const app = express()
app.use(express.json())

const m = {}

app.post('/receipts/process', validateRequestBody, (req, res) => {
  const id = uuidv4();
  const points = calculatePoints(req.body)
  m[id] = points
  res.status(200).json({ id }) 
});

app.get('/receipts/:id/points', validateParams, (req, res) => {
  const { id } = req.params
  const points = m[id]
  res.status(200).json({ points }) 
});

app.listen(3000, () => {
  console.log('Server started!')
})
