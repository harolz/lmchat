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
    if (!this.props.inputState) {
      // this.props.toggleInputDisabled();
      // this.props.changeInputFieldHint(hint);
    }
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleClick() {
    const payload = '/comfirm_medical_appointment';
    const DATE = this.state.startDate;
    this.props.submitDATE(payload, DATE);
  }
  render() {
    return (
      <div className={'client-side'}>
        { this.props.isLast && <div className="datepick">
          <div className="form-group">
              <label htmlFor={'selectedTitle'} className="form-label">{ " Your Doctor's Appointment: "}</label>
              <div>
                <DatePicker
                  inline
                  showTimeSelect={false}
                  timeCaption="时间"
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
            {/* locale="zh_cn" */}
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
    dispatch(addUserMessage(moment(DATE).format('MMMM Do YYYY, h:mm:ss a')));
    dispatch(toggleInputDisabled());
  }
});

DatePick.propTypes = {
  message: PROP_TYPES.DATEPICK
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePick);
