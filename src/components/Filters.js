import React, { Component } from 'react';
import './Filters.css'

class Filters extends Component {
 handleClick = () => {
  const collapse = document.getElementsByClassName("collapsible");
  let i;
  for (i = 0; i < collapse.length; i++) {
  collapse[i].onclick = function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
 }

render() {
return (
	<div>
<h5>FILTERS</h5>
<button type="button" className="active collapsible" onClick={this.handleClick}>Material</button>
<div className="content"><br />
  <input type="checkbox" />
  <label>{this.props.facets[0].values[0].value}</label> <span className="count">({this.props.facets[0].values[0].count})</span><br />
</div>
<button type="button" className="active collapsible" onClick={this.handleClick}>Color</button>
<div className="content">
  <input type="checkbox" />
  <label>{this.props.facets[1].values[0].value}</label> <span className="count">({this.props.facets[1].values[0].count})</span><br />
</div>
<button type="button" className="active collapsible" onClick={this.handleClick}>Price</button>
<div className="content">
<input type="checkbox" />
  <label>{this.props.facets[2].values[0].value}</label> <span className="count">({this.props.facets[2].values[0].count})</span><br />
</div>
</div>

);
}
}

export default Filters;