import React from 'react'
import { useParams } from 'react-router-dom';

function CountryDetails(countries) {
    const {alpha3Code} = useParams();

    
  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails