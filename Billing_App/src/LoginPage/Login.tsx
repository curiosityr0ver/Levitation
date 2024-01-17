/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

import { users } from '../credentials/users.ts'
import Img1 from '../assets/Black Aesthetic ! Black Building.jpg'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleUserChange = (e: any) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    const handleLogin = () => {
        if (!isAuthenticated) {
            loginWithRedirect();
        } else {
            navigate('/dashboard')
        }
    };

    if (isAuthenticated) {
        navigate('/dashboard');
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
                        <label htmlFor="">User Name</label>
                        <input className={textInput} type='text' value={username} onChange={handleUserChange} />
                    </div>
                    <div className='flex flex-col text-white py-2'>
                        <label htmlFor="">Password</label>
                        <input className={textInput} type='password' value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className='flex justify-between text-gray-500 py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember Me</p>
                        <p>Forgot Password</p>

                    </div>
                    <div className='flex justify-between space-x-2'>
                        <button className={buttonStyle + ' w-1/2'} onClick={handleSubmit}>Sign In</button>
                        <button className={buttonStyle + ' w-1/2'} onClick={() => { navigate('/signup') }}>Sign Up</button>
                    </div>
                    <button className={buttonStyle + ' w-full'} onClick={handleLogin}>Google</button>
                    ̥
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