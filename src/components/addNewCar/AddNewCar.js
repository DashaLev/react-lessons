import {useState} from "react";
import './AddNewCar.css'
import {saveCar} from "../../services/car.service";

export function AddNewCar() {

    let [model, setModel] = useState('')
    let [price, setPrice] = useState('')
    let [year, setYear] = useState('')
    let [newCar, setNewCar] = useState({model,price,year})


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

    const onSubmitForm = (e) => {
        e.preventDefault()

        let tempCar = {model,price,year}
        setNewCar(tempCar)

        saveCar(tempCar).then(value => {
            alert(`You have just added model-${value.model}, year-${value.year}, price-${value.price}`)
        })

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