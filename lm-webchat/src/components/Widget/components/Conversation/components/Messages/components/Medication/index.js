import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import CheckBox from './components/CheckBox';
import Input from './components/Input';
import TextArea from './components/TextArea';
import Select from './components/Select';
import Button from './components/Button';
import './styles.scss';

const buttonStyle = {
  margin: '10px 10px 10px 10px'
};

class Medication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''
      },
      genderOptions: ['Analgesics', 'Antipyretics', 'Antimalarial drugs', 'Antibiotics', 'Mood stabilizers', 'Others'],
      skillOptions: ['Self-identified', 'Stage 0', 'Stage 1', 'Stage 2']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
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
  handleAge(e) {
    let value = e.target.value;
    this.setState(prevState => ({ newUser:
    { ...prevState.newUser, age: value
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
        age: '',
        gender: '',
        skills: [],
        about: ''
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const MEDICATION = 'My reply has been successfully submitted.';
    const payload = '/comfirm_current_medication';
    this.props.submitMEDICATION(payload, MEDICATION);
  }
  handleSkip(event) {
    event.preventDefault();
    const MEDICATION = 'I have chosen to skip this question.';
    const payload = '/comfirm_current_medication';
    this.props.submitMEDICATION(payload, MEDICATION);
  }
  render() {
    return (
      <div className="client-side">
        { this.props.isLast && <div className="symptom">  
          <form className="container-fluid" onSubmit={this.handleSubmit}>  
            {/* <Input
              inputType={'text'}
              title={'Medication'}
              name={'name'}
              value={this.state.newUser.name}
              placeholder={'Enter the current medication you are taking'}
              handleChange={this.handleInput}
            /> */}
            {/* <Input
              inputType={'number'}
              name={''}
              title={'Therapy'}
              value={this.state.newUser.age}
              placeholder={'Enter when your therapy starts'}
              handleChange={this.handleAge} 
            /> */}
            {/* <Select
              title={'Gender'}
              name={'gender'}
              options={this.state.genderOptions} 
              value={this.state.newUser.gender}
              placeholder={'Select Medication'}
              handleChange={this.handleInput}
            /> */}
            {/* <CheckBox
              title={'Therapies'}
              name={'skills'}
              options={this.state.skillOptions}
              selectedOptions={this.state.newUser.skills}
              handleChange={this.handleCheckBox}
            /> */}
            <TextArea
              title={'Current Medication and Therapy'}
              rows={10}
              value={this.state.newUser.about}
              name={'currentPetInfo'}
              handleChange={this.handleTextArea}
              placeholder={'Describe your current medication and therapy'}
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
  submitMEDICATION: (payload, MEDICATION) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(MEDICATION));
  }
});

Medication.propTypes = {
  message: PROP_TYPES.MEDICATION
};

export default connect(mapStateToProps, mapDispatchToProps)(Medication);
