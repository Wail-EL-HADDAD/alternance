import React from 'react'
import {useState} from "react"
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import axios from 'axios';


const SearchNav = () => {
  const [city,setCity]=useState('')
 const history= useHistory();




  const handleChange = (e)=>{
    setCity(e.target.value);

  }
 
  const handleClick = ()=>{
    history.push('/Coworkers',{city:city})
  }


    return (
        <div className="App">
        <div className="Appsearch">
        <label htmlFor="site-search">Search the site:</label>
       <input type="search" id="site-search" name="q"
             aria-label="Search through site content"
             onChange ={(e) => handleChange(e)}
             />
   
       <button onClick={handleClick}>Search</button>
           
        </div>
       </div>
    )
}

export default SearchNav
