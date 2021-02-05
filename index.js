const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

const dbUrl = 'mongodb://localhost:27017/Ecomerce'

mongoose.connect(dbUrl,{useCreateIndex:true,useNewUrlParser:true})
.then(resp=> console.log('connection db correcto'))
.catch(err=> console.log(err))


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'),()=>{

    console.log(`server in the port ${app.get('port')}`)
})
