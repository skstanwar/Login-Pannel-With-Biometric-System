import express   from "express";
import {registerUser} from '../controller/userControl.js';


const UserRoutes = express.Router();

UserRoutes.post('/register',registerUser);
export default UserRoutes;
