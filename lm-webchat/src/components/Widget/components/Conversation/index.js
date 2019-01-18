import React from 'react';
import PropTypes from 'prop-types';

import Messages from './components/Messages';
import './style.scss';

const Conversation = props =>
  <div className="conversation-container">
    <Messages
      profileAvatar={props.profileAvatar}
      params={props.params}
    />
  </div>;

Conversation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  profileAvatar: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  params: PropTypes.object,
  connected: PropTypes.bool,
  connectingText: PropTypes.string
};

export default Conversation;
