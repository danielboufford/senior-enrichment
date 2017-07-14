import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getAllCampusesThunk } from '../reducers/campuses';
import { getAllStudentsThunk } from '../reducers/students';
import Campuses from './Campuses';
import CampusDetail from './CampusDetail';
import Students from './Students';
import StudentDetail from './StudentDetail';
import Header from './Header'

class Root extends Component {

  componentDidMount() {
    this.props.getAllCampusesThunk();
    this.props.getAllStudentsThunk();
}
  render() {
    return (
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Campuses} />
              <Route exact path='/students' component={Students} />
              <Route path='/students/:studentId' component={StudentDetail} />
              <Route exact path='/campuses' component={Campuses} />
              <Route path='/campuses/:campusId' component={CampusDetail} />
            </Switch>
          </div>
        </Router>
    )
  }
}

/*----------CONTAINER----------- */

const mapDispatch = { getAllCampusesThunk, getAllStudentsThunk }

export default connect(null, mapDispatch)(Root);
