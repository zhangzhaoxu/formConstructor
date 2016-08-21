import React from 'react';
import NavsContainer from './navs/index';
import {connect} from 'react-redux';

export default class LeftNav extends React.Component{
  render() {
    return (
      <div className="col-md-3 leftNav">
        <NavsContainer dispatch={this.props.dispatch} Items={this.props.Items} show={this.props.show}/>
      </div>
    )
  }
}


