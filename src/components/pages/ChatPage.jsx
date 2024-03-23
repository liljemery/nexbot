import React, { useState, useEffect, useRef } from 'react';
import Message from '../molecules/Message';
import useUser from '../customHooks/useUser';
import { GoogleGenerativeAI } from "@google/generative-ai";
import gemini from '../../../geminiapikey';

const ChatPage = () => {
    const genAI = new GoogleGenerativeAI(gemini);
    const [sentContent, setSentContent] = useState('');
    const [IAFinishedSpeaking, setIAFinishedSpeaking] = useState(true)
    const [messages, setMessages] = useState([]);
    const { user, isLoading } = useUser();
    const chatEndRef = useRef(null);
    useEffect(()=>{
        const storedMessagesJSON = localStorage.getItem('messages');
        const storedMessages = JSON.parse(storedMessagesJSON);
        if (storedMessages) {
            setMessages(storedMessages)
        }
    },[])
    const handleSubmit = async (e) => {
        setIAFinishedSpeaking(false)
        e.preventDefault();
        const newMessage = {
            role: "user",
            parts: [{ text: sentContent }],
        };
        setMessages(prevMessages => [...prevMessages, newMessage]);

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const chat = model.startChat({
            history: messages,
            generationConfig: {
                maxOutputTokens: 2048,
            },
        });
        const result = await chat.sendMessage(sentContent);
        const response = result.response;
        const text = response.text();

        const responseMessage = {
            role: "model",
            parts: [{ text: text }],
        };
        setMessages(prevMessages => [...prevMessages, responseMessage]);
        setSentContent('');
        setIAFinishedSpeaking(true);
        const messagesJSON = JSON.stringify(messages);
        localStorage.setItem('messages', messagesJSON);
    };
    useEffect(() => {
        chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className='h-screen bg-primary'>
            <div className='h-full max-h-128 overflow-y-auto '>
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
                <div ref={chatEndRef}></div>
            </div>
            {user && (
                <form className="fixed inset-x-0 bottom-5 mx-auto w-3/4" onSubmit={handleSubmit}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    {IAFinishedSpeaking ?
                    <div className="animate__animated animate__fadeIn">
                        <input type="search" value={sentContent} onChange={(e) => { setSentContent(e.target.value) }} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Habla con NextBot AI" required />
                        <button type='submit' className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
                            <svg className="w-[22px] h-[22px] text-white rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>:
                    <div className="animate__animated animate__fadeIn">
                        <input disabled type="search" value={sentContent} onChange={(e) => { setSentContent(e.target.value) }} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Habla con NextBot AI" required />
                        <button hidden type='submit' className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
                            <svg className="w-[22px] h-[22px] text-white rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    }
                </form>
            )}
        </div>
    );
}

export default ChatPage;

