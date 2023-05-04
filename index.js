import express  from "express"
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


const dogsIn = [
  {
  name: 'Paco',
  breed:'chihuahua',
  age: 33,
  },
  {
  name: 'bob',
  breed:'yorkie',
  age: 34,
  },
  {
  name: 'nimby',
  breed:'pitbull',
  age: 24,
  },
  {
  name: 'aaron',
  breed:'frenchie',
  age: 34,
  },
]

app.get('/', (req, res) => res.json(dogsIn))

app.listen(4000, () => console.log(' api running on port 4000'))