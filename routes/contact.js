import express from "express";
import { getContacts ,saveContact,deleteContact,findContact} from "../controllers/contact.js";


const router = express.Router();

router.get('/',getContacts);
router.post('/',saveContact);
router.get('/:id',findContact);
router.delete('/:id',deleteContact);




export default router;