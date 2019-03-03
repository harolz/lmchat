import React, { Component } from 'react';
import AsyncSelect from './select';
import axios from 'axios';
import { PROP_TYPES } from 'constants';
import { emitUserMessage, toggleInputDisabled, addUserMessage, updateDkw } from 'actions';
import { connect } from 'react-redux';
import Button from '../Medication/components/Button';
import ReactDOM from 'react-dom';
import './styles.scss';


const SEARCH_URL = 'https://www.linksciences.com/getAutoCompleteDkws.do?';
const QUERY = 'dkw=';
const debounce = require('debounce-promise');
// Trying to fix according to answer

// from the docs

const buttonStyle = {
  margin: '8px 8px 8px 8px'
};

class DkwComplete extends Component {

  constructor(props, context) {
    super(props, context);
    // Set initial State
    this.state = {
      selectedTitle: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }


   searchTitles = movieTitle => {
    console.log('searching for', movieTitle)
    let searchTerm = movieTitle

    // FIX:
    //The default set of options to show before the user
    // starts searching. When set to true, the results for
    // loadOptions('') will be autoloaded.

    if (!movieTitle || movieTitle.length <= 3) {
      // searchTerm = 'alien'
      return;
    }

    const urlRequest = `${SEARCH_URL}${QUERY}${searchTerm}`
    const newRequest = axios.get(urlRequest)

    if (newRequest) {
      // new promise: pending
      // console.log(newRequest);
      this.scrollToBottom();
      return newRequest.then(response => {
        // promise resolved : now I have the data, do a filter
        const compare = response.data.filter(i =>
          i.toLowerCase()
        );
        // reurning the label for react-select baed on the title
        this.scrollToBottom();
        return compare.map(film => ({
          label: film,
          value: 0
        }))
      })
    }
   }

  debouncedsearchTitles=debounce(this.searchTitles, 500)


  handleSubmit() {
    const DKW = this.state.selectedTitle.label;
    localStorage.setItem('diagnosis_key_word', `${DKW}`);
    // const payload = '/confirm_dkw{\"dkw\":\"Pancreatic Ducts\"}'
    const payload = '/confirm_dkw{\"dkw\":' + '\"' + DKW + '\"}';
    axios
    .get('https://www.linksciences.com/getTopHospitals.do?dkw=' + DKW)
    .then((response) => {
      localStorage.setItem('TIMESTAMP', response.data.timestamp);
    })
    .catch((error) => { console.log(error); });
    // alert(localStorage.getItem("TIMESTAMPE"));
    this.props.submitDKW(payload, DKW);
  }
  render() {
    return (
      <div className="client-side" id="dkwc">
        { this.props.isLast && <div className="dkwcomplete" style={{ float: 'right', width: '100%' }}>
          <div className="form-group">
            <label htmlFor={'selectedTitle'} className="form-label">{'Diagnosis: '}</label>
            <AsyncSelect
              cacheOptions
              defaultOptions
              onMenuScrollToBottom
              autoFocus
              value={this.state.selectedTitle}
              loadOptions={this.debouncedsearchTitles}
              menuShouldScrollIntoView
              placeholder="Type in your diagnosis"
              onChange={(property, value) => {
                this.setState({ selectedTitle: property });
              }}
              onFocus={() => { this.scrollToBottom(); }}
            />
          </div>
          <Button
            action={this.handleSubmit}
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
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // inputState: state.behavior.get('disabledInput'),
  DKW: state.behavior.get('DKW')
});
  
const mapDispatchToProps = dispatch => ({
    toggleInputDisabled: _ => dispatch(toggleInputDisabled()),
    submitDKW: (payload, DKW) => {
      dispatch(emitUserMessage(payload));
      dispatch(addUserMessage(DKW));
      dispatch(updateDkw(DKW));
    }
});

DkwComplete.propTypes = {
  message: PROP_TYPES.DKWCOMPLETE
  };

export default connect(mapStateToProps, mapDispatchToProps)(DkwComplete);
