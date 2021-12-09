import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About'
import Contact from './component/Contact'
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import {Switch, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/products/:id" component={Product} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </>
    );
}

export default App;

