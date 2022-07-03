
export const toggleForm = () =>{
    return {
        type:"TOGGLE_FORM_MODAL"
    }
}
export const togglDeleteModals = (id) =>{
    return {
        type:"TOGGLE_DELETE_MODAL",
        payload:id
    }
}
export const togglePushLoading = () =>{
    return {
        type: "TOGGLE_PUSH_LOADING"
    }
}
export const togglePreContactLoading = () =>{
    return {
        type: "TOGGLE_PRE_CONATCT_LOADING"
    }
}
export const togglContactDetail = (id) =>{
    return {
        type:"TOGGLE_CONTACT_DETAIL",
        payload:id
    }
}
export const toggleMainLoading = () =>{
    return {
        type:"TOGGLE_MAIN_LOADING"
    }
}
export const startEditing = (editableObject) =>{
    return {
        type:"START_EDITING",
        payload:editableObject
    }
}