import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
// import countriesData from './countries.json';
import CountryDetails from './components/CountryDetails/CountryDetails';
import {useState, useEffect} from 'react';
import CountriesList from './components/CountriesList/CountriesList';
import { Col, Row } from 'react-bootstrap';

function App() {
  // const [countries, setCountries] = useState(countriesData);
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch("https://ih-countries-api.herokuapp.com/countries")
    .then(response => response.json())
    .then(data=>setCountries(data))
    .catch((error)=>console.log(error))
  },[])

  return (
    <div className="App">
      <Navbar />
      <Row>
        <CountriesList countries={countries} />
        <Col>
          <Routes>
            {/* <Route path="/" element={<HomePage countries={countries}/>} /> */}
            <Route path="/" element={CountriesList} />
            <Route path="/:countryId" element={<CountryDetails countries={countries}/>} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
