import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import Rectangle from '../images/Rectangle.svg'  ;

const Location = () => {

    const [location, setLocation] = useState({})
    const [id, setId] = useState("")



    useEffect(()=>{

        const random = Math.floor(Math.random()*126)+1;

        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res=> setLocation(res.data))

    },[])

    console.log(location);

    const searchLocation =()=>{

        console.log(id)
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res=> setLocation(res.data))
     }
    return (
        <div className='container'>
            <div className='banner'>
               <img src={Rectangle} />
            </div>

            <div className='search'>
            <input type="text" onChange={e=> setId(e.target.value)} value={id} placeholder={"Type a location ID to search!"}/>
               <button onClick={searchLocation}>Search</button>
               <h2>{location.name}</h2>
            </div>


            <ul className='navbar'>
                <li><b>Type: </b>{location.type}</li> 
                <li><b>Dimension: </b>{location.dimension}</li>
                <li><b>Population: </b>{location?.residents?.length}</li> 
            </ul> 
                    {location.residents?.map(resident =>
                     (
                        // {resident}
                       <ResidentInfo url={resident} key={resident}/>
                    ))}         
        </div>
    );
};

export default Location;