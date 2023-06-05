import './App.css';
import Loginpage from './modules/loginpage';
import React from 'react';
import Otppage from './modules/otppage';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Profilepage from './modules/profilepage';
import Homepage from './modules/homepage';
import SalesReport from './components/salesreport';
import Inventory from './modules/inventory';

import PurchaseComponent from './components/purchasecomponent';
// import StockComponent from './components/stockcomponent';
import Creditpage from './modules/creditpage';
import Aboutuspage from './modules/aboutuspaage';
import Contactuspage from './modules/contactuspage';
import Privaypage from './modules/privacypage';
import HomepageContent from './modules/homepagecontent';
import DetailsComponent from './components/detailscomponent';
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Loginpage} />
          <Route path="/otppage" component={Otppage} />
          <Route path="/profilepage" component={Profilepage}/>
          <Route path="/homepage" component={Homepage}/>
          <Route path="/creditpage" component={Creditpage}/>
          {/* <Route path="/inventory" component={PurchaseComponent}/> */}
          {/* <Route path="/stockcomponent" component={StockComponent}/> */}
          <Route path="/inventory" component={Inventory}/>
          <Route path="/aboutuspage" component={Aboutuspage}/>
          <Route path="/contactuspage" component={Contactuspage}/>
          <Route path="/privacypage" component={Privaypage}/>
          <Route path="/homepagecontent" component={HomepageContent}/>
          <Route path="/detailscomponent" component={DetailsComponent}/>
        </Switch>
      </Router>
    </React.Fragment>
  )
};

export default App;

