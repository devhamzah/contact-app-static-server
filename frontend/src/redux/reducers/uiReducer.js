
const initialState = {
    stateFormModal : false,
   stateDeleteModal:"",
   pushLoading:false
}

const uiReducer = (state = initialState,action)=>{
    switch (action.type) {
        case "TOGGLE_FORM_MODAL":
            return state = {...state, stateFormModal : !state.stateFormModal}
        case "TOGGLE_PUSH_LOADING":
            return state = {...state, pushLoading : !state.pushLoading}
        case "TOGGLE_DELETE_MODAL":
            return state = {...state, stateDeleteModal :action.payload}
        default:
            return state;
    }
};
export default uiReducer;