import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import Airline from '../Airline/Airline'

const Airlines = () => {
    const [airlines, setAirlines] = useState([])
    useEffect(() => {
        //get all airlines from api
        //update airlines in state
        axios.get('/api/v1/airlines.json')
        .then (resp => {
            setAirlines(resp.data.data)
        })
        .catch( resp => console.log(resp))
    }, [airlines.length])

    const grid = airlines.map( item => {
        return (
            <Airline
            key={item.attributes.name}
            attributes={item.attributes}
            />
        )
    })

    return (
        <div className="Home">
            <div className="header"></div>
                <h1>Open Flights</h1>
            <div className="subheader">Honest, unbiased airline reviews.</div>
            <div className="grid">
                <ul>{grid}</ul>

            </div>
        </div>
    
    )
}

export default Airlines