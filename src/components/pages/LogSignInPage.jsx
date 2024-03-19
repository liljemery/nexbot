import React, { useState } from 'react'
import LoginForm from '../organanisms/LoginForm'
import RegForm from '../organanisms/RegForm'

const LogSignInPage = () => {
    const [yaRegistrado, setYaRegistrado] = useState(false);

    const handleOnChange= (e) =>{
        console.log("Checkbox changed");
        setYaRegistrado(e.target.checked)
    }

    return (
        <section className='h-screen flex items-center movingBg' >
            <div className='mx-auto bg-primary w-3/4 h-3/4 rounded-xl md:flex items-center' style={{filter: 'drop-shadow(0 0 0.10rem gray)'}}>
                <div className='md:w-3/5 flex-col content-center md:border-e-2 '>
                    <img src="/icon.jpeg" className="w-1/6 mx-auto" />
                    <h1 className='text-white text-2xl text-center pt-10'>{yaRegistrado? 'Inicia Sesión': 'Regístrate'}</h1>
                    <p className='text-white text-2xl text-center mb-10 pb-10'>Para comenzar a utilizar NextBot AI</p>
                    <div className="flex items-center content-around">
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