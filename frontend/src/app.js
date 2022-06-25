
import NavBar from "./components/navbar/index";
import FormAddContact from "./components/formAddContact";
import Contacts from "./components/contacts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchingContacts} from "./redux/actions/contactActions";
import DeleteModal from "./components/deleteModal";
import { useSelector } from "react-redux";
import Loading from "./components/loading/loading";
const App=()=>{
    const {pushLoading} = useSelector((state)=> state.uiReducer);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchingContacts())
    },[dispatch]);
return <>
    <FormAddContact/> 
    <NavBar/>
    <Contacts/>
    { pushLoading && <Loading/>}
    <DeleteModal/>

</>
}
export default App;