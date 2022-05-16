import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';

const ResidentInfo = ({url}) => {

    const[resident, setResident] = useState({})



    useEffect(()=>{

        axios.get(url)
        .then(res=> setResident(res.data))

    },[url])

    return (
        <div className='resident-container'>
            <div className='caja-item'>
                <img src={resident.image} alt="" />
            </div>
            <div className='caja-text'>
                <h1>{resident.name}</h1>
                <p>{resident.status}</p> 
                <h1>{resident.species}</h1>
                <p>Origin:</p><h1>{resident.origin?.name}</h1> 
                <p>Episodes where it appear:</p><h1>{resident.episode?.length}</h1>
            </div>
        </div>
    );
};

export default ResidentInfo;