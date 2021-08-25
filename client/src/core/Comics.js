import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { Route } from "react-router-dom";
import Card from './Card';
import {
  getCategories,
  getFilteredProducts1,
  getFilteredProducts,
} from "./apiCore";

import RadioBox from './RadioBox';
import { makeStyles } from '@material-ui/core/styles';

import Search from './Search';
import { prices } from './fixedPrices';
import Copyright from './Copyright';
import Navigation from "./Nav";


const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price:[] },
  });
  const [myFilters1, setMyFilters1] = useState({
    filters: { category: ["60e5a122a15ee5492460861b"], price: [] },
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(5000);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts1(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };
  const loadFilteredResults1 = (newFilters) => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    getFilteredProducts1(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const useStyles = makeStyles((theme) => ({
    btn: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 20px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  }));

  const classes = useStyles();

 

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);
  

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === 'price') {
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
  const handleFilters1 = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters1 };
    newFilters.filters[filterBy] = filters;

    if (filterBy === 'price') {
      let priceValues = handlePrice1(filters);
      newFilters.filters[filterBy] = priceValues;
      
    }
    loadFilteredResults1(myFilters1.filters);
    setMyFilters1(newFilters);
  };

  const handlePrice1 = (value) => {
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
    <Layout
      title="Shop "
      description="Search and find collectibles"
      className="container-fluid"
    >
      <Navigation />
      <Route render={({ history }) => <Search history={history} />}/>
      <div className="row">
        <div className="col-md-2">
          {/* <h4>Filter by price range</h4>
          <div>
            <RadioBox
              
              prices={prices}
              handleFilters={(filters) => handleFilters1(filters, "price")}
              
            />
          </div> */}
        </div>

        <div className="col-md-10">
          <h2 className="mb-2">Comics</h2>
          <div className="row">
            {filteredResults.map((product, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <Card product={product} />
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
      <Copyright />
    </Layout>
  );
};

export default Shop;