import React from 'react';
import './Tags.css'

const Tags = ({ item }) => {
  return (
  	<div>
	<span className="tags">
	   <span className="price-tag">
	   <a rel="noreferrer" target="_blank" 
	   href={`${item[1].product_url}`}>
	   {Math.ceil((item[1].compare_at - item[1].price) / item[1].compare_at * 100)} %  OFF
	   </a>
	   </span>
	   <span><a rel="noreferrer" target="_blank" 
	   href={`${item[1].product_url}`}>SALE</a></span>
	</span>	
	</div>
 );
}

export default Tags;