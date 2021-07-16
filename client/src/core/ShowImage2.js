import React from 'react';
import { API } from '../config';

 const ShowImage2 = ({ item, url }) => {
   return (
  <div className="product-img" style={{ height: "250px" }}>
    {/* <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className="mb-3"
      style={{
        objectFit: "contain",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      /> */}
      
    <img
      src={`${API}/${url}/photo2/${item._id}`}
      className="mb-3"
      style={{
        objectFit: "contain",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
    </div>
    
    
)
    }
export default ShowImage2
    



