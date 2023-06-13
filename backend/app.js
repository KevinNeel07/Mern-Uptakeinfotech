import express from 'express';
const app = express();
import dotenv from 'dotenv';

dotenv.config();

import cors from 'cors';

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

import { sendMail } from './function/sendMail.js';

app.post('/', sendMail)

app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`);
})