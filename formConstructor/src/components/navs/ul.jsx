
import React from 'react';
import NavLi from './li';
import addons from 'react-addons';
import { changeShow } from '../../actions/const';
import Immutable from 'immutable';


let NavsContainer = React.createClass({

  initialItems(items) {
    let navItems = items.map((item,i) => {
        return (<NavLi dispatch={this.props.dispatch} item={item} key={item.key}  onClick={this.handleClick} />)
    });
    return navItems;
  },

  handleClick(key) {
    this.props.dispatch(changeShow(key))
  },

  render() {
    let navItems = this.initialItems(this.props.items);
    let {isNotFirst,show} = this.props;
    let isShow = (show == "true");
    isNotFirst = isNotFirst? true: false;
    let classes = addons.classSet({
      'nav': true,
      'nav-pills': true,
      'nav-stacked': true,
      'nav-ul2': isNotFirst,
      'nav-ul': !isNotFirst,
      'nav-ul-hide': !isShow
    })
    return (
      <ul className={classes}>
        {navItems}
      </ul>
    )
  }

});

export default NavsContainer;

