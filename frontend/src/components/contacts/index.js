
import styles from "./index.module.css";
import Contact from "../contact";
import { useSelector } from "react-redux";
import Loading from "../loading/loading";
import { useEffect, useState } from "react";


const Contacts = () => {
    const [mainLoading,setMainLoading] = useState(false);
    const store = useSelector((state)=> state.contactReducer);

    useEffect(()=>{
        if(store.length == 0){
            setMainLoading(true)
        }
       const mylo = setTimeout(() => {
            setMainLoading(false);
        }, 4000);

        return ()=> clearTimeout(mylo);
    },[])

    if(store.length !== 0){
        return <section>
        <div className={styles.contacts}>
           {store.map((contact)=> {
            return <Contact contact={contact} key={contact._id} />
           } )}
     
        </div>
    </section>
        
    }else{
        return <section className={styles.contacts}>
            {mainLoading ? <Loading/> : <h1 className={styles.noh}>No Contacts</h1> }
        </section>
    }
    
}
export default Contacts;