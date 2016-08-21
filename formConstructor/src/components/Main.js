

import React from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import RightPages from './rightPages';


class Main extends React.Component {


  render() {

    return (
      <div className={'content'}>
        <Header />
        <div className="container my-container">
          <div className="row my-row">
            <LeftNav dispatch={this.props.dispatch} Items={this.props.Items} show={this.props.show}/>
            <RightPages />
          </div>
        </div>
      </div>
    );
  }
}


export default Main;
