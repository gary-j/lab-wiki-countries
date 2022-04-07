import React from 'react'
import { Link } from 'react-router-dom'

const CountriesList = (props) => {

    console.log(props.countries[0].name.official, 'PROPS')
  return (
    <div className='App list-group'>
       {
       props.countries.map( country =>{
           return (
              <li key={country.alpha3Code} className='list-group-item list-group-item-action '>
               {<Link to={`country/${country.alpha3Code}`}> 
               {country.name.official} 
               </Link>}
               </li> 
           )
       })

       } 
    CountriesList
    </div>
  )
}

export default CountriesList

