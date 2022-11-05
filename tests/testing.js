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

module.exports = handleSubmit, handleMessageChange, handleTyping;