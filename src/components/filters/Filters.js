import React, { Component } from 'react';
import './Filters.css'

class Filters extends Component {
	constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.myRef = React.createRef();
  }

 render() {
return (
<div className="collapsible">
	<button className="toggle" onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
	{this.props.facets[0].name}</button>
	<div className="content-parent" ref={this.myRef} 
	style={ this.state.isOpen ? {height: this.myRef.current.scrollHeight + "px"} : {height: "0px"} }>
	<div className="content">{this.props.children}</div>
	</div>
</div>	
);
}	
}

export default Filters