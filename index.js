var cors = require('cors')
global.foodData = require('./db')

(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

const express = require('express');

const app = express()
const port = 5000
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/foodData', async (req, res) => {
  try {
      // console.log( JSON.stringify(global.foodData))
      // const userId = req.user.id;
      // await database.listCollections({name:"food_items"}).find({});
      res.send([global.foodData, global.foodCategory])
  } catch (error) {
      console.error(error.message)
      res.send("Server Error")

  }
})

app.use('/api', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

