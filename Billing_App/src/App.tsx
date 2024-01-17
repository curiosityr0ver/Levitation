/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './LoginPage/Login'
import DashBoard from './dashboard/index.js'
import SignUp from "./SignUp/SignUp.js";
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />

      </Routes>
    </BrowserRouter>
  );
}


