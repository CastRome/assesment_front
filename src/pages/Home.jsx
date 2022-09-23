import React from 'react';
import Card from '../components/Card';
import "../styles/pages/Home.scss";
const Home = () => {
  return (
    <div className='HomeContainer'>
      <h1>this is HOME</h1>
      <h2>Products</h2>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
};

export default Home;