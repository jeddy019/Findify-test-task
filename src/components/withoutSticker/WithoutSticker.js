import React from 'react';
import './WithoutSticker.css'

const WithoutSticker = ({ data }) => {
	return (
	  <section className="whole">
	 {Object.entries(data).filter(item => item[1].compare_at === null).map((item, i) => {
	 return (
	 <div key={i} className="card">
	 <div className="image">
	 <a rel="noreferrer" target="_blank" 
	 href={`${item[1].product_url}`}>
	 <img src={`${item[1].image_url}`} 
	 alt={item[1].title} />
	 </a>
	 </div>
	 <div className="info">
	 <h4>{item[1].title}</h4>
	 <h5>$ {item[1].price}</h5>
	 </div>
	 </div>
	    );
	})}
	 </section>
  );
}

export default WithoutSticker;