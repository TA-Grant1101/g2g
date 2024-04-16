const MessageList = ({ messages }) => {
    return (
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
    );
  };

export default MessageList