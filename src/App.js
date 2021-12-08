import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';

import {Switch, Route} from 'react-router-dom';



function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/products/:id" component={Product} />
                <Home/>
            </Switch>
        </div>
    );
}

export default App;

