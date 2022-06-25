import {BsPlusLg} from "react-icons/bs";
import { useDispatch } from "react-redux";

import styles from "./index.module.css"

import { toggleForm } from "../../redux/actions/uiAcions";


const NavBar=()=>{
    
    const dispatch = useDispatch();


    return <section className={styles.navSection} >
        <nav className={styles.navbar}>
            <div className={styles.logoDiv}><img src="https://www.gstatic.com/images/branding/product/1x/contacts_48dp.png" alt="" /><span>Contacts</span></div>
            <div className={styles.searchInputDiv}><input  placeholder=" Search" type="text" /></div>
            <div><button onClick={()=> dispatch(toggleForm())} className={`btn ${styles.addBtn}`} ><BsPlusLg className={styles.addIcon}/><span>Contact</span></button></div>
        </nav>
    </section>
}
export default NavBar;