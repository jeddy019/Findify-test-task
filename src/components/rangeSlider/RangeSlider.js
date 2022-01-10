import React, { Component } from 'react';
import './RangeSlider.css';

class RangeSlider extends Component {
    state = { value: 3 }
  
  handleChange = (event) => this.setState({value: event.target.value});

  render() {
    return (
      <div>
         <input
        type="range"
        min="0"
        max="1000"
        onChange={this.handleChange}
        className="thumb thumb--zindex-3"
      />
          {this.state.value}
         <input
        type="range"
        min="0"
        max="1000"
        onChange={this.handleChange}
        className="thumb thumb--zindex-4"
      />
      {this.state.value}
        <div className="slider">
       <div className="slider__track" />
       <div className="slider__range" />
        </div>
      </div>
    );
  }
}

export default RangeSlider;