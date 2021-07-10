import React from 'react';
import Menu from './Menu';
import '../styles.css';
import Pic from '../images/Dustin.jpg'

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => (
  <div>
    <Menu />
    
    <div className="jumbotron mt-1">
      
      
      <img className="pic1" src={Pic}/>
      
      
    </div>
    
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
