import ContactStore from "../models/contact.js";


//Getting list of saved contact from Database
export const getContacts = async (req,res) =>{
    try {
        const allContacts = await ContactStore.find();
        res.status(200).json(allContacts);
    } catch (error) {
        res.status(404).json({err:error});
    }
}
//Saving contact in Database 
export const saveContact = async (req,res) =>{
    const data = req.body;
    const contact = new ContactStore(data);
    try {
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

//Deleting contact 
export const deleteContact  = async (req,res) =>{
    try {
        const {id} = req.params;
        await ContactStore.findByIdAndDelete(id);
    } catch (error) {
        console.log("delete server failed")
    }
}
//
export const findContact = async(req,res) =>{
    const nam = req.params.id;
    console.log(name);
    try {
        await ContactStore.find({name:nam},(err,data)=>{
            if(err){
                console.log(err);
            }else{
               console.log(data);
            }
        });
   
    } catch (error) {
        res.status(404).json({err:error});
    }
}