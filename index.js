import express from 'express';
import cookieSession from 'cookie-session';
import crypto from 'crypto'
import cookieParser from 'cookie-parser';
import path from 'path';
import {connectDB} from './config/Mdb.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import IsAuth from './Middleware/Auth.js';
import Userroutes from './Routes/UserRoutes.js';


dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use(cookieSession({
    name: 'session',
    keys: [crypto.randomBytes(32).toString('hex')],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(cookieParser());

const currentDir=path.dirname(fileURLToPath(import.meta.url));
const staticDir=path.join(currentDir,'static');
const publicDir=path.join(currentDir,'public'); 
app.use(express.static(staticDir));


////////-------path---------------------------------///////
app.get('/', IsAuth,(req, res) => {   
    res.sendFile(path.join(publicDir,'home.html'));
}
);


app.get('/login', (req, res) => {
    res.sendFile(path.join(publicDir,'login.html'));
    console.log(req.cookies.maxAge);
});


app.get('/register', (req, res) => {
    res.sendFile(path.join(publicDir,'register.html'));
})
app.use('/api' ,Userroutes );


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
}
);
