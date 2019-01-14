import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import './styles.scss';


class Medication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '请在此完善当前服用药物描述，完成后请点击“提交”。'
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
    const MEDICATION = this.state.value;
    const payload = '/comfirm_current_medication';
    this.props.submitMEDICATION(payload, MEDICATION);
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
  submitMEDICATION: (payload, MEDICATION) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(MEDICATION));
  }
});

Medication.propTypes = {
  message: PROP_TYPES.MEDICATION
};

export default connect(mapStateToProps, mapDispatchToProps)(Medication);
