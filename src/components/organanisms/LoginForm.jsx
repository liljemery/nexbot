import { useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate('');
    const LogIn = async () =>{
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/chat');
        }catch(e){
            setError(e.message);
        };
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email === ''|| password === ''){
            setError('Please fullful all the labels');
            return;
        }
        LogIn();
        setEmail('');
        setPassword('');
        setError('');
    }
    return (
        <form onSubmit={handleSubmit} className="md:w-1/3 mx-6 animate__animated animate__fadeIn mt-5 md:mt-0" style={{transition: 1}}>
            {error && <div className="text-white bg-red-600 py-2 my-3 text-center rounded-lg">{error}</div>}
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="An awesome password"/>
            </div>           
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
        </form>  
    )
}

export default LoginForm