import { store } from '../store';
import * as actions from './index';

export function isOpen() {
  return store.dispatch(actions.getOpenState());
  }

export function isVisible() {
  return store.dispatch(actions.getVisibleState());
}

export function initialize() {
  store.dispatch(actions.initialize());
}

export function connect() {
  store.dispatch(actions.connectServer());
}

export function disconnect() {
  store.dispatch(actions.disconnectServer());
}

export function addSymptomSnippet(Symptom) {
  store.dispatch(actions.addSymptomSnippet(Symptom));
}

export function addSurgerySnippet(Surgery) {
  store.dispatch(actions.addSurgerySnippet(Surgery));
}

export function addHospitalMapSnippet(HospitalMap) {
  store.dispatch(actions.addHospitalMapSnippet(HospitalMap));
}

export function addDataReportSnippet(DataReport) {
  store.dispatch(actions.addDataReportSnippet(DataReport));
}

export function addRankChartSnippet(RankChart) {
  store.dispatch(actions.addRankChartSnippet(RankChart));
}

export function addMedicationSnippet(Medication) {
  store.dispatch(actions.addMedicationSnippet(Medication));
}

export function addAgeSnippet(Age) {
  store.dispatch(actions.addAgeSnippet(Age));
}

export function addAppointmentSnippet(Appointment) {
  store.dispatch(actions.addAppointmentSnippet(Appointment));
}

export function addConsultantSnippet(Consultant) {
  store.dispatch(actions.addConsultantSnippet(Consultant));
}

export function addDkwComplete(dkwcomplete) {
  store.dispatch(actions.addDkwCompleteSnippet(dkwcomplete));
}

export function addDatePick(datepick) {
  store.dispatch(actions.addDatePickSnippet(datepick));
}

export function submitDatePick(date) {
  store.dispatch(actions.submitDatePick(date));
}

export function addUserMessage(text) {
  store.dispatch(actions.addUserMessage(text));
}

export function emitUserMessage(text) {
  store.dispatch(actions.emitUserMessage(text));
}

export function addResponseMessage(text) {
  store.dispatch(actions.addResponseMessage(text));
}

export function addLinkSnippet(link) {
  store.dispatch(actions.addLinkSnippet(link));
}

export function addVideoSnippet(video) {
  store.dispatch(actions.addVideoSnippet(video));
}

export function addImageSnippet(image) {
  store.dispatch(actions.addImageSnippet(image));
}

export function addQuickReply(quickReply) {
  store.dispatch(actions.addQuickReply(quickReply));
}

export function setQuickReply(id, title) {
  store.dispatch(actions.setQuickReply(id, title));
}

export function insertUserMessage(id, text) {
  store.dispatch(actions.insertUserMessage(id, text));
}

export function renderCustomComponent(component, props, showAvatar = false) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar));
}

export function openChat() {
  store.dispatch(actions.openChat());
}

export function closeChat() {
  store.dispatch(actions.closeChat());
}

export function toggleChat() {
  store.dispatch(actions.toggleChat());
}

export function showChat() {
  store.dispatch(actions.showChat());
}

export function hideChat() {
  store.dispatch(actions.hideChat());
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled());
}

export function changeInputFieldHint(hint) {
  store.dispatch(actions.changeInputFieldHint(hint));
}

export function dropMessages() {
  store.dispatch(actions.dropMessages());
}

export function pullSession() {
  store.dispatch(actions.pullSession());
}
