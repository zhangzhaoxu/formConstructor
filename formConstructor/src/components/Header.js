require('normalize.css/normalize.css');

import React,{Component} from 'react';

let showjoyLogo = require('../images/showjoy-logo.png');

export default class Header extends React.Component{
	render() {
		return (
      <nav className="navbar navbar-inverse header">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img className="joyLogo" alt="Brand" src={showjoyLogo}/>
            </a>
          </div>
        </div>
      </nav>
		)
	}
}
