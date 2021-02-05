import mongoose,{now, Schema} from 'mongoose';

const categorySchema = new Schema({
    name:{type:String,maxlength:200,unique:true,required:true},
    description:{type:String,maxlength:300},
    status:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
})

const Category = mongoose.model('category',categorySchema);

export default Category;