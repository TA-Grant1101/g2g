


export const SendButton = () => {
    return (
        <div className="send_message" onClick={this.props.handleClick}>
            <div className="text">send</div>
        </div>
    );
};

export const MessageTextBoxContainer = () => {
    return(
        <div className="chat_message_input_wrapper">
          <input id="chat_msg_input" className="chat_message_input" placeholder="Type your messages here..." value={this.props.message} onChange={this.props.onChange} onKeyPress={this.props._handleKeyPress}/>
        </div>
    )
};


export const Avartar = () => {
    return(
        <div className="avatar"/>
    )
};

