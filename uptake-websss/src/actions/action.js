import * as api from '../api/api';


export const sendMail =  (mailData) => async (dispatch) => {
    try {
        console.log(mailData);
        const { data } = await api.sendMail(mailData);
        console.log(data);
        dispatch({ type: 'GET_MAIL', payload: data});
    } catch (error) {
        console.log(error);
    }
}