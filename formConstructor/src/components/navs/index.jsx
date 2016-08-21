
import React from 'react';
import NavUl from './ul';
import NavLi from './li';


let NavsContainer = React.createClass({

  render() {
    return (
      <NavUl dispatch={this.props.dispatch} show={this.props.show} items={this.props.Items}/>
    )
  }

});

export default NavsContainer;

