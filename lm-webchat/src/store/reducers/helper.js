import { Map, List } from 'immutable';
import { MESSAGES_TYPES, MESSAGE_SENDER, SESSION_NAME } from 'constants';

import { Video, Image, Message, Snippet, QuickReply, DatePick, DkwComplete, Age, Symptom, Medication, Surgery, Appointment, Consultant, HospitalMap, RankChart, DataReport } from 'messagesComponents';


export function createNewMessage(text, sender) {
  return Map({
    type: MESSAGES_TYPES.TEXT,
    component: Message,
    text,
    sender,
    showAvatar: sender === MESSAGE_SENDER.RESPONSE
  });
}

export function createLinkSnippet(link, sender) {
  return Map({
    type: MESSAGES_TYPES.SNIPPET.LINK,
    component: Snippet,
    title: link.title,
    link: link.link,
    content: link.content,
    target: link.target || '_blank',
    sender,
    showAvatar: false
  });
}

export function createAgeSnippet(age, sender) {
  return Map({
    type: MESSAGES_TYPES.AGE,
    component: Age,
    title: age.title,
    link: age.link,
    content: age.content,
    target: age.target || '_blank',
    sender,
    showAvatar: false
  });
}

export function createSymptomSnippet(symptom, sender) {
  return Map({
    type: MESSAGES_TYPES.SYMPTOM,
    component: Symptom,
    title: symptom.title,
    link: symptom.link,
    content: symptom.content,
    target: symptom.target || '_blank',
    sender,
    showAvatar: false
  });
}

export function createHospitalMapSnippet(hospitalmap, sender) {
  return Map({
    type: MESSAGES_TYPES.HOSPITALMAP,
    component: HospitalMap,
    title: hospitalmap.title,
    link: hospitalmap.link,
    content: hospitalmap.content,
    target: hospitalmap.target || '_blank',
    sender,
    showAvatar: true
  });
}

export function createDataReportSnippet(datareport, sender) {
  return Map({
    type: MESSAGES_TYPES.DATAREPORT,
    component: DataReport,
    dkw: datareport.dkw || 'Down Syndrome',
    link: datareport.link,
    hospitals: datareport.hospitals,
    target: datareport.target || '_blank',
    sender,
    showAvatar: true
  });
}

export function createRankChartSnippet(rankchart, sender) {
  return Map({
    type: MESSAGES_TYPES.RANKCHART,
    component: RankChart,
    dkw: rankchart.dkw,
    link: rankchart.link,
    hospitals: rankchart.hospitals,
    target: rankchart.target || '_blank',
    sender,
    showAvatar: true
  });
}

export function createMedicationSnippet(medication, sender) {
  return Map({
    type: MESSAGES_TYPES.MEDICATION,
    component: Medication,
    title: medication.title,
    link: medication.link,
    content: medication.content,
    target: medication.target || '_blank',
    sender,
    showAvatar: false
  });
}

export function createSurgerySnippet(surgery, sender) {
  return Map({
    type: MESSAGES_TYPES.SURGERY,
    component: Surgery,
    title: surgery.title,
    link: surgery.link,
    content: surgery.content,
    target: surgery.target || '_blank',
    sender,
    showAvatar: false
  });
}

export function createDkwCompleteSnippet(dkwcomplete, sender) {
  return Map({
    type: MESSAGES_TYPES.DKWCOMPLETE,
    component: DkwComplete,
    title: dkwcomplete.title,
    link: dkwcomplete.link,
    content: dkwcomplete.content,
    target: dkwcomplete.target || '_blank',
    sender,
    showAvatar: false
  });
}

export function createDatePickSnippet(datepicker, sender) {
  return Map({
    type: MESSAGES_TYPES.DATEPICK,
    component: DatePick,
    title: datepicker.title,
    link: datepicker.link,
    content: datepicker.content,
    target: datepicker.target || '_blank',
    sender,
    showAvatar: false
  });
}

export function createAppointmentSnippet(appointment, sender) {
  return Map({
    type: MESSAGES_TYPES.APPOINTMENT,
    component: Appointment,
    title: appointment.title,
    link: appointment.link,
    content: appointment.content,
    target: appointment.target || '_blank',
    sender,
    showAvatar: false
  });
}

export function createConsultantSnippet(consultant, sender) {
  return Map({
    type: MESSAGES_TYPES.CONSULTANT,
    component: Consultant,
    title: consultant.title,
    link: consultant.link,
    content: consultant.content,
    target: consultant.target || '_blank',
    sender,
    showAvatar: false
  });
}

export function createVideoSnippet(video, sender) {
  return Map({
    type: MESSAGES_TYPES.VIDREPLY.VIDEO,
    component: Video,
    title: video.title,
    video: video.video,
    sender,
    showAvatar: true
  });
}

export function createImageSnippet(image, sender) {
  return Map({
    type: MESSAGES_TYPES.IMGREPLY.IMAGE,
    component: Image,
    title: image.title,
    image: image.image,
    sender,
    showAvatar: true
  });
}

export function createQuickReply(quickReply, sender) {
  return Map({
    type: MESSAGES_TYPES.QUICK_REPLY,
    component: QuickReply,
    text: quickReply.text,
    hint: quickReply.hint || 'Select an option...',
    quick_replies: List(quickReply.quick_replies),
    sender,
    showAvatar: false,
    chosenReply: null
  });
}

export function createComponentMessage(component, props, showAvatar) {
  return Map({
    type: MESSAGES_TYPES.CUSTOM_COMPONENT,
    component,
    props,
    sender: MESSAGE_SENDER.RESPONSE,
    showAvatar
  });
}

export function getLocalSession(storage, key) {
  // Attempt to get local session from storage
  const cachedSession = storage.getItem(key);
  var session = null;
  if (cachedSession) {
    // Found existing session in storage
    let parsedSession = JSON.parse(cachedSession)
    // Format conversation from array of object to immutable Map for use by messages components
    const formattedConversation = parsedSession.conversation
      ? Object.values(parsedSession.conversation).map(item => Map(item))
      : [];
    // Check if params is undefined
    const formattedParams = parsedSession.params
      ? parsedSession.params
      : {};
    //Create a new session to return
      session = {
      ...parsedSession,
      conversation: formattedConversation,
      params: formattedParams
    }
  }
  // Returns a formatted session object if any found, otherwise return undefined
  return session;
}

export function storeLocalSession(storage, key, sid) {
  // Attempt to store session id to local storage
  const cachedSession = storage.getItem(key);
  var session;
  if (cachedSession) {
      // Found exisiting session in storage
    let parsedSession = JSON.parse(cachedSession)
    session = {
      ...parsedSession,
      session_id: sid
    }
  } else {
    // No existing local session, create a new empty session with only session_id
    session = {
      session_id: sid
    }
  }
  // Store updated session to storage
  storage.setItem(key, JSON.stringify(session));
}

export const storeMessageTo = (storage) => (conversation) => {
  // Store a conversation List to storage
  const localSession = getLocalSession(storage, SESSION_NAME);
  const newSession = {
    // Since immutable List is not a native JS object, store conversation as array
    ...localSession,
    conversation: [...Array.from(conversation)]
  }
  storage.setItem(SESSION_NAME, JSON.stringify(newSession));
  return conversation
}

export const storeParamsTo = (storage) => (params) => {
  // Store a params List to storage
  const localSession = getLocalSession(storage, SESSION_NAME);
  const newSession = {
    // Since immutable Map is not a native JS object, store conversation as array
    ...localSession,
    params: params.toJS()
  }
  storage.setItem(SESSION_NAME, JSON.stringify(newSession));
  return params
}