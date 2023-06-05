import express from 'express';
import cookieSession from 'cookie-session';
import crypto from 'crypto'
import cookieParser from 'cookie-parser';
import path from 'path';
import {connectDB} from './config/Mdb.js';

connectDB();
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.json())
// app.use(cookieSession({
//     name: 'session',
//     keys: [crypto.randomBytes(32).toString('hex')],
  
//     // Cookie Options
//     maxAge: 24 * 60 * 60 * 1000 // 24 hours
//   }))
// // app.use(cookieParser());


app.get('/', (req, res) => {res.send('Hello Wdsdsssdsdsdssdsdssorld!')

console.log(import.meta.url);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

