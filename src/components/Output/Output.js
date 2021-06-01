import React from 'react'

export default function Output({weather}) {
    return (
        <div>   
        {weather ?
        <>
        <div className='info'>
        <div className='ewe'>
        <h3>Country: {weather.sys.country}</h3>
        <h3>City: {weather.name}</h3>    
        <h3>Temperature: {weather.main.temp}</h3>
        <h3>Wind degree: {weather.wind.deg}</h3>
        <h3>Wind speed: {weather.wind.speed}</h3>
        </div>
        </div>
         </>
        : <h3>EMPTY.....</h3>
        
        }
            
        </div>
    )
}
