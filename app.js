const Koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const router = require('./routers')
const jwt = require('koa-jwt')
const secret = require('./config/secret.json')
const err = require('./middlreware/error')
const app = new Koa()

app.use(err())
app.use(logger())
app.use(bodyParser())

app.use(jwt({secret: secret.sign}).unless({path: [/^\/api\/login/, /^\/api\/createUser/]}))


app.use(router());

app.listen(9527, () => {
  console.log(`server running success....`)
})
