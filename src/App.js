import React, { useState } from 'react';
import axios from "axios";
import  './App.css';
export default function App(){
    const counties =[
        {
            name: "Pakistan",
            states:[
                {
                    name: "Mardan",
                    
                   
                },
                {
                  name: "islamabad",
               
                 
              },
              {
                name: "Lahore",
                
               
            },
            ],
        },
  
  
       {
            name: "Dubia",
            states:[
               {
                name: "Abu Dhabi",

                },
                {
                  name: "Sharjah",
                
                 
              },
              {
                name: "Fujairah",
                
               
            },
            ],
       },
  ];
  const [country, setCountry] = useState('--country--');
  const [state,setState ] = useState('--state--');
  const [states,setStates ] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`)
      .then((response) => {
        setWeatherData(response.data);
      });
  };

  
  const changeCountry=(e)=>{
    setCountry(e.target.value);
     setStates(counties.find(ctr =>ctr.name===e.target.value).states )
      
  }
  const changeState=(e)=>{
     setState(e.target.value); 
       
   };
   console.log(state);
  return(
    <div style={{textAlign: "center"}}>
        <form  onSubmit={handleSubmit} className="col-md-12 text-center mt-5">
        <div >
          <h1 >Select Country and cities</h1>
            <select style={{margin: "20px"}} 
            value ={country}
             onChange ={changeCountry}    
            >
                
                <option  >Country</option>
                {counties.map(ctr=>(
                  <option value ={ctr.name}>{ctr.name}</option>)
  
                )}
            </select>
            
            <select className="form-control" value ={state} onChange ={changeState}  >
                <option >state</option>
                {states.map((state)=>(
                  <option value ={state.name}>{state.name }</option>)
                  )}
            </select>
        
            
        </div>
        <br/>
        <button type="submit" className="btn btn-outline-dark">Check Weather</button>
        </form>
        {Object.keys(weatherData).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <h5 className="weathorCity">
              {weatherData?.name}
            </h5>
            <h6 className="weathorTemp">{weatherData.main ? <p className='bold'>{(weatherData.main.feels_like - 273).toFixed()}°C</p> : null}</h6>
          </div>
        </div>
      }
        
    </div>
    
    )
  }