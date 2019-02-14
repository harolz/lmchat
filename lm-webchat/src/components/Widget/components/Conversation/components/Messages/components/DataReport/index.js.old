import { BrowserRouter } from "react-router-dom";
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { PROP_TYPES } from 'constants';
import './styles.scss';
import HospitalMap from '../HospitalMap';
import RankChart from '../RankChart';

class DataReport extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="datareport">
            <header className="display_type">
              <Link className="link1" to="/">
                地图分布
              </Link>
              <Link className="link2" to="/r">
                医院排名
              </Link>
            </header>
            <main>
              <Route exact path="/" component={HospitalMap} />
              <Route exact path="/r" component={RankChart} />
            </main>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

DataReport.propTypes = {
  message: PROP_TYPES.DATAREPORT
};

export default DataReport;
