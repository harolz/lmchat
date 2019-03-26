import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import zh_cn from 'date-fns/esm/locale/zh-CN';
import Button from '../Medication/components/Button';
import { PROP_TYPES } from 'constants';
import { connect } from 'react-redux';
import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import './styles.scss';


registerLocale('zh_cn', zh_cn);

const buttonStyle = {
  margin: '8px 8px 8px 8px'
};

class DatePick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleClick() {
    const payload = '/comfirm_medical_appointment';
    // const DATE = moment(this.state.startDate).format('MM DD YYYY');
    const DATE = this.state.startDate;
    const MSG = 'My reply has been successfully submitted.';
    this.props.submitDATE(payload, MSG);
  }
  handleSkip(event) {
    // event.preventDefault();
    const MSG = 'I do not currently have any appointment with a doctor.';
    const payload = '/comfirm_medical_appointment';
    this.props.submitDATE(payload, MSG);
  }
  render() {
    return (
      <div className={'client-side'}>
        { this.props.isLast && <div className="datepick">
          <div className="form-group">
            <label htmlFor={'selectedTitle'} className="form-label">{ 'Your upcoming procedures or appointment:'}</label>
            <div>
              <p>(e.g., surgeries, treatment, etc.)</p>
              <DatePicker
                showTimeSelect={false}
                selected={this.state.startDate}
                onChange={this.handleChange}
                dateFormat="MMMM d, yyyy"
                placeholderText=""
              />
            </div>
          </div>
          <div>
            <Button
              action={this.handleClick}
              type={'primary'}
              title={'Submit'}
              style={buttonStyle}
            />
            <Button
              action={this.handleSkip}
              type={'secondary'}
              title={'Unclear'}
              style={buttonStyle}
            />
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
  // toggleInputDisabled: _ => dispatch(toggleInputDisabled()),
  submitDATE: (payload, DATE) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(DATE));
  }
});

DatePick.propTypes = {
  message: PROP_TYPES.DATEPICK
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePick);
