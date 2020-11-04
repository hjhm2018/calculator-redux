import React from 'react';
import './App.css';

import { connect } from "react-redux";

// import {Provider} from "./Context";
import NavBar from "./Navbar";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faTrashAlt)

function App({ bmi, porosity }) {
  // console.log("bmi: ", bmi);
  // console.log("porosity: ", porosity);

  return (
    <>
      <Header />
      <NavBar />
      <Footer />
    </>

  );
}

const getStateAsProps = state => {
  return {
    bmi: state.bmiList,
    porosity: state.porosityList
  };
};

export default connect(getStateAsProps)(App);