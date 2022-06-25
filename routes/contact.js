import express from "express";
import { getContacts ,saveContact,deleteContact} from "../controllers/contact.js";


const router = express.Router();

router.get('/',getContacts);
router.post('/',saveContact);
router.delete('/:id',deleteContact);





export default router;