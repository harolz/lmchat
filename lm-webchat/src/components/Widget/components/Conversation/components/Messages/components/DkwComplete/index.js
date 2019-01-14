// Import the Autocomplete Component
import { PROP_TYPES } from 'constants';
import Autocomplete from 'react-autocomplete';
import { debounce } from 'throttle-debounce';
import React from 'react';
import { connect } from 'react-redux';
import { emitUserMessage, toggleInputDisabled, addUserMessage } from 'actions';
import './styles.scss';


class DkwComplete extends React.Component {
  constructor(props, context) {
    super(props, context);
    // Set initial State
    this.state = {
        // Current value of the select field
      value: '',
            // Data that will be rendered in the autocomplete
            // As it is asynchronous, it is initially empty
      autocompleteData: [] };

        // Bind `this` context to functions of the class
    this.retrieveDataAsynchronouslyDebounced = debounce(500, this.retrieveDataAsynchronously);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.retrieveDataAsynchronouslyDebounced = this.retrieveDataAsynchronouslyDebounced.bind(this);
    if (!this.props.inputState) {
      this.props.toggleInputDisabled();
      // this.props.changeInputFieldHint(hint);
    }
  }

    /**
     * Callback triggered when the user types in the autocomplete field
     * 
     * @param {Event} e JavaScript Event
     * @return {Event} Event of JavaScript can be used as usual.
     */
  onChange(e) {
    this.setState({
      value: e.target.value
    });

        /**
         * Handle the remote request with the current text !
         */
    if (e.target.value.length > 1) {
      // console.log(e.target.value);
      this.retrieveDataAsynchronouslyDebounced(e.target.value);
    }
    // console.log('The Input Text has changed to ', e.target.value);
  }
      /**
     * Define which property of the autocomplete source will be show to the user.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @return {String} val
     */
    /**
     * Callback triggered when the autocomplete input changes.
     * 
     * @param {Object} val Value returned by the getItemValue function.
     * @return {Nothing} No value is returned
     */
  onSelect(val) {
    this.setState({
      value: val
    });
    console.log("Option from 'database' selected : ", val);
  }
  getItemValue(item) {
        // You can obviously only return the Label or the component you need to show
        // In this case we are going to show the value and the label that shows in the input
        // something like "1 - Microsoft"
    // console.log(`${item}!!!`);
    return `${item}`;
    // return `${item.value}`;
  }

    /**
     * Updates the state of the autocomplete data with the remote data obtained via AJAX.
     * 
     * @param {String} searchText content of the input that will filter the autocomplete data.
     * @return {Nothing} The state is updated but no value is returned
     */
  retrieveDataAsynchronously(searchText) {
    const _this = this;

        // Url of your website that process the data and returns a
    const url = `https://www.linksciences.com/getAutoCompleteDkws.do?dkw=${searchText}`;
        // https://www.linksciences.com/getAutoCompleteDkws.do?dkw=pancreatic
        // Configure a basic AJAX request to your server side API
        // that returns the data according to the sent text
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
      const status = xhr.status;
      if (status === 200) {
                // In this example we expects from the server data with the structure of:
                // [
                //    {
                //        label: "Some Text",
                //        value: 1,
                //    },
                //    {
                //        label: "Some Other Text",
                //        value: 1,
                //    },
                // ]
                // But you can obviously change the render data :)

                // Update the state with the remote data and that's it !
        _this.setState({
          autocompleteData: xhr.response
        });

                // Show response of your server in the console
        console.log(xhr.response);
      } else {
        console.error('Cannot load data from remote source');
      }
    };

    xhr.send();
  }

    /**
     * Define the markup of every rendered item of the autocomplete.
     * 
     * @param {Object} item Single object from the data that can be shown inside the autocomplete
     * @param {Boolean} isHighlighted declares wheter the item has been highlighted or not.
     * @return {Markup} Component
     */
  handleClick() {
    const DKW = this.state.value;
    const payload = '/comfirm_dkw';
    this.props.submitDKW(payload, DKW);
  }
  renderItem(item, isHighlighted) {
    return (
      <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
        {item}
      </div>
    );
  }
  render() {
    // const sender = this.props.message.get('sender');
    return (
      <div className="client-side">
        { this.props.isLast && <div className="dkwcomplete">
          <div className="dkwcomplete-title">
            { this.props.message.get('title') }
          </div>
          <div>
            <Autocomplete
              getItemValue={this.getItemValue}
              items={this.state.autocompleteData}
              renderItem={this.renderItem}
              value={this.state.value}
              onChange={this.onChange}
              onSelect={this.onSelect}
            />
          </div>
          <input type="submit" value="提交" onClick={this.handleClick} />
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
  submitDKW: (payload, DKW) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(DKW));
  }
});

DkwComplete.propTypes = {
  message: PROP_TYPES.DKWCOMPLETE
};

export default connect(mapStateToProps, mapDispatchToProps)(DkwComplete);
