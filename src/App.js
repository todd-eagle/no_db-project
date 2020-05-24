import React from 'react';
import { Helmet } from 'react-helmet'
import Header from './components/Header'
import Footer from './components/Footer'
import ListContainers from './components/ListContainers'
import './App.css';

export default function App() {
  const TITLE = "The Bucket List"
  return (
    <div className="wrapper">
      <Helmet>
            <title>{ TITLE }</title>
      </Helmet>
      <Header />
      <div className="main">
      <ListContainers />
      </div>
      <Footer />
    </div>
  )
}