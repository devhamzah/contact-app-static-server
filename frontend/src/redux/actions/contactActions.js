import * as apis from "../../api/index";


//Fetching all Contact from DataBase 

export const fetchingContacts = () => async (dispatch) => {
    try {
        const allData = await apis.fetchContact();
        const { data } = allData;
        dispatch({ type: "FETCH_ALL_CONTACTS" ,payload:data })
    } catch (error) {
        console.log(error);
    }
} 

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


export const deleteContact = (id) => async (dispatch) =>{
    try {
        await apis.deleteContact(id); 
    } catch (error) {
       console.log(error)
    }
}

export const findContac = (str) => async (dispatch) =>{
    try {
        const data = await apis.searchContact(str);
        console.log(data);
    } catch (error) {
        
    }
}