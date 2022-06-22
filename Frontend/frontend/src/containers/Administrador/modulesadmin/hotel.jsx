import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DefaultAction from './modules/DefaultAction';
import addHotel from './modules/Hotel/addhotel';
import listHotel from './modules/Hotel/listhotel';

const Roles = () => (
  <div className='containeroption'>
    <Switch>
        <Route 
            exact path="/admin/hotel/add" 
            component={addHotel} />
        <Route 
            exact path="/admin/hotel/add" 
            component={listHotel} />
        <Route 
            render={(props) => <DefaultAction {...props} name={"🛃 Roles"} />} />
    </Switch>
  </div>
);

export default Roles;