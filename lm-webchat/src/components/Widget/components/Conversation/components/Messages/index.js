import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { MESSAGES_TYPES } from 'constants';
import { Symptom } from 'messagesComponents';
import { Video, Image, Message, QuickReply, DatePick, DkwComplete, Age, Surgery, Medication, Snippet, Appointment, Consultant, HospitalMap, RankChart, DataReport } from 'messagesComponents';
import './styles.scss';

const scrollToBottom = () => {
  const messagesDiv = document.getElementById('messages');
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

class Messages extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    this.setTimer();
    scrollToBottom();
  }

  // componentWillReceiveProps() {
  //   this.setTimer();
  //   this.setState({ visible: true });
  // }

  componentDidUpdate() {
    scrollToBottom();
  }

  setTimer() {
    // clear any existing timer
    if (this._timer != null) {
      clearTimeout(this._timer)
    }

    // hide after `delay` milliseconds
    this._timer = setTimeout(function(){
      this.setState({visible: false});
      this._timer = null;
    }.bind(this), 1500);
  }

  getbottyping() {
    return (<div className="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  getComponentToRender = (message, index, isLast) => {
    const { params } = this.props;
    const ComponentToRender = (() => {
      switch(message.get('type')) {
        case MESSAGES_TYPES.TEXT: {
          return Message;
        }
        case MESSAGES_TYPES.SNIPPET.LINK: {
          return Snippet;
        }
        case MESSAGES_TYPES.AGE: {
          return Age;
        }
        case MESSAGES_TYPES.MEDICATION: {
          return Medication;
        }
        case MESSAGES_TYPES.SURGERY: {
          return Surgery;
        }
        case MESSAGES_TYPES.HOSPITALMAP: {
          return HospitalMap;
        }
        case MESSAGES_TYPES.RANKCHART: {
          return RankChart;
        }
        case MESSAGES_TYPES.SYMPTOM: {
          return Symptom;
        }
        case MESSAGES_TYPES.VIDREPLY.VIDEO: {
          return Video;
        }
        case MESSAGES_TYPES.IMGREPLY.IMAGE: {
          return Image;
        }
        case MESSAGES_TYPES.DATEPICK: {
          return DatePick;
        }
        case MESSAGES_TYPES.APPOINTMENT: {
          return Appointment;
        }
        case MESSAGES_TYPES.DATAREPORT: {
          return DataReport;
        }
        case MESSAGES_TYPES.CONSULTANT: {
          return Consultant;
        }
        case MESSAGES_TYPES.DKWCOMPLETE: {
          return DkwComplete;
        }
        case MESSAGES_TYPES.QUICK_REPLY: {
          return QuickReply;
        }
      }
      return null;
    })();
    if (message.get('type') === 'component') {
      return <ComponentToRender id={index} {...message.get('props')} isLast={isLast}/>;
    }
    return <ComponentToRender id={index} params={params} message={message} isLast={isLast} />;
  }

  render() {
    return (
      <div id="messages" className="messages-container">
        {
          this.props.messages.map((message, index) =>
            <div className="message" key={index}>
              {
                this.props.profileAvatar &&
                message.get('showAvatar') &&
                <img src={this.props.profileAvatar} className="avatar" alt="profile" /> 
              }
              { this.state.visible ? message.get('showAvatar') &&
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                    : this.getComponentToRender(message, index, index === this.props.messages.size - 1)
                }
            </div>
          )
        }
      </div>
    );
  }
}

Messages.propTypes = {
  messages: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  profileAvatar: PropTypes.string
};

export default connect(store => ({
  messages: store.messages
}))(Messages);
