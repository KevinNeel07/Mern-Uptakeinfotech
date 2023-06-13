const initialstate = {
    mail: "",
    isLoading: true
}

const mailAPI = (state = initialstate, action) => {
    switch (action.type) {
        case "GET_MAIL":
            return {
                ...state,
                isLoading: false
            }
        case "RESET_STATE":
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}

export default mailAPI