import * as apis from "../../api/index";
import { toggleMainLoading } from "./uiAcions";


//Fetching all Contact from DataBase 

export const fetchingContacts = () => async (dispatch) => {
    try {
        dispatch(toggleMainLoading());
        const allData = await apis.fetchContact();
        const { data } = allData;
        dispatch({ type: "FETCH_ALL_CONTACTS" ,payload:data })
        dispatch(toggleMainLoading());
    } catch (error) {
        console.log(error);
    }
} 
// Saving new Contact
export const postContact = (fdata) => async (dispatch) => {
    try {
        dispatch({type:"TOGGLE_PUSH_LOADING"});
       const {data} = await apis.saveContact(fdata);
        dispatch({type:"TOGGLE_PUSH_LOADING"});
        dispatch({type:"NEW_CONTACT", payload : data});
    } catch (error) {
        console.log(error);
    }
} 
// Deleting existing contact
export const deleteContact = (id) => async (dispatch) =>{
    try {
        await apis.deleteContact(id); 
    } catch (error) {
       console.log(error)
    }
}
// Searchin contact 
export const findContac = (str) => async (dispatch) =>{
    try {
        dispatch(toggleMainLoading());
        const {data} = await apis.searchContact(str);
        dispatch({ type: "FETCH_ALL_CONTACTS" ,payload:data })
        dispatch(toggleMainLoading());
    } catch (error) {
        console.log(error);
    }
}
//editing contact
export const updateContact = (id,obj) => async (dispatch)=>{
    try {
       const {data} =  await apis.updateContact(id,obj);
        dispatch({type:"UPDATE_CONTACT",payload:data})
    } catch (error) {
        console.log(error)
    }
}