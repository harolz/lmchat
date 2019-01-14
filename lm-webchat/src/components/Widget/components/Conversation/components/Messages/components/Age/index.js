import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import Select from 'react-select';
import { connect } from 'react-redux';
import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import { numOptions } from './docs/data';
import './styles.scss';

const timeOptions = [
  { value: 'year', label: '岁' },
  { value: 'month', label: '周' },
  { value: 'day', label: '天' }
];


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 0,
    
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 100,
    height: 38
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

class Age extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    if (!this.props.inputState) {
      this.props.toggleInputDisabled();
      // this.props.changeInputFieldHint(hint);
    }
  }
  state = {
    selectedNumOption: numOptions[35],
    selectedTimeOption: timeOptions[0]

  }
  handleChange1 = (selectedNumOption) => {
    this.setState({ selectedNumOption });
    console.log(`Option selected:`, selectedNumOption);
  }
  handleChange2 = (selectedTimeOption) => {
    this.setState({ selectedTimeOption });
    console.log(`Option selected:`, selectedTimeOption);
  }

  handleClick() {
    // alert(JSON.stringify(this.state));
    // alert(this.state.selectedNumOption.label);
    const age = this.state.selectedNumOption.label + ' ' + this.state.selectedTimeOption.label;
    const payload = '/comfirm_age';
    this.props.submitAge(payload, age);
  }

  render() {
    // const { selectedOption } = this.state;
    // const sender = this.props.message.get('sender');

    return (
      <div className="client-side">
        { this.props.isLast && <div>
          <Select
            value={this.state.selectedNumOption}
            placeholder={this.state.selectedNumOption}
            styles={customStyles}
            onChange={this.handleChange1}
            options={numOptions}
          />
          <Select
            value={this.state.selectedTimeOption}
            placeholder={this.state.selectedTimeOption}
            styles={customStyles}
            onChange={this.handleChange2}
            options={timeOptions}
          />
          <br />
          <input type="submit" value="提交" onClick={this.handleClick} />
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputState: state.behavior.get('disabledInput')
});

const mapDispatchToProps = dispatch => ({
  toggleInputDisabled: _ => dispatch(toggleInputDisabled()),
  submitAge: (payload, age) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(age));
  }
});

Age.propTypes = {
  message: PROP_TYPES.AGE
};

export default connect(mapStateToProps, mapDispatchToProps)(Age);
