const express = require('express')
const path = require('path')
// const exphbs = require('express-handlebars')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(express.static(path.join(__dirname, '../public')))

// app.engine('hbs', exphbs.engine({
//   defaultLayout: 'index',
//   extname: '.hbs',
//   partialsDir: __dirname + '../views/partials'
// }))
// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, '../templates/views'))

const userRouter = require('./routes/users.js')
// require('./routes/services')
// require('./routes/registers')

app.use('/api', userRouter)

app.get('/', (req, res) => {
  res.sendFile('index')
})

app.get('/register', (req, res) => {
  // res.sendFile('C://Users//shugupta21//Desktop//hotelservices//public//registration.html')
  res.sendFile('registration.html', { root: path.join(__dirname, '../public') })
})

module.exports = {
  app
}
