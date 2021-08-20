import {useEffect, useState} from "react";
import {getCars,saveCar} from "../../services/car.service";
import './UpdateCar.css'

export function UpdateCar() {

    let [cars, setCars] = useState([])

    let [model, setModel] = useState('')
    let [price, setPrice] = useState('')
    let [year, setYear] = useState('')

    let [newCar, setNewCar] = useState({model,price,year})

    useEffect(()=> {
        getCars().then(value => setCars([...value]))
    },[])

    const onChangeCarValues = (e) => {
        let modelNew = e.target.value.split('-')[0]
        let priceNew = Number(e.target.value.split('-')[1])
        let yearNew = Number(e.target.value.split('-')[2])

        setModel(modelNew)
        setPrice(priceNew)
        setYear(yearNew)

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
    const onSubmitGetUserPosts = (e) => {
        e.preventDefault()

        let tempCar = {model,price,year}
        setNewCar(tempCar)

        saveCar(tempCar).then(value => {
            alert(`You have just added model-${value.model}, year-${value.year}, price-${value.price}`)
        })
    }

    return (
        <div className={'update-wrap'}>
            <>
                <div>Choose car</div>
                <select onChange={onChangeCarValues} className={'select-form'}>
                    {
                        cars.map(value =>  <option key={value.id}>{value.model}-{value.price}-{value.year}</option>)
                    }
                </select>
            </>

            <form onSubmit={onSubmitGetUserPosts} className={'update-form'}>
                <div>
                    <div>Model</div>
                    <input type="text" name={'model'} value={model} onInput={onInputChangeModel} placeholder={'model'} maxLength="20"/>
                </div>
                <div>
                    <div>Price</div>
                    <input type="number" name={'price'} value={price} onInput={onInputChangePrice} placeholder={'price'} min="0"/>
                </div>
                <div>
                    <div>Year</div>
                    <input type="number" name={'year'} value={year} onInput={onInputChangeYear} placeholder={'year'} min="1990" max="2021"/>
                </div>
                <input type="submit" value={'Save'}/>
            </form>
        </div>
    )
}