import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
// import HospitalMap from './components/Widget/components/Conversation/components/Messages/components/HospitalMap';

export const SESSION_NAME = 'chat_session';

export const MESSAGE_SENDER = {
  CLIENT: 'client',
  RESPONSE: 'response'
};

export const MESSAGES_TYPES = {
  TEXT: 'text',
  SNIPPET: {
    LINK: 'snippet'
  },
  VIDREPLY: {
    VIDEO: 'vidreply'
  },
  IMGREPLY: {
    IMAGE: 'imgreply'
  },
  QUICK_REPLY: 'quickreply',
  CUSTOM_COMPONENT: 'component',
  DATEPICK: 'datepick',
  DKWCOMPLETE: 'dkwcomplete',
  AGE: 'age',
  SYMPTOM: 'symptom',
  MEDICATION: 'medication',
  SURGERY: 'surgery',
  APPOINTMENT: 'appointment',
  CONSULTANT: 'consultant',
  HOSPITALMAP: 'hospitalmap',
  RANKCHART: 'rankchart',
  DATAREPORT: 'datareport'
};

export const PROP_TYPES = {

  MESSAGE: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.QUICK_REPLY,
      MESSAGES_TYPES.SNIPPET.LINK,
      MESSAGES_TYPES.IMGREPLY.IMAGE,
      MESSAGES_TYPES.VIDREPLY.VIDEO,
      MESSAGES_TYPES.DATEPICK,
      MESSAGES_TYPES.DKWCOMPLETE,
      MESSAGES_TYPES.AGE,
      MESSAGES_TYPES.SYMPTOM,
      MESSAGES_TYPES.SURGERY,
      MESSAGES_TYPES.MEDICATION,
      MESSAGES_TYPES.APPOINTMENT,
      MESSAGES_TYPES.CONSULTANT,
      MESSAGES_TYPES.HOSPITALMAP,
      MESSAGES_TYPES.RANKCHART,
      MESSAGES_TYPES.DATAREPORT
    ]),
    id: PropTypes.number,
    text: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  SNIPPET: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SNIPPET.LINK
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  AGE: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.AGE
    ]),
    id: PropTypes.number,
    age: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ]),
    submitAGE: PropTypes.func,
    getAge: PropTypes.func
  }),

  MEDICATION: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.MEDICATION
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ]),
    submitMEDICATION: PropTypes.func,
    getMEDICATION: PropTypes.func
  }),

  SYMPTOM: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SYMPTOM
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ]),
    submitSymptom: PropTypes.func,
    toggleInputDisabled: PropTypes.func,
    inputState: PropTypes.bool,
    chosenSymptom: PropTypes.string
  }),

  SURGERY: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.SURGERY
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  HOSPITALMAP: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.HOSPITALMAP
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  RANKCHART: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.RANKCHART
    ]),
    id: PropTypes.number,
    dkw: PropTypes.string,
    link: PropTypes.string,
    hospitals: PropTypes.arrayOf(PropTypes.shape({ hospitalName: PropTypes.string.isRequired, totalcount: PropTypes.number.isRequired })).isRequired,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  DATAREPORT: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.DATAREPORT
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  VIDREPLY: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.VIDREPLY.VIDEO
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    src: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  IMGREPLY: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.TEXT,
      MESSAGES_TYPES.IMGREPLY.IMAGE
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    src: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ])
  }),

  QUICK_REPLY: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.QUICK_REPLY
    ]),
    id: PropTypes.number,
    text: PropTypes.string,
    hint: PropTypes.string,
    quick_replies: ImmutablePropTypes.listOf(
        PropTypes.shape({
          title: PropTypes.string,
          payload: PropTypes.string
        })),
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ]),
    chooseReply: PropTypes.func,
    getChosenReply: PropTypes.func,
    toggleInputDisabled: PropTypes.func,
    inputState: PropTypes.bool,
    chosenReply: PropTypes.string
  }),

  DATEPICK: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.DATEPICK
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ]),
    submitDate: PropTypes.func,
    toggleInputDisabled: PropTypes.func,
    inputState: PropTypes.bool,
    chosenDate: PropTypes.string
  }),

  APPOINTMENT: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.APPOINTMENT
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ]),
    submitDATE: PropTypes.func,
    toggleInputDisabled: PropTypes.func,
    inputState: PropTypes.bool,
    chosenDate: PropTypes.string
  }),

  CONSULTANT: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.CONSULTANT
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT
    ]),
    submitCONSULTANT: PropTypes.func,
    toggleInputDisabled: PropTypes.func,
    inputState: PropTypes.bool,
    chosenCONSULTANT: PropTypes.string
  }),

  DKWCOMPLETE: ImmutablePropTypes.contains({
    type: PropTypes.oneOf([
      MESSAGES_TYPES.DKWCOMPLETE
    ]),
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.string,
    target: PropTypes.string,
    sender: PropTypes.oneOf([
      MESSAGE_SENDER.CLIENT,
      MESSAGE_SENDER.RESPONSE
    ]),
    submitDKW: PropTypes.func,
    toggleInputDisabled: PropTypes.func,
    inputState: PropTypes.bool,
    chosenDate: PropTypes.string
  })

};
