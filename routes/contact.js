import express from "express";
import { getContacts ,saveContact,deleteContact,findContact, updateContact} from "../controllers/contact.js";


const router = express.Router();

router.get('/',getContacts);
router.post('/',saveContact);
router.get('/:id',findContact);
router.delete('/:id',deleteContact);
router.patch('/:id',updateContact);




export default router;