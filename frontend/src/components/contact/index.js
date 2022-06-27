
import { useDispatch} from "react-redux";
import styles from "./index.module.css";
import { togglDeleteModals } from "../../redux/actions/uiAcions";


const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        let id = e.currentTarget.getAttribute('data-id');
            dispatch(togglDeleteModals(id));
    }
    return <div className={styles.contactBody}>
        <div className={styles.contactName}>
            {contact.image ?<img src={contact.image} alt="" /> : <div style={{backgroundColor: `#${contact.bgColor}`}} className={styles.divh}><p>{ contact.name && contact.name.charAt(0)}</p></div> }
            <span>{contact.name}</span>
        </div>
        <div><p>{contact.phoneNumber}</p></div>
        <div className={styles.mail}><p>{contact.email}</p></div>
        <div className={styles.contactBtnsDiv}>
            <button className={styles.editBtn}>Edit</button>
            <button data-id={contact._id} onClick={handleDelete} className={styles.removeBtn}>Remove</button>
        </div>
    </div>
}
export default Contact;