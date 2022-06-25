
import styles from "./index.module.css";
import Contact from "../contact";
import { useSelector } from "react-redux";
import Loading from "../loading/loading";

const Contacts = () => {
    const store = useSelector((state)=> state.contactReducer);
    const {pushLoading} = useSelector((state)=> state.uiReducer);

    if(store.length !== 0){
        return <section>
        <div className={styles.contacts}>
           {store.map((contact)=> {
            return <Contact contact={contact} key={contact._id} />
           } )}
            {pushLoading && <Loading/> }
        </div>
    </section>
        
    }
    
}
export default Contacts;