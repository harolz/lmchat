import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import Input from '../Medication/components/Input';
import axios from 'axios';
import Button from '../Medication/components/Button';
import DatePicker from "react-datepicker";
import './styles.scss';

const buttonStyle = {
  margin: '10px 10px 10px 10px'
};
const pad2 = n => (n < 10 ? '0' + n : n);
class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAppointment: {
        phone: '',
        selected_date_time: null
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleChange(datetime) {
    this.setState(prevState => ({ newAppointment:
      { ...prevState.newAppointment, selected_date_time: datetime
      }
      }), () => console.log(this.state.newAppointment));
  }
  handlePhone(e) {
    const value = e.target.value;
    this.setState(prevState => ({ newAppointment:
    { ...prevState.newAppointment, phone: value
    }
    }), () => console.log(this.state.newAppointment));
  }
  handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(prevState => ({ newAppointment:
    { ...prevState.newAppointment, [name]: value
    }
    }), () => console.log(this.state.newAppointment));
  }
  handleDate(datetime) {
    this.setState(prevState => ({ newAppointment:
    { ...prevState.newAppointment, selected_date_time: datetime
    }
    }), () => console.log(this.state.newAppointment));
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newAppointment;
    fetch('http://example.com',{
         method: "POST",
         body: JSON.stringify(userData),
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
       }).then(response => {
         response.json().then(data =>{
           console.log("Successful" + data);
         })
     })
   }   
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newAppointment: {
        phone: '',
        selected_date_time: '',
        duration: ''
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const EMAIL = localStorage.getItem('EMAIL');
    const FIRSTNAME = localStorage.getItem('FIRSTNAME');
    const LASTNAME = localStorage.getItem('LASTNAME');
    const DKW = localStorage.getItem('diagnosis_key_word');
    const APPTIME = this.state.newAppointment.selected_date_time;
    const appTime = APPTIME.getFullYear().toString() + pad2(APPTIME.getMonth() + 1) + pad2(APPTIME.getDate()) + pad2(APPTIME.getHours()) + pad2(APPTIME.getMinutes());
    const APPOINTMENT = 'I have successfully made an appointment with LINKMedicine™ on ' + this.state.newAppointment.selected_date_time;
    const payload = '/comfirm_lm_appointment';
    this.props.submitAPPOINTMENT(payload, APPOINTMENT);
    axios
    .get('https://app.linkmedicine.com/chatbot-appoint-email?email=' + EMAIL  + '&firstname=' + FIRSTNAME + '&lastname=' + LASTNAME + '&diagnosis=' + DKW + '&appointTime=' + appTime)
    .then((response) => {
    })
    .catch((error) => { console.log(error); });
  }
  handleSkip(event) {
    event.preventDefault();
    const APPOINTMENT = 'You have chosen to skip this question.';
    const payload = '/comfirm_lm_appointment';
    this.props.submitAPPOINTMENT(payload, APPOINTMENT);
  }
  render() {
    return (
      <div className="client-side">
        { this.props.isLast && <div className="appointment">
          <form className="container-fluid" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="selected_date_time" className="form-label">Schedule Your Appointment:</label>
              <br />
              <DatePicker
                selected={this.state.newAppointment.selected_date_time}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              />
            </div>
            <Input
              inputType={'tel'}
              title={'Phone'}
              name={'Phone'}
              value={this.state.newAppointment.phone}
              placeholder={''}
              handleChange={this.handlePhone}
            />
            <Button
              action={this.handleSubmit}
              type={'primary'}
              title={'Submit'}
              style={buttonStyle}
            />{ /* Submit */ }
            <Button
              action={this.handleSkip}
              type={'secondary'}
              title={'Unclear'}
              style={buttonStyle}
            /> {/* Clear the form */}
          </form>
        </div> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputState: state.behavior.get('disabledInput')
});

const mapDispatchToProps = dispatch => ({
  toggleInputDisabled: _ => dispatch(toggleInputDisabled()),
  submitAPPOINTMENT: (payload, APPOINTMENT) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(APPOINTMENT));
  }
});

Appointment.propTypes = {
  message: PROP_TYPES.APPOINTMENT
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
