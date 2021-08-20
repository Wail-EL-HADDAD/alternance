import React from 'react'
import {useLocation} from 'react-router-dom'

import {useState,useEffect} from "react"
import axios from 'axios';
import DisplayPopUp from './DisplayPopUp'

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';


const DisplayCoworKers = () => {
  const [data, setData] = useState(null);
  const [open,setOpen]=useState(false)
  const location = useLocation();
const city = location.state.city


  useEffect(() => {
    getCoworkers(city)
  }, [city])

  const handleClick = (e)=>{
    setOpen(true)
  }
  
  const getCoworkers = async (city) => {

    if(city !== ""){
      const res = await axios.get('http://localhost:5000/cities/'+ city);
      setData(res.data.coworkings)
     console.log('request data',res.data.coworkings)


    }
  }
  

    return (
        <div style={{"marginTop": "50px"}}>
        {data && data.length > 0 && 
        data.map(c => 
          <div key={c.address}>
             <ul>
          <li>
            {c.name}
          </li>
          <li>
            {c.city}
          </li>
          <li>
            {c.address}
          </li>
          <li>
            {c.description}
          </li>
          <div>
            <img src={c.photo} alt={"Loading..." + c.photo} />
          </div>
          <li>
            {c.prixDemiJ}
          </li>
          <li>
            {c.prixH}
          </li>
          <li>
            {c.prixJ}
          </li>
          
            <button onClick={(e)=>handleClick(e)}>Réserver</button>
          
        </ul>
          </div>
          )
       
        }
        {open && <DisplayPopUp  data={data} open={open} setOpen={setOpen}></DisplayPopUp>}
      </div>
    )
}

export default DisplayCoworKers
