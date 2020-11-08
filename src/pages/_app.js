import React from 'react';
import App from 'next/app';
import 'styles/styles.css';
import 'i18n';

class MyApp extends App {
  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { Component, pageProps, router } = this.props;
    const getMainLayout = Component.getMainLayout || ((page) => page);
    return getMainLayout(<Component {...pageProps}></Component>);
  }
}

export default MyApp;
