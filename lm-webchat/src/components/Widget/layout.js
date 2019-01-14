import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Conversation from './components/Conversation';
import Launcher from './components/Launcher';
import './style.scss';

const WidgetLayout = (props) => {
  const classes = props.embedded ? ['widget-embedded'] : ['widget-container'];
  if (props.fullScreenMode) {
    classes.push('full-screen');
  }
  const showCloseButton = props.showCloseButton !== undefined ? props.showCloseButton : !props.embedded;

  return (
    props.isChatVisible ? 
    <div className={classes.join(' ')}>
      {
        (props.isChatOpen || props.embedded) &&
        <Conversation
          title={props.title}
          subtitle={props.subtitle}
          sendMessage={props.onSendMessage}
          profileAvatar={props.profileAvatar}
          toggleChat={props.toggleChat}
          isChatOpen={props.isChatOpen}
          disabledInput={props.disabledInput}
          params={props.params}
          {...{ showCloseButton }}
          connected={props.connected}
          connectingText={props.connectingText}
        />
      }
      {
        !props.embedded &&
        <Launcher
          toggle={props.toggleChat}
          isChatOpen={props.isChatOpen}
          badge={props.badge}
          fullScreenMode={props.fullScreenMode}
        />
      }
    </div>
    : null
  );
};

const mapStateToProps = state => ({
  isChatVisible: state.behavior.get('isChatVisible'),
  isChatOpen: state.behavior.get('isChatOpen'),
  disabledInput: state.behavior.get('disabledInput'),
  connected: state.behavior.get('connected'),
  connectingText: state.behavior.get('connectingText')
})

WidgetLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onSendMessage: PropTypes.func,
  toggleChat: PropTypes.func,
  isChatOpen: PropTypes.bool,
  isChatVisible: PropTypes.bool,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  embedded: PropTypes.bool,
  params: PropTypes.object,
  connected: PropTypes.bool,
  connectingText: PropTypes.string,
};

export default connect(mapStateToProps)(WidgetLayout);
