import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import 'fontsource-roboto';
import Copyright from './Copyright';
import Button from '@material-ui/core/Button';
import Email_Form from './emailForm';
import Pic from '../images/sw1 (2).png';
import Pic2 from '../images/sw2 (2).png';
import Pic3 from '../images/corner3 (2).png';
import Pic4 from '../images/corner4 (2).png';
import Pic5 from '../images/sm5 (2).png';
import Pic6 from '../images/sm6 (2).png';
import Pic7 from '../images/back8 (2).png';
import Pic8 from '../images/back9.png';
import Pic9 from '../images/b10 (2).png';
import Pic10 from '../images/b11.png';
import Pic11 from '../images/new1 (2).jpg';
import Pic12 from '../images/new2 (2).jpg';
import Pic13 from '../images/side14 (2).png';
import Pic14 from '../images/side15 (2).png';
import Pdf from '../images/comics.pdf'

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
      <div className="press">
        <h1>Pressing Services</h1>
        <p>
          Pressing removes Bends, bunched spine, dents, digital code squares,
          dirt, production lines, non color breaking spine ticks, staple push &
          improper pressing mistakes. Cleaning services Dry cleaning removes
          dirt, soil and putty from comics. WE SUBMIT TO CGC with Forms.Check
          out this before and after samples below.
        </p>
      </div>
      <div className="pics">
        <img className="pic" src={Pic} />
        <img className="pic" src={Pic2} />
        <img className="pic" src={Pic3} />
        <img className="pic" src={Pic4} />
        <img className="pic" src={Pic5} />
        <img className="pic" src={Pic6} />
        <img className="pic" src={Pic7} />
        <img className="pic" src={Pic8} />
      </div>
      <div className="pics2">
        <img className="pic" src={Pic9} />
        <img className="pic" src={Pic10} />
        <img className="pic" src={Pic11} />
        <img className="pic" src={Pic12} />
        <img className="pic" src={Pic13} />
        <img className="pic" src={Pic14} />
      </div>
      <div className="button">
        <h2>Interested download the form to get started</h2>
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          <Button variant="contained">Download Form</Button>
        </a>
      </div>

      <div className="contact">
        <Email_Form />
      </div>

      <div className="address">
        <h4>RaceCity Comics </h4>
        <h4>PO Box 784</h4>
        <h4>Harrisburg NC 28075</h4>
      </div>
      <Copyright />
    </Layout>
  );
};

export default Home;
