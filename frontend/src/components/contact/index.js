
import { useDispatch,useSelector} from "react-redux";
import styles from "./index.module.css";
import { startEditing, togglContactDetail, togglDeleteModals, toggleForm } from "../../redux/actions/uiAcions";


const Contact = ({ contact }) => {
    const store = useSelector((state)=> state.contactReducer);
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        let id = e.currentTarget.getAttribute('data-id');
            dispatch(togglDeleteModals(id));
    }
    const handleDetail = (e) =>{
        let id = e.currentTarget.getAttribute('data-id');
        dispatch(togglContactDetail(id));
    }
    // let  {editObj} = useSelector((state)=> state.uiReducer)
    const handleEdit = (e) =>{
        let id = e.currentTarget.getAttribute('data-id');
        let editableObject = store.find((item)=> item._id === id)
        // console.log(editableObject);
        dispatch(startEditing(editableObject))
        dispatch(toggleForm());
    }
    
    // console.log(editObj);

    return <div className={styles.contactBody}>
        <div  className={styles.contactName}>
            {contact.image ?<img  src={contact.image} alt="" /> : <div  style={{backgroundColor: `#${contact.bgColor}`}} className={styles.divh}><p>{ contact.name && contact.name.charAt(0)}</p></div> }
            <span data-id={contact._id} onClick={handleDetail} >{contact.name}</span>
        </div>
        <div className={styles.number}><p>{contact.phoneNumber}</p></div>
        <div className={styles.mail}><p>{contact.email}</p></div>
        <div className={styles.contactBtnsDiv}>
            <button  data-id={contact._id} className={styles.editBtn} onClick={handleEdit} >Edit</button>
            <button data-id={contact._id} onClick={handleDelete} className={styles.removeBtn}>Remove</button>
        </div>
    </div>
}
export default Contact;