import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default function Header() {
    return (
        <div>
          <Link to="/"><button>Home</button></Link>
          <Link to="/campuses"><button>Campuses</button></Link>
          <Link to="/students"><button>Students</button></Link>
          <hr />
        </div>
    )
}
