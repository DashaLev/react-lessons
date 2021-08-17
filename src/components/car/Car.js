import './Car.css'

export function Car({onClickAddCar,onClickDeleteCar,item:{
    id,model, price, year
}}) {

    return (
        <div className={'car-item'}>
            <h3>Model - {model}</h3>
            <h4>Year - {year}, price - {price}</h4>
            <button onClick={() => onClickAddCar ({model, price, year})}>Edit</button>
            <button onClick={() => onClickDeleteCar(id)}>Delete</button>
        </div>
    )
}