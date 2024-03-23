import {useState} from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const RegForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate('');
    const SignIn = async () =>{
        try{
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/chat');
        }catch(e){
            setError(e.message);
        };
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email === ''|| password === '' || confirmPassword === ''){
            setError('Please fullful all the labels!');
            return;
        }else if(password != confirmPassword){
            setError(`Passwords doesn't match!`);
            return;
        }
        SignIn();
        setEmail('');
        setPassword('');
        setPassword('')
        setError('');
    }
    return (
        <form onSubmit={handleSubmit} className="md:w-1/3 mx-6 animate__animated animate__fadeIn py-5">
            {error? 
            <div className="text-white bg-red-600 py-2 my-3 text-center rounded-lg">{error}</div>
            :
            <div className="text-white bg-red-600 py-2 my-3 text-center rounded-lg invisible">{error}</div>
            }
            <div className="mb-3">
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Your email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="block mb-1 text-sm font-medium text-white">Your password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}id="password" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="An awesome password"  />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-white">Confirm your password</label>
                <input type="password"value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} id="confirmPassword" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="An awesome password"  />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}

export default RegForm