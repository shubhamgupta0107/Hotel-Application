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
app.use('/api', userRouter)

// app.get('/customers', (req, res) => {
//   res.render('index')
// })
app.get('/', (req, res) => {
  res.sendFile('index')
})

module.exports = {
  app
}
