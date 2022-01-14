import logo from './logo.svg';

import './App.scss';
import react from 'react';
import Header from './HeaderComponent';
import Inledning from './chapters/InledningComponent';
import Omsorg from './chapters/OmsorgComponent';
import Jobb from './chapters/JobbComponent';
import Trygghet from './chapters/TrygghetComponent';
import Skola from './chapters/SkolaComponent';
import Klimat from './chapters/KlimatComponent';
import Integration from './chapters/IntegrationComponent';
import Footer from './FooterComponent';
import ScrollToTop from 'react-scroll-to-top';
import { BrowserRouter as Router, Route, Routes, withRouter, useLocation } from 'react-router-dom';


function App() {
  
  const location = window.location.pathname;

  return (

      <div>
        <ScrollToTop smooth color='#ED1B34'/>
        <Router>
          <Header location= {location}/>
          <Routes>
            <Route exact path="/" element= {<Inledning link="/" auth={true}/>} />
            <Route exact path="/omsorg-och-sjukvard" element= {<Omsorg auth={true}/>} />
            <Route exact path="/jobben" element= {<Jobb auth={true}/>} />
            <Route exact path="/trygghet" element= {<Trygghet auth={true}/>} />
            <Route exact path="/skola" element= {<Skola auth={true}/>} />
            <Route exact path="/klimat-och-hallbarhet" element= {<Klimat auth={true}/>} />
            <Route exact path="/integration" element= {<Integration auth={true}/>} />
          </Routes>
        </Router>
        <Footer />
      </div>
  );
}

export default App;
