import React from 'react';
import App from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/index.scss';

class MyApp extends App {

  constructor(props) {
    super(props);
  }


  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Navbar />
        <div className="base-page">
          <Component {...pageProps} />
        </div>
        <Footer />
        <style jsx>
          {
            `
              .base-page {
                padding-top: 80px;
              }
            `
          }
        </style>
      </>
    );
  }
}

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyApp;

