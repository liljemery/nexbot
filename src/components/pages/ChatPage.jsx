import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Message from '../molecules/Message';

const ChatPage = () => {
    let uid =1 ;
    const navigate = useNavigate();
    const [sentContent, setSentContent] = useState('');
    const [messages, setMessages] = useState([
        {
            sender: "model",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est similique nesciunt possimus laboriosam, dignissimos expedita",
            img: '/icon.jpeg'
        }
    ]);
    const chatEndRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages(prevMessages => [
            ...prevMessages,
            {
                sender: "user",
                content: sentContent,
                img: '/icon.jpeg'
            }
        ]);
        
        setSentContent(''); 
    };
    // VALIDATE IF USER IS LOGGED
    useEffect(()=>{
        if(!uid){
            navigate('/login');
        }
    },[])
    useEffect(() => {
        chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
        <div className='h-screen bg-primary'>
            {/* MESSAGES DISPLAY */}
            <div className='h-full max-h-128 overflow-y-auto '>
            {messages.map((message, index) => (
                <Message key={index} message={message} />
            ))}
            <div ref={chatEndRef}></div>
            </div>
            <form className="fixed inset-x-0 bottom-5 mx-auto w-3/4" onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="">
                    <input type="search" value={sentContent} onChange={(e) => { setSentContent(e.target.value) }} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Habla con NextBot AI" required />
                    <button type='submit' className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
                        <svg className="w-[22px] h-[22px] text-white rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChatPage;
