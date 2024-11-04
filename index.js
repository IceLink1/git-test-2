const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))


var bodyParser = require('body-parser');

app.post('/update', function(req, res) {
  const { name, description } = req.body;
  res.send(`Name ${name}, desc ${description}`);
});

app.listen(port, () => console.log(`Server started port ${port}!`))



// --------reset remote------
// git remote -v  
// git remote set-url origin git://github.com/YourDirectory/YourProject.git