
const initialState = [];

const contactReducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_ALL_CONTACTS":
            return [
                ...action.payload
            ];
        case "DELETE_CONTACT":
          return  state.filter((post) => post._id !== action.payload);
        case "UPDATE_CONTACT":
          return  state.map((post) => post._id === action.payload._id ? action.payload:post);
        case "NEW_CONTACT":
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}
export default contactReducer;