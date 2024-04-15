import { React, useState, useEffect } from 'react';
import axios from 'axios';

//import io from 'socket.io-client';

const Chat = ( { senderId, recipientId } ) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`/api/messages/${senderId}/${recipientId}`)
      .then(response => {
          setMessages(response.data);
      })
      .catch(error => {
          console.error('Error fetching messages:', error);
      });
  }, [senderId, recipientId]);

const handleSendMessage = () => {
    const message = {
        content: newMessage,
        senderId,
        recipientId
    };

    axios.post('/api/messages/send', message)
        .then(response => {
            setMessages([...messages, response.data]);
            setNewMessage('');
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
};

  return (
    <section>
      {messages.map(message => (
          <div key={message.id}>{message.content}</div>
      ))}
      <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </section>
  );
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