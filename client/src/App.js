import { Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/products/Products'
import SignupForm from './components/user/SignupForm'
import MovieDetail from './components/details/Details'

function App() {
  return (
    <div className="App">
     <Route  path='/' component={Header}/>
      <Route path='/products' component={Products}/>
<<<<<<< Updated upstream
      <Route path='/signup' component={SignupForm}/>
      <Route exact path='/movies/:id' component={MovieDetail}/>
=======
      <Route path='/movies/:id' component={MovieDetail}/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
