import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import Select from 'react-select';
import { connect } from 'react-redux';
import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import Button from '../Medication/components/Button';
import { numOptions } from './docs/data';
import './styles.scss';

const timeOptions = [
  { value: 'year', label: 'years old' },
  { value: 'month', label: 'months old' },
  { value: 'week', label: 'weeks old' }
];

const buttonStyle = {
  margin: '8px 8px 8px 8px'
};


const customStyles1 = {
  // option: (provided, state) => ({
  //   ...provided,
  //   borderBottom: '1px dotted pink',
  //   color: state.isSelected ? 'red' : 'blue',
  //   padding: 10
  // }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 80,
  //   height: 38
  // }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';

  //   return { ...provided, opacity, transition };
  // }
}

const customStyles2 = {
  // option: (provided, state) => ({
  //   ...provided,
  //   borderBottom: '1px dotted pink',
  //   color: state.isSelected ? 'red' : 'blue',
  //   padding: 10
  // }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 80,
  //   height: 38
  // }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';

  //   return { ...provided, opacity, transition };
  // }
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
    selectedNumOption: numOptions[25],
    selectedTimeOption: timeOptions[0]

  }
  handleChange1 = (selectedNumOption) => {
    this.setState({ selectedNumOption });
    // console.log(`Option selected:`, selectedNumOption);
  }
  handleChange2 = (selectedTimeOption) => {
    this.setState({ selectedTimeOption });
    // console.log(`Option selected:`, selectedTimeOption);
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
        { this.props.isLast && <div className="justify" style={{ float: 'right', width: '100%' }}>
          <div className="age">
            <div>
              <Select
                value={this.state.selectedNumOption}
                placeholder={this.state.selectedNumOption}
                styles={customStyles1}
                onChange={this.handleChange1}
                options={numOptions}
                selected
              />
            </div>
            <div>
              <Select
                value={this.state.selectedTimeOption}
                placeholder={this.state.selectedTimeOption}
                styles={customStyles2}
                onChange={this.handleChange2}
                options={timeOptions}
                selected
              />
            </div>
            <Button
              action={this.handleClick}
              type={'primary'}
              title={'Submit'}
              style={buttonStyle}
            />
          </div>
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
