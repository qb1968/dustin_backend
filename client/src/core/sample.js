import React from 'react';
import { useState,useEffect } from 'react';
import Layout from "./Layout";
import Search from "./Search";
import Card from "./Card";
import { getCategories, getFilteredProducts1 } from "./apiCore";
import Checkbox from "./Checkbox";
import { prices } from "./fixedPrices";

const Sample = () => {
const [myFilters, setMyFilters] = useState({
  filters: { category: ["60e5a122a15ee5492460861b"] },
});
    
  const [category, setCategory] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(5000);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [checked, setChecked] = useState(true);

  const init = () => {
     getCategories().then((data) => {
       if (data.error) {
         setError(data.error);
       } else {
         setCategory(data);
       }
     });
    };

     const loadFilteredResults = (newFilters) => {
       console.log(newFilters);
       getFilteredProducts1(skip, limit, newFilters).then((data) => {
         if (data.error) {
           setError(data.error);
         } else {
           setFilteredResults(data.data);
           setSize(data.size);
           setSkip(0);
         }
         console.log(data);
       });
    };
    
     useEffect(() => {
       init();
         
         loadFilteredResults(skip, limit, myFilters.filters);
         console.log(myFilters.filters)
     }, []);
    
    
     const handleFilters = (filters, filterBy) => {
       console.log("SHOP", filters, filterBy);
       const newFilters = { ...myFilters };
       newFilters.filters[filterBy] = filters;

       if (filterBy === "price") {
         let priceValues = handlePrice(filters);
         newFilters.filters[filterBy] = priceValues;
       }
       loadFilteredResults(myFilters.filters);
       setMyFilters(newFilters);
     };

     const handlePrice = (value) => {
       const data = prices;
       let array = [];

       for (let key in data) {
         if (data[key]._id === parseInt(value)) {
           array = data[key].array;
         }
       }
       return array;
     };
    
   
    
    return (
      <Layout>
        <Search />
        <div className="row">
          <div className="col-md-3">
           
          </div>
          <div className="col-md-9">
            <h2 className="mb-2">Comics</h2>
                    <div className="row">
                      {handleFilters}
              {filteredResults.map((product, i) => (
                <div key={i} className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                  <Card product={product} />
                </div>
              ))}
                        
            </div>
            <hr />
          </div>
        </div>
      </Layout>
    );
}

export default Sample;
