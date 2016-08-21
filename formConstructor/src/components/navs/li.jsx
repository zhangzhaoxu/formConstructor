

let str = 'import React from "react";import NavUl from "./ul";class NavLi extends React.Component{render(){const {item,onClick} = this.props;let isActive = (item.active === "true");if(item.children.items && item.children.items.length >0){return (
<li className={isActive? "nav-li active" : "nav-li"} role="presentation" onClick={(ev)=>{
						ev.stopPropagation();
						onClick(item.key)}}>
					<a href="#">{item.text}</a>
					<NavUl dispatch={this.props.dispatch} show={item.children.show} items={item.children.items} isNotFirst="true"/>
				</li>
			)
		} else {
			return (
				<li className={isActive? "nav-li active" : "nav-li"} role="presentation" onClick={(ev)=>{
						ev.stopPropagation();
						onClick(item.key)}}>
					<a href="#">{item.text}</a>
				</li>
			)
		}	
	}
}';

eval(str);

export default NavLi;