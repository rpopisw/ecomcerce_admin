import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import router from './routes'

const app = express()

const dbUrl = 'mongodb://localhost:27017/ecomerce'

mongoose.connect(dbUrl,{useCreateIndex:true,useNewUrlParser:true})
.then(resp=> console.log('connection db correcto'))
.catch(err=> console.log(err))


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/api',router)
app.set('port',process.env.PORT || 3000)

app.listen(app.get('port'),()=>{

    console.log(`server in the port ${app.get('port')}`)
})
