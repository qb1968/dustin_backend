import React from 'react';
import { API } from '../config';
import SingleSource from './SingleSource'

const ShowImage = ({ item, url }) => (
  <div className="product-img" >
    <SingleSource
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className="mb-3"
     
      
    />
    

   
  </div>
);

export default ShowImage;
