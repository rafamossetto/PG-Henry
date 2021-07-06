import { Route } from 'react-router';
import Products from './components/products/Products'
function App() {
  return (
    <div className="App">
      <Route path='/products' component={Products}/>
    </div>
  );
}

export default App;
