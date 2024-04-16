import { React, useState, useEffect } from 'react';
import axios from 'axios';

//import io from 'socket.io-client';

const Chat = ( { user } ) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');
  const senderId = user.id;

  const sendMessage = async () => {
    try {
      await axios.post(
        '/api/messages/send',
        { content: newMessage },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Fetch updated messages after sending
      fetchMessages();
      setNewMessage('');
    } catch (error) {
      setError('Failed to send message');
    }
  };




  useEffect(() => {
    axios.get(`/api/messages/${senderId}}`)
      .then(response => {
          setMessages(response.data);
      })
      .catch(error => {
          console.error('Error fetching messages:', error);
      });
  }, [senderId]);

  const handleSendMessage = () => {
    const message = {
        content: newMessage,
        senderId: senderId,
        recipientId: recipientEmail
    };
  };

  axios.post('/api/messages/send', message)
      .then(response => {
          setMessage([...messages, response.data]);
          setNewMessage('');
      })
      .catch(error => {
          console.error('Error sending message:', error);
  });
  
  if(messages.length > 0 ) {
    return (
      <div>
        {messages.map((message) => (
            <div key={message.id}>
              <p>{message.content}</p>
            </div>
        ))}
        <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    );
  } else {
    return (
      <h3>No message history</h3>
    )
  }

};

export default Chat;


//  const socket = io('http://localhost:8080');

// useEffect(() => {

//   socket.on('connect', () => {
//     console.log('Connected to WebSocket server');
//   });

//   socket.on('message', (message) => {
//     setMessages((prevMessages) => [...prevMessages, message]);
//   });

//   return () => {
//     socket.disconnect();
//   };
// }, []);

// const sendMessage = () => {
//   socket.emit('message', { content: message, sender: customer.username });
//   setMessage('');
// };