import React, { useState } from 'react'
import './index.css'

const TextArea = () => {
    const [message, setMessage] = useState('')
    const [theme, setTheme] = useState('')
    const [typing, setTyping] = useState('')

    if (!message || message === '\n') {
        setMessage('Change the theme, typing in the textarea, and pressing Enter.')
    }

    const handleSubmit = () => {
        setTheme(message)
    }

    const handleMessageChange = (event) => {
        setTimeout(() => {
            setMessage(event.target.value)
        }, 300)

    }

    const handleTyping = () => {
        setTyping('typing...')
    }

    return (
        <div className='message'>
            <div className='message__content'>
                <span>Theme: {theme}</span>
                <p>{message}</p>
            </div>
            <div className='textarea'>
                <textarea
                    id="message"
                    name="message"
                    onChange={handleMessageChange}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && !message.endsWith('Enter.')) handleSubmit()
                        handleTyping()
                    }}
                />
            <span>{typing}</span>
            </div>
        </div>
    )
}

export default TextArea