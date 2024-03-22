import React from 'react'

const RegForm = () => {
    return (
        <form className="md:w-1/3 mx-6 animate__animated animate__fadeIn py-5">
            <div className="mb-3">
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="block mb-1 text-sm font-medium text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="An awesome password" required />
            </div>
            <div className="mb-3">
                <label htmlFor="username" type="username" name="username" className="block mb-2 text-sm font-medium text-white">Username</label>
                <input type="username" id="username" className=" py-2 bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="   Your great username" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}

export default RegForm