import mongoose,{Schema} from 'mongoose'

const userSchema = new Schema({
    rol: {type:String, maxlength:30,required:true},
    nombre: {type:String,maxlength:200,required:true},
    type_document:{type:String,maxlength:200},
    addres:{type:String,maxlength:200},
    phone:{type:String,maxlength:30},
    email:{type:String,maxlength:200,unique:true,required:true},
    password:{type:String,maxlength:100,required:true},
    status:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}

})  

const User = mongoose.model('user',userSchema)

export default user