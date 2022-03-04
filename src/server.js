const express = require('express')
const path = require('path')
// const Handlebars = require('handlebars')
const exphbs = require('express-handlebars')
// const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(express.static(path.join(__dirname, '../public')))

app.engine('hbs', exphbs.engine({
  // handlebars: allowInsecurePrototypeAccess(Handlebars),
  layoutsDir: path.join(__dirname, '../views/layouts'),
  defaultLayout: 'index',
  extname: '.hbs',
  partialsDir: path.join(__dirname, '../views/partials')
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'))

const userRouter = require('./routes/users.js')
// require('./routes/services')
// require('./routes/registers')

app.use('/api', userRouter)

app.get('/', (req, res) => {
  res.render('home', { title: 'Welcome to SFCC Tourism Inn' })
})

app.get('/register', (req, res) => {
  res.render('registration', { title: 'Register for Services' })
  // res.sendFile('registration.html', { root: path.join(__dirname, '../public') })
})

module.exports = {
  app
}
