import { Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/products/Products'
import SignupForm from './components/user/SignupForm'
import MovieDetail from './components/details/Details'
import Billboard from './components/billboard/Billboard';

function App() {
  return (
    <div className="App">
     <Route  path='/' component={Header}/>
      <Route path='/products' component={Products}/>
      <Route path='/signup' component={SignupForm} />
      <Route path='/movies/:id' component={MovieDetail}/>
      <Route path='/billboard' component={Billboard} />
    </div>
  );
}

export default App;