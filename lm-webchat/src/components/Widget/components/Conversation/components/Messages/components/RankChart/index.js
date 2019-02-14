import React from 'react';
import { PROP_TYPES } from 'constants';
import Chart from 'react-google-charts';
import axios from 'axios';
import './styles.scss';
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram

const data = [
  ['Rank', 'Hospital', 'Location', 'Expertise']
];
const options = {
  title: 'Company Performance',
  curveType: 'function',
  legend: { position: 'bottom' },
  pageSize: 7,
  width: 455,
  height: 485
};
class RankChart extends React.Component {

  componentDidMount() {
    // if (this.props.message.get('sender') === 'client') { this.postData(); }
    console.log(JSON.stringify(this.props.message));
    this.getData();
  }
  // this.props.message.get('')
  getData() {
    axios
      .get('https://www.linksciences.com/getHospitalsMap.do?dkw=' + JSON.stringify(localStorage.getItem('diagnosis_key_word')) + '&mapDataSelected=Overall%20Score&mapDataScaleSelected=Top%20Hospitals&timpstamp=' + localStorage.getItem('TIMESTAMP'))
      .then((response) => {
        for (let i = 1; i < 11; i++) {
          data.push([i, response["data"]["cityCountList"][i-1]["rankString"], response["data"]["cityCountList"][i-1]["geoCity"], response["data"]["cityCountList"][i-1]["rankCount"]]);
        }
      })
      .catch((error) => { console.log(error); });
  }
  render() {
    // const data = this.props.hospitals;
    // const dkw = this.props.message.get('dkw');
    return (
      <div className="rankchart">
        <Chart
          chartType="Table"
          width="455px"
          height="485px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

RankChart.propTypes = {
  message: PROP_TYPES.RANKCHART
};
export default RankChart;
