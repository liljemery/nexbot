import React from 'react'

const RegForm = () => {
    return (
        <form className="md:w-1/3 mx-6">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-1 text-sm font-medium text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label type="repeat_password" name="repeat_password" className="block mb-2 text-sm font-medium text-white">Repeat your password</label>
                <input type="repeat_password" id="repeat_password" className=" py-2 bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="  name@flowbite.com" required />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="mb-5">
                    <label htmlFor="Fname" type="name" name="name" className="block mb-2 text-sm font-medium text-white">Repeat your password</label>
                    <input type="name" id="name" className=" py-2 bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="  name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="Lname" type="Lname" name="Lname" className="block mb-2 text-sm font-medium text-white">Repeat your password</label>
                    <input type="Lname" id="Lname" className=" py-2 bg-gray-50 border border-gray-300 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="  name@flowbite.com" required />
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}

export default RegForm