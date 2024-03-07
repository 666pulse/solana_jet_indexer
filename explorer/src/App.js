import React from 'react';
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'

import { Layout } from 'antd';

import MainHeader from './components/Header/Header';
import MainFooter from './components/Footer/Footer';

import Account from './pages/account/Account';

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/account" element={Account}></Route>
        </Routes>

      <Layout>
        <MainHeader />
          {props.children}
        <MainFooter />
      </Layout>
    </Router>

  );
}

export default App;
