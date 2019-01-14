import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';
import React from 'react';
import moment from 'moment';
import { PROP_TYPES } from 'constants';
import { connect } from 'react-redux';
import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { getEvents } from './googleCalendar';
import BigCalendar from 'react-big-calendar';
import ExampleControlSlot from './ExampleControlSlot';

moment.locale('zh-cn');
const localizer = BigCalendar.momentLocalizer(moment);

class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    getEvents((events) => {
      this.setState({ events });
    });
  }
  // componentDidUpdate() {
  //   getEvents((events) => {
  //     this.setState({ events });
  //   });
  // }
  handleSelect = ({ start, end }) => {
    // const title = window.prompt('New Event name');
    const title = '预约时间：';
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title
          }
        ]
      });
  }
  handleClick() {
    const APPOINTMENT = this.state.events[this.state.events.length - 1].title + ': ' + moment(this.state.events[this.state.events.length - 1].start).format('MMMM Do YYYY, h:mm:ss a') + ' ~ ' + moment(this.state.events[this.state.events.length - 1].end).format('MMMM Do YYYY, h:mm:ss a');
    const payload = '/comfirm_lm_appointment';
    this.props.submitAPPOINTMENT(payload, APPOINTMENT);
  }
  render() {
    return (
      <div className={'client-side'}>
        { this.props.isLast && <div className="appointment">
          <ExampleControlSlot.Entry waitForOutlet>
            <strong>
            Click an event to see more info, or drag the mouse over the calendar
            to select a date/time range.
            </strong>
          </ExampleControlSlot.Entry>
          <BigCalendar
            style={{ height: '480px', width: '720px' }}
            selectable
            onEventDrop={this.moveEvent}
            localizer={localizer}
            defaultView={BigCalendar.Views.WEEK}
            onSelectEvent={event => alert(event.title)}
            allDayAccessor={false}
            onSelectSlot={this.handleSelect}
            timeslots={2}
            events={this.state.events}
          />
          <input type="submit" value="提交" onClick={this.handleClick} />
        </div> }
      </div>
    );
  }

}
const mapStateToProps = state => ({
  inputState: state.behavior.get('disabledInput')
});
const mapDispatchToProps = dispatch => ({
    // toggleInputDisabled: _ => dispatch(toggleInputDisabled()),
  submitAPPOINTMENT: (payload, APPOINTMENT) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(APPOINTMENT));
    // dispatch(toggleInputDisabled());
  }
});
Appointment.propTypes = {
  message: PROP_TYPES.APPOINTMENT
};
export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
