import React from 'react';
import '../styles/pages/Home.scss';
import Post from '../components/Posts';

const Home = () => (
  <div className="HomeContainer">
    <h1>Welcome to a fake store</h1>
    <h2>Products</h2>
    <Post />
  </div>
);

export default Home;
