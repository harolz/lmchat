import React, { Component } from 'react';
import { PROP_TYPES } from 'constants';
import './styles.scss';
import Tabs from './Tabs';
import HospitalMap from '../HospitalMap';
import RankChart from '../RankChart';

const DKW = JSON.stringify(localStorage.getItem('diagnosis_key_word'));

class DataReport extends Component {

  constructor(props) {
    super(props);
    console.log(JSON.stringify(this.props.message));
    //{"type":"quickreply","text":"","hint":"Select an option...","quick_replies":[{"content_type":"text","title":"Me","payload":"/confirm_patient{\"patient_value\":\"oneself\"}"},{"content_type":"text","title":"Someone Else","payload":"/confirm_patient{\"patient_value\":\"others\"}"}],"sender":"response","showAvatar":false,"chosenReply":null}
    // const hint = this.props.message.get('hint');
  }


  render() {
    return (
      <div className="datareport">
        {/* <h1>Tabs Demo</h1> */}
        <Tabs>

          <div label="Map-ALL">
          Below is the geo-distribution of all hospitals for {DKW}
            <HospitalMap maptype="all" />
          </div>

          <div label="Map-TOP">
          Below is the geo-distribution of best hospitals for {DKW}
            <HospitalMap maptype="top" />
          </div>

          <div label="Rank">
          Below is the rank of best hospitals for {DKW}
            <RankChart />
          </div>

        </Tabs>
      </div>
    );
  }
}

DataReport.propTypes = {
  message: PROP_TYPES.DATAREPORT
};

export default DataReport;
