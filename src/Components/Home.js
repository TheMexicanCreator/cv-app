import React, { Component } from 'react';
var Navbar = require('./Navbar');
var Profile = require('./Profile');
var About = require('./About');
var Skills = require('./Skills');
var Experience = require('./Experience');
var Education = require('./Education');
var Portfolio = require('./Portfolios');

export default class Home extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col s12 m4 l3">
                    <Profile />
                </div>
                <div className="col s12 m8 l9">
                    <About />
                    <Skills />
                    <Experience />
                    <Education />
                    <Portfolio />
                </div>
            </div>
        </div>
      </section>
    )
  }
}
