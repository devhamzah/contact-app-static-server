
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.css";
import { togglDeleteModals } from "../../redux/actions/uiAcions";
import { deleteContact } from "../../redux/actions/contactActions";

const DeleteModal = () => {

    const { stateDeleteModal } = useSelector((state) => state.uiReducer);
    const dispatch = useDispatch();
    const approvingDelete=()=>{
        let id = stateDeleteModal;
       dispatch(deleteContact(id));
       dispatch({type:"DELETE_CONTACT",payload:id});
       dispatch(togglDeleteModals());
    }

    return <section className={styles.sectionForm}>
        <div className={`${styles.formModal} ${stateDeleteModal ? styles.formModalActive : ""} `}>
            <div className={styles.card}>
                <h1>Wraning ! irreversible Action</h1>
                <div className={styles.formBtn}>
                    <button onClick={()=> dispatch(togglDeleteModals())} className={`btn ${styles.submitBtn}`} >Cancle</button>
                    <button onClick={approvingDelete} className={`btn ${styles.cancleBtn} `} >Delete</button>
                </div>
            </div>
        </div>
        <div className={`${styles.overlay}  ${stateDeleteModal ? styles.overlayActive : ""} `}>
        </div>
    </section>
}
export default DeleteModal;