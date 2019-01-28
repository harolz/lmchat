import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { PROP_TYPES, SESSION_NAME } from 'constants';
import axios from 'axios';
import './styles.scss';

class Message extends PureComponent {
  componentDidMount() {
    // if (this.props.message.get('sender') === 'client') { this.postData(); }
    this.postData(); 
  }


  postData() {
    axios
      .post('https://api.mlab.com/api/1/databases/lm_chat/collections/' + JSON.stringify(localStorage.getItem('remote_id')) + '?apiKey=fhemEKGEOg9M_Corn-LAUfvysMqPRL3a', { data: JSON.stringify({ text: this.props.message.get('sender') + ': ' + this.props.message.get('text') }) })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => { console.log(error); });
  }

  render() {
    const sender = this.props.message.get('sender');
    const text = this.props.message.get('text');
    return (
      <div className={sender}>
        <div className="message-text" >
          {sender === 'response' ? (
            <ReactMarkdown className={'markdown'} source={text} linkTarget={(url) => { if (!url.startsWith('mailto')) return '_blank'; }} />
          ) : (
            text
          )}
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE
};

export default Message;
