/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import axios from 'axios';
import Img1 from '../assets/Black Aesthetic ! Black Building.jpg'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();



    const handleUserChange = (e: any) => {

        setName(e.target.value);
    }
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const { data } = await axios.post('/register', {
            name, email, password
        })
        if (data.error) {
            console.log(data.error);
        } else {
            console.log("Login Sucessful");
            navigate('/login')
        }

    }


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block '>
                <img className='w-full h-full object-cover' src={Img1} alt="" />
            </div>
            <div className=' bg-gray-800 flex flex-col justify-center'>
                <form className={formStyle} action="">
                    <h2 className="text-4x1 dark:text-white font-bold text-center">SIGN IN</h2>
                    <div className='flex flex-col text-white py-2'>
                        <label>Full Name</label>
                        <input className={textInput} type='text' value={name || ''} onChange={handleUserChange} />
                    </div>
                    <div className='flex flex-col text-white py-2'>
                        <label>Email</label>
                        <input className={textInput} type='text' value={email || ''} onChange={handleEmailChange} />
                    </div>
                    <div className='flex flex-col text-white py-2'>
                        <label>Password</label>
                        <input className={textInput} type='password' value={password || ''} onChange={handlePasswordChange} />
                    </div>
                    <div className='flex justify-between space-x-2'>
                        <button className={buttonStyle + ' w-1/2'} onClick={handleSubmit}>Sign Up</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Login


//css

const textInput = "rounded-lg bg-gray-700 mt-2 p-2 focus:bg-gray-800 focus:border-blue-500 focus:outline-none";
const formStyle = "max-w-[500px] w-full mx-auto bg-gray-900 dark:text-white p-8 px-8 rounded-lg";
const buttonStyle = "my-5 py-2 font-semibold rounded-md bg-teal-500 shadow-lg shadow-teal-500/50 w-full my-5 py-2"