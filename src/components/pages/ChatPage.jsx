import React, { useState, useEffect } from 'react';
import Typewriter from '../atoms/TypeWriter';

const ChatPage = () => {
    const [sentContent, setSentContent] = useState('');
    const [messages, setMessages] = useState([
        {
            sender: "NextBot",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est similique nesciunt possimus laboriosam, dignissimos expedita",
            img: '/icon.jpeg'
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessages(prevMessages => [
            ...prevMessages,
            {
                sender: "user",
                content: sentContent,
                img: ""
            }
        ]);
        
        setSentContent(''); 
    };

    return (
        <div className='h-screen bg-primary'>
            {/* MESSAGES DISPLAY */}
            <div className='h-full max-h-128 overflow-y-auto'>
            {messages.map((message, index) => (
                <div key={index} className={message.sender === "user"? 'mx-auto w-3/4 text-white pt-8 flex flex-row-reverse':'mx-auto w-3/4 text-white pt-8 flex' } >
                    {message.sender === "user" ?
                        <svg className="w-[36px] h-[36px] text-white my-2 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"/>
                        </svg>                      
                        : 
                        <img src={message.img} width={55} className='h-1/2' alt="NextBot AI Picture" 
                    />}
                    <div
                    className={message.sender === "user"? 'text-end': ''}
                    >
                        <h1>{message.sender}</h1>
                        <div>
                            {message.sender === "user" ? <p>{message.content}</p> : <Typewriter text={message.content} delay={10} />}
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <form className="fixed inset-x-0 bottom-5 mx-auto w-3/4" onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="">
                    <input type="search" value={sentContent} onChange={(e) => { setSentContent(e.target.value) }} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Habla con NextBot AI" required />
                    <button type='submit' className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-[22px] h-[22px] text-gray-800 dark:text-white rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChatPage;
