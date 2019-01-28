import { List } from 'immutable';
import { MESSAGE_SENDER, SESSION_NAME } from 'constants';

import {
    createQuickReply,
    createNewMessage,
    createLinkSnippet,
    createVideoSnippet,
    createDatePickSnippet,
    createAgeSnippet,
    createAppointmentSnippet,
    createConsultantSnippet,
    createMedicationSnippet,
    createSurgerySnippet,
    createSymptomSnippet,
    createDkwCompleteSnippet,
    createImageSnippet,
    createComponentMessage,
    createHospitalMapSnippet,
    storeMessageTo,
    getLocalSession
} from './helper';

import * as actionTypes from '../actions/actionTypes';

export default function (storage) {

  const initialState = List([]);

  return function reducer(state = initialState, action) {
    const storeMessage = storeMessageTo(storage);
    switch (action.type) {
      // Each change to the redux store's message list gets recorded to storage
      case actionTypes.ADD_NEW_USER_MESSAGE: {
        return storeMessage(state.push(createNewMessage(action.text, MESSAGE_SENDER.CLIENT)));
      }
      case actionTypes.ADD_NEW_RESPONSE_MESSAGE: {
        return storeMessage(state.push(createNewMessage(action.text, MESSAGE_SENDER.RESPONSE)));
      }
      case actionTypes.ADD_NEW_LINK_SNIPPET: {
        return storeMessage(state.push(createLinkSnippet(action.link, MESSAGE_SENDER.CLIENT)));
      }
      case actionTypes.ADD_DATEPICK: {
        return storeMessage(state.push(createDatePickSnippet(action.DatePick, MESSAGE_SENDER.CLIENT)));
      }
      case actionTypes.ADD_APPOINTMENT: {
        return storeMessage(state.push(createAppointmentSnippet(action.Appointment, MESSAGE_SENDER.CLIENT)));
      }
      case actionTypes.ADD_CONSULTANT: {
        return storeMessage(state.push(createConsultantSnippet(action.Consultant, MESSAGE_SENDER.CLIENT)));
      }
      case actionTypes.ADD_DKWCOMPLETE: {
        return storeMessage(state.push(createDkwCompleteSnippet(action.DkwComplete, MESSAGE_SENDER.CLIENT)));
      }
      case actionTypes.ADD_HOSPITALMAP: {
        return storeMessage(state.push(createHospitalMapSnippet(action.HospitalMap, MESSAGE_SENDER.RESPONSE)));
      }
      case actionTypes.ADD_SYMPTOM: {
        return storeMessage(state.push(createSymptomSnippet(action.Symptom, MESSAGE_SENDER.CLIENT)));
      }
      case actionTypes.ADD_SURGERY: {
        return storeMessage(state.push(createSurgerySnippet(action.Surgery, MESSAGE_SENDER.CLIENT)));
      }
      case actionTypes.ADD_MEDICATION: {
        return storeMessage(state.push(createMedicationSnippet(action.Medication, MESSAGE_SENDER.CLIENT)));
      }
      case actionTypes.ADD_AGE: {
        return storeMessage(state.push(createAgeSnippet(action.Age, MESSAGE_SENDER.RESPONSE)));
      }
      case actionTypes.ADD_NEW_VIDEO_VIDREPLY: {
        return storeMessage(state.push(createVideoSnippet(action.video, MESSAGE_SENDER.RESPONSE)));
      }
      case actionTypes.ADD_NEW_IMAGE_IMGREPLY: {
        return storeMessage(state.push(createImageSnippet(action.image, MESSAGE_SENDER.RESPONSE)));
      }
      case actionTypes.ADD_QUICK_REPLY: {
        return storeMessage(state.push(createQuickReply(action.quickReply, MESSAGE_SENDER.RESPONSE)));
      }
      case actionTypes.ADD_COMPONENT_MESSAGE: {
        return storeMessage(state.push(createComponentMessage(action.component, action.props, action.showAvatar)));
      }
      case actionTypes.SET_QUICK_REPLY: {
        return storeMessage(state.setIn([action.id, 'chosenReply'], action.title));
      }
      case actionTypes.INSERT_NEW_USER_MESSAGE: {
        return storeMessage(state.insert(action.index, createNewMessage(action.text, MESSAGE_SENDER.RESPONSE)));
      }
      case actionTypes.DROP_MESSAGES: {
        return storeMessage(initialState)
      }
      // Pull conversation from storage, parsing as immutable List
      case actionTypes.PULL_SESSION: {
        const localSession = getLocalSession(storage, SESSION_NAME);
        if (localSession) {
          return List(localSession.conversation);
        } else {
          return state
        }
      }
      default:
        return state;
    }
  }
}

