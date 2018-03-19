import 'normalize.css';
import '../styles/App.css';
import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts';
import AnImage from './business/addImage';
export default class extends Component {
  render() {
    return <Fragment>
        <Header />
        <AnImage/>
        <Footer />
      </Fragment>
  }
}

