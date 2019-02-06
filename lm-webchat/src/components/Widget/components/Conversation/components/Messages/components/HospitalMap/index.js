import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import './styles.scss';

const options = {
  title: 'test',
  height: 500,
  region: 'US',
  displayMode: 'markers',
  resolution: 'provinces',
  colorAxis: {
    colors: ['#1EB0BC', '#CD56C4']
  }
};

// const data = [['City', 'Count'], ['Baltimore MD', 94], ['Houston TX', 94], ['Rochester MN', 84], ['Boston MA', 78], ['Ann Arbor MI', 79], ['Stanford CA', 73], ['St. Louis MO', 73], ['San Francisco SF', 71], ['New York City NY UNITED STATES', 71], ['Boston MA', 70], ['Philadelphia PA', 70], ['New York City NY UNITED STATES', 68], ['Los Angeles CA', 50], ['New York City NY', 50], ['Pittsburgh PA', 50], ['Chicago IL', 50], ['Aurora CO', 50], ['Durham NC', 45], ['Seattle WA', 40], ['Philadelphia PA', 40], ['Chicago IL', 40], ['New Haven CT', 35], ['Indianapolis IN', 35], ['Cleveland OH', 25], ['Houston TX', 25], ['Los Angeles CA', 25], ['New York City NY UNITED STATES', 25]];
const data = [['City', 'Count']];
class HospitalMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_data: []
    };
  }
  componentDidMount() {
    // if (this.props.message.get('sender') === 'client') { this.postData(); }
    this.getData();
  }
  // this.props.message.get('')
  getData() {
    axios
      .get('https://www.linksciences.com/getHospitalsMap.do?dkw=' + JSON.stringify(localStorage.getItem('diagnosis_key_word')) + '&mapDataSelected=Overall%20Score&mapDataScaleSelected=Top%20Hospitals&timpstamp=' + localStorage.getItem('TIMESTAMP'))
      .then((response) => {
        // data.push(['Baltimore MD', 94]);
        // console.log(response['cityCountList'])
        // alert(localStorage.getItem('TIMESTAMP'));
        for (let i = 0; i < response["data"]["cityCountList"].length; i++) {
          // loop through your data
          data.push([response["data"]["cityCountList"][i]["geoCity"], response["data"]["cityCountList"][i]["rankCount"]]);
        }
      })
      .catch((error) => { console.log(error); });
  }
  render() {
    return (
        <div className="hospitalmap">
          <Chart
            options={options}
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data[selection[0].row + 1];
                  console.log("Selected : " + region);
                }
              }
            ]}
            chartType="GeoChart"
            mapsApiKey="AIzaSyChLxtQM2oKlrIfboGL3bhw0sQOKTmPsvQ"
            data={data}
          />
        </div>
    );
  }
}

HospitalMap.propTypes = {
  message: PROP_TYPES.HOSPITALMAP
};

export default HospitalMap;
