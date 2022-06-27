
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import { togglContactDetail } from "../../redux/actions/uiAcions";
import { useDispatch } from "react-redux";


const ContactDetail = () => {
    const { contactDetail } = useSelector((state) => state.uiReducer);
    const dispatch = useDispatch();
    const items = useSelector((state) => state.contactReducer);
    const currentItem = items.find((i) => i._id === contactDetail);
    let active = false;
        if (currentItem === undefined){
            active = false;
        }else{
            active = true;
        }

        console.log(active);
        return <section className={styles.sectionForm}>
            <div className={`${styles.formModal} ${contactDetail ? styles.formModalActive : ""} `}>
                <div className={styles.card}>
                    <div className={styles.bgDiv}>
                    </div>
                    <div className={styles.dimagediv}>
                        { active ? currentItem.image ? <img src={currentItem.image} alt="" /> :<div style={{backgroundColor: `#${currentItem.bgColor}`}} className={styles.divh}><p>{ currentItem.name.charAt(0)}</p></div> : ""}
                    </div>
                    <div className={styles.infoDiv}>
                        <h1 className={styles.uname} >{ active ? currentItem.name:""}</h1>
                        <h3>{ active ?currentItem.email :""}</h3>
                        <h3>{ active ?currentItem.phoneNumber :""}</h3>
                    </div>
                    <div>
                        <button onClick={() => dispatch(togglContactDetail())} className={`btn ${styles.closeBtn}`}>Close</button>
                    </div>
                </div>
            </div>
            <div className={`${styles.overlay}  ${contactDetail ? styles.overlayActive : ""} `}>
            </div>
        </section>

 


}
export default ContactDetail;