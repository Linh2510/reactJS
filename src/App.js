import React, { Component } from 'react';
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'


export default class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <div className="container">
        {this.props.children}
      </div>
      <div className="container">
      </div>
      <Footer />
    </div>
    )
  }
}
