import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './core/Comics';
import Toys from './core/Toys'
import Product from './core/Product';
import Cart from './core/Cart';
import Orders from './admin/Orders';
import Profile from './user/Profile';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import NotFound from './core/NotFound';
import TCG from './core/TCG';
import Statues from './core/Statues';
import SportsCards from './core/SportsCards';
import PedalCars from './core/PedalCars';
import VintageAd from './core/VintageAd';
import Sample from './core/sample';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        
        <Route path="/comics" component={Shop} exact />
        <Route path="/toys" component={Toys} exact />
        <Route path="/tcg" component={TCG} exact />
        <Route path="/statues" component={Statues} exact />
        <Route path="/sportscards" component={SportsCards} exact />
        <Route path="/pedalcars" component={PedalCars} exact />
        <Route path="/vintagead" component={VintageAd} exact />

        <Route path="/signin" component={Signin} exact />
        <Route path="/signup" component={Signup} exact />
        <PrivateRoute path="/user/dashboard" component={Dashboard} exact />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} exact />
        <AdminRoute path="/create/category" component={AddCategory} exact />
        <AdminRoute path="/create/product" component={AddProduct} exact />
        <Route path="/product/:productId" component={Product} exact />
        <Route path="/cart" component={Cart} exact />
        <AdminRoute path="/admin/orders" component={Orders} exact />
        <PrivateRoute path="/profile/:userId" component={Profile} exact />
        <AdminRoute path="/admin/products" component={ManageProducts} exact />
        <AdminRoute
          path="/admin/product/update/:productId"
          component={UpdateProduct}
          exact
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
