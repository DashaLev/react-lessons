import {useEffect, useState} from "react";
import {deleteCar, getCars, saveCar} from "../../services/car.service";
import {Car} from "../car/Car";
import './Cars.css'

export function Cars() {

    let [cars, setCars] = useState([])

    const onClickAddCar = ({model, price, year}) => {
        saveCar({model, price, year})
    }

    const onClickDeleteCar = (id) => {
        deleteCar(id)
    }
    useEffect( () => {
        getCars().then(value => setCars([...value]))
    },[cars])

    return (
        <div className={'cars-wrap'}>
            {
                cars.map(value => <Car key={value.id} item={value} onClickDeleteCar={onClickDeleteCar} onClickAddCar={onClickAddCar}/>)
            }
        </div>
    )
}