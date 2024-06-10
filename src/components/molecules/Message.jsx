import React from 'react'
import icon from '/icon.jpeg'
import markdownit from 'markdown-it'
const Message = ({ message }) => {
    const md = markdownit()
    return (
        <div className={message.role === "user" ? 'mx-auto w-3/4 text-white mt-8 flex flex-row-reverse animate__animated animate__fadeIn bg-slate-800 py-4 rounded-lg' : 'mx-auto w-3/4 text-white pt-8 flex animate__animated animate__fadeIn '}>
            {message.role === "user" ?
                <svg className="w-[36px] h-[36px] text-white my-2 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd"/>
                </svg>
                :
                <img src={icon} width={55} className='h-1/2' alt="NextBot AI Picture"/>
            }
            <div className={message.role === "user" ? 'text-end' : ''}>
                <h1>{message.role}</h1>
                {}
                <div>
                    {message.parts.map((part, index) => (
                        <div key={index} dangerouslySetInnerHTML={{ __html: md.render(part.text) }} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Message