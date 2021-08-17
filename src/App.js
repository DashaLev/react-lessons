import {Cars} from "./components/cars/Cars";
import {AddNewCar} from "./components/addNewCar/AddNewCar";
import './App.css'

function App() {
  return (
    <div className={'wrap'}>
        <AddNewCar/>
        <Cars/>
    </div>
  );
}

export default App;
