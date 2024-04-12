import { React, useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = ( {customer} ) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = io('http://localhost:8080');

  useEffect(() => {

    // Connect to the WebSocket server
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', { content: message, sender: customer.username });
    setMessage('');
  };





  //   const fetchMessages = async () => {
  //     try {
  //       const response = await fetch(`/api/messages/${user.id}`);
  //       const data = await response.json();
  //       setMessages(data);
  //     } catch (error) {
  //       console.error('Error fetching messages:', error);
  //     }
  //   };
  //   fetchMessages();
  // }, [user.id]);

  // const handleMessageSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('/api/messages', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ content: message, senderId: user.id, receiverId: reciever.id }),
  //     });
  //     const data = await response.json();
  //     setMessages([...messages, data]);
  //     setMessage('');
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //   }
  //};

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;