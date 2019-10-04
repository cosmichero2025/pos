import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { OrderProvider } from './OrderContext';

import TopNav from './topNav/TopNav';
import IntroMenu from './introMenu/IntroMenu';
import FoodMenu from './foodMenu/FoodMenu';
import OrderTally from './orderTally/OrderTally';

function App() {
  return (
    <OrderProvider>
      <Switch>
        <Route exact path='/'>
          <div className='grid-initial'>
            <TopNav />
            <IntroMenu />
          </div>
        </Route>
        <Route path='/order/walk-in'>
          <div className='grid-order'>
            <TopNav short />
            <FoodMenu />
            <OrderTally />
          </div>
        </Route>
      </Switch>
    </OrderProvider>
  );
}

export default App;
