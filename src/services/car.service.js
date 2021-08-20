
const saveCar = ({model,price,year}) => {
    return fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify({model,price,year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())

}

const deleteCar = (id) => {
   fetch(`http://195.72.146.25/api/v1/cars/${id}`, {
        method: 'DELETE',
   })
}
const getCars = () => {
    return fetch('http://195.72.146.25/api/v1/cars').then(value => value.json())
}


export {saveCar,getCars,deleteCar}