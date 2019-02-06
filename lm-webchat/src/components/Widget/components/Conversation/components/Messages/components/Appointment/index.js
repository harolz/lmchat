import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import Input from '../Medication/components/Input';
import Select from '../Medication/components/Select';
import Button from '../Medication/components/Button';
import './styles.scss';

const buttonStyle = {
  margin: '10px 10px 10px 10px'
};

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAppointment: {
        phone: '',
        selected_date_time: '',
        duration: ''
      },
      durationOptions: ['15 Min', '30 Min', '60 Min']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
    const APPOINTMENT = 'I have successfully made an appointment with LINKMedicine™ at' + this.state.newAppointment.selected_date_time;
    const payload = '/comfirm_lm_appointment';
    this.props.submitAPPOINTMENT(payload, APPOINTMENT);
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
            <Input
              inputType={'tel'}
              title={'Phone'}
              name={'Phone'}
              value={this.state.newAppointment.phone}
              placeholder={'Type in your phone number to contact.'}
              handleChange={this.handlePhone}
            />
            <Input
              inputType={'time'}
              title={'Schedule Your Appointment'}
              name={'selected_date_time'}
              value={this.state.newAppointment.selected_date_time}
              placeholder={'Type in when you want your appointment.'}
              handleChange={this.handleInput}
              size={35}
            />
            <Select
              title={'Duration'}
              name={'duration'}
              options={this.state.durationOptions}
              value={this.state.newAppointment.duration}
              placeholder={''}
              handleChange={this.handleInput}
            />
            <Button
              action={this.handleSubmit}
              type={'primary'}
              title={'Finish'}
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
