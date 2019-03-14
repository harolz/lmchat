import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PROP_TYPES } from 'constants';
import './styles.scss';
import HospitalMap from '../HospitalMap';
import RankChart from '../RankChart';
import "react-tabs/style/react-tabs.css";
import { connect } from 'react-redux';

class DataReport extends Component {

  constructor(props) {
    super(props);
    console.log(JSON.stringify(this.props.message));
    //{"type":"quickreply","text":"","hint":"Select an option...","quick_replies":[{"content_type":"text","title":"Me","payload":"/confirm_patient{\"patient_value\":\"oneself\"}"},{"content_type":"text","title":"Someone Else","payload":"/confirm_patient{\"patient_value\":\"others\"}"}],"sender":"response","showAvatar":false,"chosenReply":null}
    // const hint = this.props.message.get('hint');
  }


  render() {
    const DKW = this.props.DKW;
    const HOSPITAL_COUNT = this.props.HOSPITAL_COUNT;
    return (
      <div className="datareport">
        <p>Your hospital analysis for <b>{DKW}</b> has been finished. Below is the preview of your data report.</p>
        <Tabs forceRenderTabPanel>
          <TabList>
            <Tab>Map-TOP</Tab>
            <Tab>Map-ALL</Tab>
            <Tab>Ranking</Tab>
          </TabList>
          <TabPanel>
            <HospitalMap maptype="top" dkw={DKW} />
          </TabPanel>
          <TabPanel>
            <HospitalMap maptype="all" dkw={DKW}/>
          </TabPanel>
          <TabPanel>
            <RankChart />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

DataReport.propTypes = {
  message: PROP_TYPES.DATAREPORT
};

const mapStateToProps = state => ({
  DKW: state.behavior.get('DKW'),
  HOSPITAL_COUNT: state.behavior.get('HOSPITAL_COUNT')
});


export default connect(mapStateToProps)(DataReport);
