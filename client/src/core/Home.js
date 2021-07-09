import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import 'fontsource-roboto';
import Copyright from './Copyright';
import Button from '@material-ui/core/Button';

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState([]);

  const loadProductsBySell = () => {
    getProducts('sold').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout title="Home page" description="Main" className="container-fluid">
      <Search />
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h2 className="mb-2">New Arrivals</h2>
          <div className="row">
            {productsByArrival.map((product, i) => (
              <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <Card product={product} />
              </div>
            ))}
          </div>

          {/* <h2 className='mb-2 mt-4'>Best Sellers</h2>
          <div className='row'>
            {productsBySell.map((product, i) => (
              <div key={i} className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                <Card product={product} />
              </div>
            ))}
          </div> */}
        </div>
        <div className="col-md-1"></div>
      </div>
      <div>
        <h1>Pressing Services</h1>
        <p>
          Pressing is the application of pressure and other techniques to
          improve the overall appearance, collectability, and saleability of a
          comic or magazine. Defects that can be reduced or eliminated entirely
          include: dents caused by a reader's finger and fingernails; bends and
          creases that do not break the cover's color, spine roll due to
          storage, reading, or simple aging; warping and waving caused by
          moisture (this can cause an appearance that looks like a ripple-cut
          potato chip).
        </p>
        <Button variant="contained">Download Form</Button>
      </div>
      <div>
        <h1>Contact Info</h1>
      </div>

      <Copyright />
    </Layout>
  );
};

export default Home;
