import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import './styles.scss';

const options = {
  title: 'test',
  width: 455,
  height: 485,
  region: 'US',
  displayMode: 'markers',
  resolution: 'provinces',
  colorAxis: {
    colors: ['#1EB0BC', '#CD56C4']
  }
};

// const data = [['City', 'Count'], ['Baltimore MD', 94], ['Houston TX', 94], ['Rochester MN', 84], ['Boston MA', 78], ['Ann Arbor MI', 79], ['Stanford CA', 73], ['St. Louis MO', 73], ['San Francisco SF', 71], ['New York City NY UNITED STATES', 71], ['Boston MA', 70], ['Philadelphia PA', 70], ['New York City NY UNITED STATES', 68], ['Los Angeles CA', 50], ['New York City NY', 50], ['Pittsburgh PA', 50], ['Chicago IL', 50], ['Aurora CO', 50], ['Durham NC', 45], ['Seattle WA', 40], ['Philadelphia PA', 40], ['Chicago IL', 40], ['New Haven CT', 35], ['Indianapolis IN', 35], ['Cleveland OH', 25], ['Houston TX', 25], ['Los Angeles CA', 25], ['New York City NY UNITED STATES', 25]];
const alldata = [
  ["LATITUDE", "LONGITUDE", "City"]
];
const topdata = [['City', "Score"]];
let min = 100;
let max = 0;
class HospitalMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_data: []
    };
  }
  componentDidMount() {
    if (this.props.maptype === 'top') { this.getDataTop(); }
    if (this.props.maptype === 'all') { this.getDataAll(); }
    // if (this.props.message.get('sender') === 'client') { this.postData(); }

  }
  // this.props.message.get('')
  getDataTop() {
    axios
      .get('https://www.linksciences.com/getHospitalsMap.do?dkw=' + JSON.stringify(localStorage.getItem('diagnosis_key_word')) + '&mapDataSelected=Overall%20Score&mapDataScaleSelected=Top%20Hospitals&timpstamp=' + localStorage.getItem('TIMESTAMP'))
      .then((response) => {
        // data.push(['Baltimore MD', 94]);
        // console.log(response['cityCountList'])
        // alert(localStorage.getItem('TIMESTAMP'));
        for (let i = 0; i < response["data"]["cityCountList"].length; i++) {
          topdata.push([response["data"]["cityCountList"][i]["geoCity"], response["data"]["cityCountList"][i]["rankCount"]]);
          if (response["data"]["cityCountList"][i]["rankCount"]>max){
            max = response["data"]["cityCountList"][i]["rankCount"]
          }
          if (response["data"]["cityCountList"][i]["rankCount"]<min){
            min = response["data"]["cityCountList"][i]["rankCount"]
          }
        }
      })
      .catch((error) => { console.log(error); });
  }
  getDataAll() {
    axios
      .get('https://www.linksciences.com/getAllHospitalsLocations.do?dkw=' + JSON.stringify(localStorage.getItem('diagnosis_key_word')) + '&mapDataSelected=Overall%20Score&mapDataScaleSelected=Top%20Hospitals&timpstamp=' + localStorage.getItem('TIMESTAMP'))
      .then((response) => {
        localStorage.setItem('item_count', response["data"]["cityCountList"].length - 1);
        for (let i = 0; i < response["data"]["cityCountList"].length; i++) {
          if(response["data"]["cityCountList"][i]["latitude"]&&response["data"]["cityCountList"][i]["longitude"]&&response["data"]["cityCountList"][i]["geoCity"]&&response["data"]["cityCountList"][i]["rankCount"])
          // console.log([response["data"]["cityCountList"][i]["latitude"], response["data"]["cityCountList"][i]["longitude"], response["data"]["cityCountList"][i]["geoCity"], response["data"]["cityCountList"][i]["rankCount"]])
          {alldata.push([parseFloat(response["data"]["cityCountList"][i]["latitude"]), parseFloat(response["data"]["cityCountList"][i]["longitude"]), response["data"]["cityCountList"][i]["geoCity"]])}
        }
      })
      .catch((error) => { console.log(error); });
  }
  render() {
    if (this.props.maptype === 'top') {
      return (
        <div className="hospitalmap">
          <p> Below is the distribution of top medical institutions that provide best expertise for <b>{JSON.stringify(localStorage.getItem('diagnosis_key_word'))}</b> across the U.S. {topdata.length - 1} out of {alldata.length - 1} are seleted ranging from total score between {min} and {max} based on a variety of factors. </p>
          <Chart
            options={options}
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = topdata[selection[0].row + 1];
                  console.log("Selected : " + region);
                }
              }
            ]}
            chartType="GeoChart"
            mapsApiKey="AIzaSyChLxtQM2oKlrIfboGL3bhw0sQOKTmPsvQ"
            data={topdata}
          />
        </div>
      ); }
    else {
      return (
        <div className="hospitalmap">
          <p> Below is the distribution for medical institutions across the US in terms of <b>{JSON.stringify(localStorage.getItem('diagnosis_key_word'))}</b>, hitting a total of {alldata.length - 1} medical institutions.</p>

        <Chart
          options={options}
          chartType="GeoChart"
          mapsApiKey="AIzaSyChLxtQM2oKlrIfboGL3bhw0sQOKTmPsvQ"
          data={alldata}
        />
        </div>
      ); }
  }
}

HospitalMap.propTypes = {
  message: PROP_TYPES.HOSPITALMAP,
  maptype: PropTypes.string
};

export default HospitalMap;
