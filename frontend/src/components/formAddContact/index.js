
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.css";
import { toggleForm, togglePushLoading} from "../../redux/actions/uiAcions";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { postContact } from "../../redux/actions/contactActions";

const FormAddContact = () => {
    const colors = ["FF9F29", "9DD6DF", "A084CF", "3AB0FF", "F94C66", "3EC70B", "53BF9D", "F15412", "590696", "827397"];
    const randomColor = () => {
         return Math.floor(Math.random() * colors.length);
    }
    const dispatch = useDispatch()
    const { stateFormModal } = useSelector((state) => state.uiReducer);

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        image: "",
        bgColor: colors[randomColor()]
    });



    const clear = () => {
        setFormData({ name: "", email: "", phoneNumber: "", image: "" })
    }

    const handleSubmit = () => {
      
        if (formData.name && formData.email && formData.phoneNumber) {
            let newContact = {
                ...formData,bgColor:colors[randomColor()]
            };
            dispatch(togglePushLoading);
            dispatch(postContact(newContact));
            dispatch(toggleForm());
            clear();
        }
    }



    return <section className={styles.sectionForm}>
        <div className={`${styles.formModal} ${stateFormModal ? styles.formModalActive : ""}`}>
            <div className={styles.card}>
                <h1>Create Contact</h1>
                <div>
                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder=" Nmae" type="text" />
                </div>
                <div>
                    <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder=" Email" type="text" />
                </div>
                <div>
                    <input value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} placeholder=" Phone Number" type="number" />
                </div>
                <div>
                    <FileBase64 value={formData.image} multiple={false} type="file" onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} />
                </div>
                <div className={styles.formBtn}>
                    <button onClick={() => dispatch(toggleForm())} className={`btn ${styles.cancleBtn} `} >Cancle</button>
                    <button onClick={handleSubmit} className={`btn ${styles.submitBtn}`} >Submit</button>
                </div>
            </div>
        </div>
        <div className={`${styles.overlay} ${stateFormModal ? styles.overlayActive : ""}`}>
        </div>
    </section>
}
export default FormAddContact;