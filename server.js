const express = require('express')
const cors = require('cors')
let port=process.env.PORT || 4000;


const app = express()

app.use(cors('*'))

app.use(express.json())


app.post('/bfhl', (request, response) => {
  const data = request.body



  var numbers = []
  var alphabets = []


  for (let i = 0; i < data.length; i++) {
    numbers[i] = data[i].replace(/\D/g, '')
    numbers = numbers.filter(item => item);
  }

  for (let i = 0; i < data.length; i++) {
    alphabets[i] = data[i].replace(/[^a-zA-Z]/gm, "")
    alphabets = alphabets.filter(item => item);
  }


  console.log(alphabets)
  console.log(numbers)


  response1 = {
    "is_success": true,
    "user_id": "abhijeet_gurav_23031997",
    "email": "imaabhijeetgurav@gmail.com",
    "roll_number": "PD0586",
    "numbers": numbers,
    "alphabets": alphabets,
  };
  console.log(request);
  response.send(response1);
})



app.listen(port, () => {
  console.log(`server started on port 4000`)
})



