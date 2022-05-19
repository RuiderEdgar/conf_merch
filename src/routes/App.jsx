import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
            <Router exact path="/" component={Home} />
            <Router exact path="/checkout" component={Checkout} />
            <Router exact path="/checkout/information" component={Information} />
            <Router exact path="/checkout/payment" component={Payment} />
            <Router exact path="/checkout/success" component={Success} />
            <Router component={NotFound} />
        */}
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/information" element={<Information />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
