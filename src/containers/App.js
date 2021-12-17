import React, { Component } from 'react';
import Filters from '../components/Filters';
import './App.css';
import './Card.css'

class App extends Component {
state = { data: [], filter: [], loading: true };

componentDidMount() {
  const handleError = response => {
   if (!response.ok) { 
      throw Error(response.statusText);
   } else {
      return response.json();
   }
};
 fetch('https://findify-assets.s3.amazonaws.com/test-task/test_response.json')
  .then(handleError)
  .then(data => { 
    this.setState({ data: data.items, filter: data.facets, loading: false });
   }).catch(console.log);
}

  render() {
    const { data, loading, filter } = this.state;
    const productEntries = Object.entries(data).map((item, i) => {
     return (
     <div key={i} className="card">
     <a rel="noreferrer" target="_blank" 
     href={`${item[1].product_url}`}>
     <img src={`${item[1].image_url}`} 
     alt={item[1].title} />
     </a>
     <h4>{item[1].title}</h4>
     <p className="price">$ {item[1].price}</p>
     </div>
        );
    });

    if(loading) {
     return <h4>Loading...</h4>
    }
    return (
    <div>
    <h3>SEARCH RESULTS</h3>
    <Filters facets={filter} />
    <div className="App">
      {productEntries}
     </div>
    </div>
    );
  } 
    }    

export default App;