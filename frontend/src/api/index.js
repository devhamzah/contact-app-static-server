import axios from "axios";
let developing = false;
const  url  =  developing ? 'http://localhost:5000/contact': "/contact";


// For getiing all consts from mongoose database
export const fetchContact = () => axios.get(url);

// Requestin to add contatact in mongoose database
export const saveContact = (newContact) => axios.post(url, newContact);

// Requestin to delete contaact from mongoose database by id
export const deleteContact = (id) => axios.delete(`${url}/${id}`);

// Requestin to search contact from mongoose databse by string
export const searchContact = (id) => axios.get(`${url}/${id}`);