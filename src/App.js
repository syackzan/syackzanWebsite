import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {

  const [currentPage, setCurrentPage] = useState('Portfolio');

  const renderPage = () => {
    if (currentPage === 'About'){
      return <AboutMe />;
  }
  if (currentPage === 'Portfolio'){
      return <Portfolio />;
  }
  return <Contact />;
  }

  const handlePageChange = (page) =>setCurrentPage(page);

  return (
    <div className="">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </div>
  );
}

export default App;
