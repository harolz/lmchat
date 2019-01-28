import { Form } from 'react-advanced-form';
import { FormProvider } from 'react-advanced-form';
import React, { Component } from 'react';
import { emitUserMessage, toggleInputDisabled, addUserMessage} from 'actions';
import { connect } from 'react-redux';
import { Input, Button, Select } from 'react-advanced-form-addons';
import { Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
import rules from './validation-rules';
import messages from './validation-messages';
import { PROP_TYPES } from 'constants';
import axios from 'axios';
import './styles.scss';

const blacklistedEmails = ['xxx@xxx.com'];
const blacklistedPhones = ['999,911'];
const blacklistedNames = ['xxx'];

class Snippet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      EMAIL: '',
      FAMILY_NAME: '',
      GIVEN_NAME: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    if (!this.props.inputState) {
      this.props.toggleInputDisabled();
      // this.props.changeInputFieldHint(hint);
    }
  }

  registerUser = ({ serialized, fields, form }) => {
    alert(JSON.stringify(serialized, null, 2));

    /* Perform async request with the serialized data */
    return new Promise(resolve => resolve());
  }

  handleSubmit(event) {
    var MSG;
    event.preventDefault();
    const EMAIL = this.state.EMAIL;
    const FIRSTNAME = this.state.GIVEN_NAME;
    const LASTNAME = this.state.FAMILY_NAME;
    const payload = '/confirm_email{\"email\":' + '\"' + EMAIL + '\"}';
    //http://app.linkmedicine.cn/chat-case-create?email=xxxx@gmail.com&diagnosis=yyyy&firstname=aaaa&lastname=bbbbb&type=MSO
    axios
    .get('http://app.linkmedicine.cn/chat-case-create?email=' + EMAIL + '&diagnosis=' + JSON.stringify(localStorage.getItem('diagnosis_key_word')) + '&firstname=' + FIRSTNAME + '&lastname=' + LASTNAME + '&type=MSO')
    .then((response) => {
      console.log(response);
      MSG = response;
    })
    .catch((error) => { console.log(error); });
    this.props.submitEMAIL(payload, MSG);
  }

  validateEmail = ({ value, fieldProps, fields, form }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValidEmail = !blacklistedEmails.includes(value);

        resolve({
          /* "valid" is reserved property stating that the field is valid */
          valid: isValidEmail,

          /**
           * You can pass any extra properties to be accessible in the
           * validation message resolver.
           */
          reason: 'Blacklisted!'
        });
      }, 2000);
    });
  }

  validateName = ({ value, fieldProps, fields, form }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValidName = !blacklistedNames.includes(value);

        resolve({
          /* "valid" is reserved property stating that the field is valid */
          valid: isValidName,

          /**
           * You can pass any extra properties to be accessible in the
           * validation message resolver.
           */
          reason: 'Blacklisted!'
        });
      }, 2000);
    });
  }

  updateInputEMAIL(event) {
    this.setState({
      EMAIL: event.target.value
    });
  }

  updateInputFAMILYNAME(event) {
    this.setState({
      FAMILY_NAME: event.target.value
    });
  }

  updateInputGIVENNAME(event) {
    this.setState({
      GIVEN_NAME: event.target.value
    });
  }

  render() {
    // const sender = this.props.message.get('sender');
    return (
      <div className="client-side">
        { this.props.isLast && <div className="snippet">
          <FormProvider rules={rules} messages={messages}>
            <Form action={this.registerUser}>
              <h3>{ this.props.message.get('title') }</h3>
              <Input
                name="FamilyName"
                type="Name"
                label="姓"
                asyncRule={this.validateName}
                onChange={event => this.updateInputFAMILYNAME(event)}
                required
              />
              <Input
                name="GivenName"
                type="Name"
                label="名"
                asyncRule={this.validateName}
                onChange={event => this.updateInputGIVENNAME(event)}
                required
              />
              <Input
                name="userEmail"
                type="email"
                label="邮箱"
                asyncRule={this.validateEmail}
                onChange={event => this.updateInputEMAIL(event)}
                required
              />
              <Button primary onClick={this.handleSubmit}>提交</Button>
            </Form>
          </FormProvider>
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
