import { Route } from 'react-router';
import Products from './components/products/Products'
import MovieDetail from './components/details/Details'
function App() {
  return (
    <div className="App">
      <Route path='/products' component={Products}/>
      <Rout path='/???/:id' component={MovieDetail}/>
    </div>
  );
}

export default App;
