import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Campuses extends Component {

  render() {
    console.log(this.props)

    return (
      <div>
        <h1>Campuses List (Click for Details):</h1>
        {this.props.campuses.map(campus => {
          return (
            <Link to={`/campuses/${campus.id}`}>
              <div key={campus.id}>
                <h4>{campus.name}</h4>
                <img src={campus.image} width="300" height="300"/>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

/*----------CONTAINER----------- */

const mapState = state => ({campuses: state.campusesReducer.campuses});
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Campuses);
