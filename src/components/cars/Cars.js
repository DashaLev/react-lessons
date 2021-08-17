import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import {Car} from "../car/Car";
import './Cars.css'

export function Cars() {

    let [cars, setCars] = useState([])

    useEffect( () => {
        getCars().then(value => setCars([...value]))
    },[])

    return (
        <div className={'cars-wrap'}>
            {
                cars.map(value => <Car key={value.id} item={value}/>)
            }
        </div>
    )
}