import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import DatePicker from 'react-datepicker';
import MonthPicker from 'react-month-picker-input';
import 'react-month-picker-input/dist/react-month-picker-input.css';
import Input from '../Medication/components/Input';
import TextArea from '../Medication/components/TextArea';
import Button from '../Medication/components/Button';
import './styles.scss';

const buttonStyle = {
  margin: '8px 8px 8px 8px'
};

class Symptom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        selecteddate: '',
        gender: '',
        skills: [],
        about: ''
      },
      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Self-identified', 'Stage 0', 'Stage 1', 'Stage 2']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleFullName(e) {
    let value = e.target.value;
    this.setState(prevState => ({ newUser:
    { ...prevState.newUser, name: value
    }
    }), () => console.log(this.state.newUser));
  }
  handleDate(date) {
    this.setState(prevState => ({ newUser:
    { ...prevState.newUser, selecteddate: date
    }
    }), () => console.log(this.state.newUser));
  }
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({ newUser:
    { ...prevState.newUser, [name]: value
    }
    }), () => console.log(this.state.newUser));
  }
  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
    }), () => console.log(this.state.newUser));
  }
  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }
    this.setState(prevState => ({ newUser:
        { ...prevState.newUser, skills: newSelectionArray }
    })
      );
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
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
      newUser: {
        name: '',
        date: '',
        gender: '',
        skills: [],
        about: ''
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const SYMPTOM = 'My reply has been successfully submitted.';
    // alert(this.state.newUser.date);
    const payload = '/comfirm_symptoms';
    this.props.submitSYMPTOM(payload, SYMPTOM);
  }
  handleSkip(event) {
    event.preventDefault();
    const SYMPTOM = 'I have chosen to skip this question.';
    const payload = '/comfirm_current_symptoms';
    this.props.submitSYMPTOM(payload, SYMPTOM);
  }
  render() {
    return (
      <div className="client-side">
        { this.props.isLast && <div className="symptom">
          <form className="container-fluid" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor={'selecteddate'} className="form-label">{'Approximately When:'}</label>
              <MonthPicker
                closeOnSelect
                onChange={function (maskedValue, selectedYear, selectedMonth) {
                  console.log(maskedValue, selectedYear, selectedMonth);
                  this.setState(prevState => ({ newUser:
                  { ...prevState.newUser, date: selectedYear } })); }}
              />
            </div>
            <TextArea
              title={'Description'}
              rows={10}
              value={this.state.newUser.about}
              name={'currentPetInfo'}
              handleChange={this.handleTextArea}
              placeholder={'Please describe your symptoms in greater details here.'}
            />{/* Description */}
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
  submitSYMPTOM: (payload, SYMPTOM) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(SYMPTOM));
  }
});

Symptom.propTypes = {
  message: PROP_TYPES.SYMPTOM
};

export default connect(mapStateToProps, mapDispatchToProps)(Symptom);
