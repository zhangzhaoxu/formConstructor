require('styles/App.less');

import React from 'react';
import {connect} from 'react-redux';
import Main from '../components/Main';


class App extends React.Component{
  render() {
    return (
      <div>
        <Main dispatch={this.props.dispatch} Items={this.props.items} show={this.props.show}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
	const {handleItems} = state;
	// 此处可进行数据默认值处理，暂不处理
	return handleItems;
}

export default connect(mapStateToProps)(App);


