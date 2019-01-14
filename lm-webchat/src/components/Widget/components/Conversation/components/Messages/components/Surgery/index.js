import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import './styles.scss';

class Surgery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '请在此完善以往病史，完成后请点击“提交”。'
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
    const SURGERY = this.state.value;
    const payload = '/comfirm_past_surgery';
    this.props.submitSURGERY(payload, SURGERY);
  }
  render() {
    return (
      <div className="client-side">
        { this.props.isLast && <div className="surgery">
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
  submitSURGERY: (payload, SURGERY) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(SURGERY));
  }
});

Surgery.propTypes = {
  message: PROP_TYPES.SURGERY
};

export default connect(mapStateToProps, mapDispatchToProps)(Surgery);
