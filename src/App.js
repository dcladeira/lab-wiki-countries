import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import countriesData from './countries.json';
// import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import {useState} from 'react';
import HomePage from './components/HomePage/HomePage';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage countries={countries}/>} />
        <Route path="/:countryId" element={<CountryDetails countries={countries}/>} />
      </Routes>
    </div>
  );
}

export default App;
