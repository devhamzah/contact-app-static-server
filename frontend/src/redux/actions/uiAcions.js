
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