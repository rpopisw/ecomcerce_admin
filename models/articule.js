import mongoose,{Schema} from 'mongoose';

const articuleSchema = new Schema({
    category:{ type: Schema.ObjectId,ref:'category'},
    codigo:{ type:String,maxlength:400},
    name:{type:String,maxlength:300,unique:true,required:true},
    description:{type:String,maxlength:300,unique:true,required:true},
    sales_price:{type:Number,required:true},
    stock:{type:Number,required:true},
    status:{type:Number,default:1},
    crateAt:{type:Date,default:Date.now}
})

const Articule = mongoose.model('articules',articuleSchema)

export default Articule