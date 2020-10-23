import React from 'react';
import SEO from '../utils/helmetWrapper';
import Home from '../components/templates/Home/Home';

export const HomePage = () => (
  <>
    <SEO title="Home" />
    <Home />
  </>
);

export default HomePage;
