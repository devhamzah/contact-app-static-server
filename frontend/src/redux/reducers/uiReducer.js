
const initialState = {
    stateFormModal: false,
    stateDeleteModal: "",
    pushLoading: false,
    preContactLoading: false,
    contactDetail: "",
    mainLoading: false,
    editObj:{}
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_FORM_MODAL":
            return state = { ...state, stateFormModal: !state.stateFormModal }
        case "TOGGLE_MAIN_LOADING":
            return state = { ...state, mainLoading: !state.mainLoading }
        case "TOGGLE_CONTACT_DETAIL":
            return state = { ...state, contactDetail: action.payload }
        case "TOGGLE_PUSH_LOADING":
            return state = { ...state, pushLoading: !state.pushLoading }
        case "TOGGLE_PRE_CONATCT_LOADING":
            return state = { ...state, preContactLoading: !state.preContactLoading }
        case "TOGGLE_DELETE_MODAL":
            return state = { ...state, stateDeleteModal: action.payload }
        case "START_EDITING":
            return state = { ...state, editObj:{
                ...action.payload
            }}
        default:
            return state;
    }
};
export default uiReducer;