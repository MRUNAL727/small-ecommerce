import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
    </div>
  );
};

export default Home;
