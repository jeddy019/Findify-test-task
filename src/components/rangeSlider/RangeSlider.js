import React, { Component } from 'react';

class RangeSlider extends Component {
    state = { value: 250 }
  
  handleChange = (event) => this.setState({value: event.target.value});

  render() {
    return (
      <div>
        <label>
          <input 
            id="typeinp" 
            type="range" 
            min="1.0" max="500.0" 
            value={this.state.value} 
            onChange={this.handleChange}
            step="1"/>
          ${this.state.value}
        </label>
      </div>
    );
  }
}

export default RangeSlider;