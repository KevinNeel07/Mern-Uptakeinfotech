import axios from 'axios';

const API = axios.create({baseURL:'http://13.53.130.121:8000'});

export const sendMail = (mailData)=> API.post('/', mailData);

