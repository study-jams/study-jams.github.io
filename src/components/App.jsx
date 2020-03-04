import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Details from './Details/Details';
import Conduct from './Conduct/Conduct';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, detailsData, conductData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [details, setDetails] = useState([]);
  const [conduct, setConduct] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setDetails([...detailsData]);
    setConduct({ ...conductData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, details, conduct, footer }}>
      <Hero />
      <About />
      <Details />
      <Conduct />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
