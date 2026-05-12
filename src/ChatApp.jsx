import React, { useState } from 'react'
import './App.css'

const ChatApp = () => {

  const [message, setMessage] = useState('')
  const [chats, setChats] = useState([
    { id: 1, text: 'Hello ', sender: 'other' },
    { id: 2, text: 'Hi, how are you?', sender: 'me' }
  ])

  const sendMessage = () => {
    if (message === '') return

    let newMsg = {
      id: Date.now(),
      text: message,
      sender: 'me'
    }

    setChats([...chats, newMsg])
    setMessage('')
  }

  return (
    <div className="chat-container">
      
      <div className="chat-header">
        <h3>Chat App</h3>
      </div>

      
      <div className="chat-box">
        {
          chats.map((msg) => (
            <div
              key={msg.id}
              className={msg.sender === 'me' ? 'my-msg' : 'other-msg'}
            >
              {msg.text}
            </div>
          ))
        }
      </div>

      
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  )
}

export default ChatApp
