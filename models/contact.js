import mongoose from "mongoose";


const contactScheema = mongoose.Schema({
    name:String,
    phoneNumber:String,
    email:String,
    bgColor:String,
    image:{
        type:String,
        default :null
    },
    createdAt:{
        type:Date,
        default:new Date()
    }

});

const ContactStore = mongoose.model("contactStore",contactScheema);

export default ContactStore;