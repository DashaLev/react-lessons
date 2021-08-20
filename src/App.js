import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import './App.css'
import {Cars} from "./components/cars/Cars";
import {AddNewCar} from "./components/addNewCar/AddNewCar";
import {UpdateCar} from "./components/updateCar/UpdateCar";


function App() {
    return (
        <Router>
            <div className={'links-wrap'}>
                <Link to={'/cars'}>Cars page</Link>
                <br/>
                <Link to={'/create-car'}>Add new car page</Link>
                <br/>
                <Link to={'/update-car'}>Update car page</Link>
            </div>
            <div className={'page-wrap'}>
                <Switch>
                    <Route path={'/cars'} component={Cars}/>
                    <Route path={'/create-car'} component={AddNewCar}/>
                    <Route path={'/update-car'} component={UpdateCar}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;


