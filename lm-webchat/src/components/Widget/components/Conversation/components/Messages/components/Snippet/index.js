import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import Input from '../Medication/components/Input';
import Select from '../Medication/components/Select';
import Button from '../Medication/components/Button';
import axios from 'axios';
import './styles.scss';

const buttonStyle = {
  margin: '10px 10px 10px 10px'
};

class Snippet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        email: '',
        firstname: '',
        lastname: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(prevState => ({ newUser:
    { ...prevState.newnewUser, [name]: value
    }
    }), () => console.log(this.state.newUser));
  }
//   handleFormSubmit(e) {
//     e.preventDefault();
//     let userData = this.state.newUser;
//     fetch('http://app.linkmedicine.cn/chat-case-create?email=' + EMAIL + '&diagnosis=' + JSON.stringify(localStorage.getItem('diagnosis_key_word')) + '&firstname=' + FIRSTNAME + '&lastname=' + LASTNAME + '&type=MSO', {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       } }).then(response => {
//          response.json().then(console.log("Successful")
//          })
//      })
//    }   

  handleSubmit(event) {
    event.preventDefault();
    const EMAIL = this.state.newUser.email;
    const FIRSTNAME = this.state.newUser.firstname;
    const LASTNAME = this.state.newUser.lastname;
    const payload = '/confirm_email{\"email\":' + '\"' + EMAIL + '\"}';
    localStorage.setItem('EMAIL', EMAIL);
    localStorage.setItem('FIRSTNAME', FIRSTNAME);
    localStorage.setItem('LASTNAME', LASTNAME);
    //http://app.linkmedicine.cn/chat-case-create?email=xxxx@gmail.com&diagnosis=yyyy&firstname=aaaa&lastname=bbbbb&type=MSO
    axios
    .get('https://app.linkmedicine.cn/chat-case-create?email=' + EMAIL + '&diagnosis=' + JSON.stringify(localStorage.getItem('diagnosis_key_word')) + '&firstname=' + FIRSTNAME + '&lastname=' + LASTNAME + '&type=MSO')
    .then((response) => {
        this.props.submitEMAIL(payload, JSON.stringify(response.data));
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
            <Input
              inputType={'text'}
              title={'First Name'}
              name={'firstname'}
              value={this.state.newUser.firstname}
              placeholder={''}
              handleChange={this.handleInput}
            />
            <Input
              inputType={'text'}
              title={'Last Name'}
              name={'lastname'}
              value={this.state.newUser.lastname}
              placeholder={''}
              handleChange={this.handleInput}
            />
            <Input
              inputType={'email'}
              title={'Email'}
              name={'email'}
              value={this.state.newUser.email}
              placeholder={''}
              handleChange={this.handleInput}
            />
            <Button
              action={this.handleSubmit}
              type={'primary'}
              title={'Submit'}
              style={buttonStyle}
            />{ /* Submit */ }
            <Button
              action={this.handleSkip}
              type={'primary'}
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
    submitEMAIL: (payload, EMAIL) => {
      dispatch(emitUserMessage(payload));
      dispatch(addUserMessage(EMAIL));
    }
  });

Snippet.propTypes = {
  message: PROP_TYPES.SNIPPET
};

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);
