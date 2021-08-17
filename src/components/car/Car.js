import './Car.css'

export function Car({item:{
    model, price, year
}}) {
    return (
        <div className={'car-item'}>
            <h3>Model - {model}</h3>
            <h4>Year - {year}, price - {price}</h4>
        </div>
    )
}