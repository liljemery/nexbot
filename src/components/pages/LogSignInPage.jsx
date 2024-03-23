import React, { useState, useEffect } from 'react';
import LoginForm from '../organanisms/LoginForm';
import RegForm from '../organanisms/RegForm';
import useUser from '../customHooks/useUser';
import { useNavigate } from 'react-router-dom';
const LogSignInPage = () => {
    const [yaRegistrado, setYaRegistrado] = useState(true);
    const { user, isLoading} = useUser();
    const navigate = useNavigate('')
    const handleOnChange= (e) =>{
        setYaRegistrado(e.target.checked)
    }
    useEffect(()=>{
        if(user){
            navigate('/chat')
        }
    },[isLoading])
    return (
        <section className='h-screen flex items-center movingBg' >
            <div className='mx-auto bg-primary w-3/4 h-3/4  rounded-xl md:flex items-center flex-grow' style={{filter: 'drop-shadow(0 0 0.10rem gray)'}}>
                <div className='md:w-3/5 flex-col content-center border-b-2 md:border-b-0 md:border-e-2 '>
                    <img src="/icon.jpeg" className="w-1/6 mx-auto" />
                    <h1 className='text-white text-2xl text-center md:pt-10'>{yaRegistrado? 'Inicia Sesión': 'Regístrate'}</h1>
                    <p className='text-white text-2xl text-center  md:mb-10 pb-10'>Para comenzar a utilizar NextBot AI</p>
                    <div className="flex items-center content-around mb-5 md:mb-0">
                        <input id="default-checkbox" type="checkbox" checked={yaRegistrado} onChange={handleOnChange} className="w-4 h-4 ms-auto text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-white mx-auto">Estoy registrado</label>
                    </div>
                </div>
                
                {yaRegistrado ?
                    <LoginForm/>   
                    :
                    <RegForm/>    
                }
            </div>
        </section>
    )
}

export default LogSignInPage