import {useEffect, useState} from "react";
import {deleteCar, getCars, saveCar} from "../../services/car.service";
import {Car} from "../car/Car";
import './Cars.css'

export function Cars() {

    let [cars, setCars] = useState([])

    useEffect( () => {
        getCars().then(value => setCars([...value]))
    },[])

    const onClickAddCar = ({model, price, year}) => {

        saveCar({model, price, year}).then(value => {
            cars.push(value);
            setCars([...cars]);
        })
    }

    const onClickDeleteCar = (id) => {
        deleteCar(id)
        let newCars = cars.filter(item => item.id !== id)
        setCars([...newCars])
    }


    return (
        <>
            <div className={'cars-wrap'}>
                {
                    cars.map(value => <Car key={value.id} item={value} onClickDeleteCar={onClickDeleteCar} onClickAddCar={onClickAddCar}/>)
                }
            </div>
        </>
    )
}