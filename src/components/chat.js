// export default function App(){
//   const counties =[
//       {
//           name: "Pakistan",
//           states:[
//               {
//                   name: "Mardan",
//                   cities:["arear1","area 2"],
                 
//               },
//               {
//                 name: "islamabad",
//                 cities:["arear1","area 2"],
               
//             },
//             {
//               name: "Lahore",
//               cities:["arear1","area 2"],
             
//           },
//           ],
//       },


//      {
//           name: "Dubia",
//           states:[
//              {
//               name: "Abu Dhabi",
//               cities : ["Shargja, xyz"],
//               },
//               {
//                 name: "Sharjah",
//                 cities:["arear1","area 2"],
               
//             },
//             {
//               name: "Fujairah",
//               cities:["arear1","area 2"],
             
//           },
//           ],
//      },
// ];
// const [country, setCountry] = useState('--country--');
// const [state,setState ] = useState('--state--');
// const [city] = useState('--city--');
// const [states,setStates ] = useState([]);
// const [cities,setCities ] = useState([])


// const changeCountry=(e)=>{
//   setCountry(e.target.value);
//   setStates(counties.find(ctr =>ctr.name===e.target.value).states )
    
// }
// const changeState=(e)=>{
//    setState(e.target.value); 
//    setCities(states.find(states=> states.name===e.target.value).cities )
    
//  }
// return(
//   <div className ="justify-content-center d-flex w-100vh-100 bg-dark text-white">
//       <div className="w-50 mt-5">
//         <h1>Select Country and cities</h1>
//           <select className="form-control" 
//           value ={country}
//            onChange ={changeCountry}    
//           >
//               <option>Country</option>
//               {counties.map(ctr=>(
//                 <option value ={ctr.name}>{ctr.name}</option>)

//               )}
//           </select>
//           <br/>
//           <select className="form-control" value ={state}  onChange ={changeState}  >
//               <option>state</option>
//               {states.map((state)=>(
//                 <option value ={state.name}>{state.name }</option>)
//                 )}
//           </select>
//           <br/>
//           {<select className="form-control" value ={city} >
//               <option>city</option>
//               {cities.map(city=>(
//                 <option value ={city}>{city}</option>
//                 ))}
//           </select> }
//       </div>
//   </div>
  
//   )
// }