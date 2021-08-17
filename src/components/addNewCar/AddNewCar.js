import {useState} from "react";
import {saveCar} from "../../services/car.service";
import './AddNewCar.css'

export function AddNewCar() {

    let [model, setModel] = useState('Audi')
    let [price, setPrice] = useState('20000')
    let [year, setYear] = useState('2010')
    let [newCar, setNewCar] = useState({model,price,year})

    const onSubmitForm = (e) => {
        e.preventDefault()

        let tempCar = {model,price,year}
        setNewCar(tempCar)

        saveCar(tempCar)
    }

    const onInputChangeModel = (e) => {
        setModel(e.target.value)
    }
    const onInputChangePrice = (e) => {
        let priceValue = Number(e.target.value)
        setPrice(priceValue)
    }
    const onInputChangeYear = (e) => {
        let yearValue = Number(e.target.value)
        setYear(yearValue)
    }

    return (
        <>
            <form onSubmit={onSubmitForm} className={'add-new-car-form'}>
                <input type="text" name={'model'} value={model} onInput={onInputChangeModel} placeholder={'model'} maxLength="20"/>
                <input type="number" name={'price'} value={price} onInput={onInputChangePrice} placeholder={'price'} min="0"/>
                <input type="number" name={'year'} value={year} onInput={onInputChangeYear} placeholder={'year'} min="1990" max="2021"/>
                <input type="submit" value={'Save'}/>
            </form>
        </>
    )
}