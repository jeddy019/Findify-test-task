import React, { Component } from 'react';
import SaleSticker from '../components/saleSticker/SaleSticker';
import WithoutSticker from '../components/withoutSticker/WithoutSticker';
import Filters from '../components/filters/Filters';
import RangeSlider from '../components/rangeSlider/RangeSlider';
import './App.css';


class App extends Component {
state = { 
data: [], filter: [], color: [], 
loading: true, showMore: false, expand: false, 
isChecked: Array(14).fill(false), colorChecked: Array(14).fill(false)
 };
 
 componentDidMount() {
 Promise.all([ 
   fetch('https://findify-assets.s3.amazonaws.com/test-task/test_response.json'),
   fetch('https://findify-assets.s3.amazonaws.com/test-task/test_color_mapping.json')
   ]).then(responses => {
    return Promise.all(responses.map(response => {
    if (!response.ok) { 
    throw Error(response.statusText);
    } else {
    return response.json();
     }
    }));
   }).then(data => {
   this.setState({ data: data[0].items, filter: data[0].facets, color: data[1], loading: false });
   }).catch(console.log)
    }

 handleCheck = position => {
 const checkedState = this.state.isChecked.map((item, index) =>
    index === position ? !item : item
);
 this.setState({ isChecked: checkedState });
}

handleColorCheck = pos => {
 const checkedColor = this.state.colorChecked.map((col, i) =>
    i === pos ? !col : col
);
 this.setState({ colorChecked: checkedColor });
}

  render() {
  const { data, loading, filter, showMore, expand, color, isChecked, colorChecked } = this.state;

    if(loading) {
     return <h4>Loading...</h4>
    }
    return (
    <div>
     <h3>SEARCH RESULTS</h3>

      <Filters facets={filter}>
      <div className="container">
      <ul className="items-list">
      {Object.entries(filter).reduce((acc, num) => {
      if (num[1].type === "text") acc.push(num[1].values)
       return acc;
      }, []).map((val, i) => {
        const numberOfItems = showMore ? val.length : 6
        return val.slice(0, numberOfItems).map((item, index) => {
        return (
            <li key={index}>
              <div className="lists">
                <div>
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked[index]}
                    onChange={() => this.handleCheck(index)}
                    name={Object.entries(item)[0][1]}
                    value={Object.entries(item)[0][1]}
                  />
                  <svg
                  width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="0.5" y="0.5" width="19" height="19" rx="0.5" stroke="#121212"/>
                  <path d="M8.27042 14C8.11735 14 7.9643 13.9433 7.8476 13.83L4.17521 10.2646C3.9416 10.0378 3.9416 9.67005 4.17521 9.44333C4.40873 9.21662 4.78741 9.21662 5.02104 9.44333L8.27042 12.5982L14.9789 6.17004C15.2126 5.94332 15.5912 5.94332 15.8247 6.17004C16.0584 6.39675 16.0584 6.76447 15.8247 6.99128L8.69324 13.8301C8.57649 13.9434 8.42343 14 8.27042 14Z" 
                  fill={isChecked[index] ? "black" : "none"} />
                </svg>
                </label>
                 <label>{Object.entries(item)[0][1]}</label>
                </div>
                <div>({Object.entries(item)[1][1]})</div>
              </div>
            </li>
          );
    })
  })}
      </ul>
      <button onClick={() => this.setState({ showMore: !showMore })}>
       {showMore ? "Less": "More"}
      </button>
    </div>
      </Filters>

 <Filters facets={filter}>
      <div className="container">
      <ul className="items-list">
      {Object.entries(filter).reduce((acc, num) => {
      if (num[1].type === "color") acc.push(num[1].values)
       return acc;
      }, []).map((val, i) => {
        const numberOfColors = expand ? val.length : 6
        return val.slice(0, numberOfColors).map((col, i) => {
        return (
            <li key={i}>
              <div className="lists">
                <div>
                <label>
                  <input
                    type="checkbox"
                    checked={colorChecked[i]}
                    onChange={() => this.handleColorCheck(i)}
                    name={Object.entries(col)[0][1]}
                    value={Object.entries(col)[0][1]}
                  />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9.5" fill="white" stroke="black"/>
                  </svg>

                  <svg
                  width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="0.5" y="0.5" width="19" height="19" rx="0.5" stroke="#121212"/>
                  <path d="M8.27042 14C8.11735 14 7.9643 13.9433 7.8476 13.83L4.17521 10.2646C3.9416 10.0378 3.9416 9.67005 4.17521 9.44333C4.40873 9.21662 4.78741 9.21662 5.02104 9.44333L8.27042 12.5982L14.9789 6.17004C15.2126 5.94332 15.5912 5.94332 15.8247 6.17004C16.0584 6.39675 16.0584 6.76447 15.8247 6.99128L8.69324 13.8301C8.57649 13.9434 8.42343 14 8.27042 14Z" 
                  fill={colorChecked[i] ? "black" : "none"} />
                </svg>
                </label>
                 <label>{Object.entries(col)[0][1]}</label>
                </div>
                <div>({Object.entries(col)[1][1]})</div>
              </div>
            </li>
          );
    })
  })}
      </ul>
      <button onClick={() => this.setState({ expand: !expand })}>
       {expand ? "Less": "More"}
      </button>
    </div>
      </Filters>

      <Filters facets={filter}>
      <RangeSlider />
      </Filters>

      <section>
      <WithoutSticker data={data} />
      <SaleSticker data={data} />
      </section>
    </div>
    );
  } 
    }    

export default App;