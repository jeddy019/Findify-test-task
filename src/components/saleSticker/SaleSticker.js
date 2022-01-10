import React from 'react';
import Tags from '../tags/Tags';
import './SaleSticker.css'

const SaleSticker = ({ data }) => {
	return (
	  <div>
	  <section className="whole1">
	 {Object.entries(data).filter(item => item[1].compare_at != null).map((item, i) => {
	 return (
	 <div key={i} className="card1">
	 <div className="image1">
	   <div>
	   <Tags item={item} />
	   </div>
	   <a rel="noreferrer" target="_blank" 
	 href={`${item[1].product_url}`}>
	 <img src={`${item[1].image_url}`} 
	 alt={item[1].title} />
	 </a>
	 </div>
	 <div className="info1">
	 <h4>{item[1].title}</h4>
	   <span style={{ textDecoration: 'line-through' }}>$ {item[1].compare_at}</span>
	   <span>$ {item[1].price}</span>
	 </div>
	 </div>
	    );
	})}
	 </section>
	  </div>
  );
}

export default SaleSticker;