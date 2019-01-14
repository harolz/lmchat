import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Input, Button, Select } from 'react-advanced-form-addons';
import { Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
import rules from './validation-rules';
import messages from './validation-messages';
import { PROP_TYPES } from 'constants';
import './styles.scss';

class Symptom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '请在此完善症状描述，完成后请点击“提交”。'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (!this.props.inputState) {
      this.props.toggleInputDisabled();
      // this.props.changeInputFieldHint(hint);
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('An essay was submitted: ' + this.state.value);
    const SYMPTOM = this.state.value;
    const payload = '/comfirm_symptom';
    this.props.submitSYMPTOM(payload, SYMPTOM);
  }
  render() {
    return (
      <div className="client-side">
        { this.props.isLast && <div className="symptom">
          <div className="example">
            <form>
              <textarea value={this.state.value} onChange={this.handleChange} cols={30} rows={6} />
              <input type="submit" value="提交" onClick={this.handleSubmit}/>
            </form>
          </div>
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
