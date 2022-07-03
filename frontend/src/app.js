
import NavBar from "./components/navbar/index";
import FormAddContact from "./components/formAddContact";
import Contacts from "./components/contacts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchingContacts} from "./redux/actions/contactActions";
import DeleteModal from "./components/deleteModal";
import { useSelector } from "react-redux";
import Loading from "./components/loading/loading";
import ContactDetail from "./components/contactDetail";
const App=()=>{
    const store = useSelector((state)=> state.contactReducer);
    const {mainLoading} = useSelector((state)=> state.uiReducer);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchingContacts());
    },[dispatch]);
return <>
    <FormAddContact/> 
    <NavBar/>
    {  mainLoading ? <Loading/>:  store.length === 0 ? <h1 className="nocontact">No Contacts</h1> : <Contacts/>}
    <DeleteModal/>
    <ContactDetail/>
</>
}
export default App;