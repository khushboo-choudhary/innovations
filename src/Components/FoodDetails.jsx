import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Icon from "../Images/icon.png"
import { useParams } from 'react-router'
import './FoodDetails.css';

export const FoodDetails =() =>{
  const { code } = useParams();

  const [details, setDetails] = useState({});


  useEffect(() => {
    axios.get(`http://localhost:8080/data?code=${code}`).then(res => setDetails(res.data[0]))
    
  })
  
return (
  <div>      


    <div className='Container'>           
      <div className='productDetails'>
        <img src={Icon} alt="icon" />          
        <h3 className='product'>{details.product_name} ({details.generic_name})</h3>          
      </div>
      
      <table>  
        <tbody> 
        <tr>
        <th>Category</th>
        <th>Value</th>
        </tr>
          {Object.keys(details).map((key, index) => {
            return (
              <tr key={index}>
                               
                <td>{key}</td>
                <td>{details[key]}</td>                  
              </tr>                         
            )              
          })}           
         
        </tbody>          
      </table>
        
    </div>     
  </div>

  )

}



