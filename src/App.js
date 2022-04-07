import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  const appName = 'WikiCountries';

  return (
    // <div className="App">
    //     <Navbar appName={appName} />
    //     <CountriesList countries={countries} />
    //     <CountryDetails countries={countries} />
    // </div>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar appName={appName} />,
            <CountriesList countries={countries} />
          </>
        }
      />
       <Route
        path="/country/:alpha3Code"
        element={
          <>
            <Navbar appName={appName} />,
            <CountryDetails countries={countries} />
          </>
        }
      />
      
    </Routes>
  );
}

export default App;
