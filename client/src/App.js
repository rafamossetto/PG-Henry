import { Route } from 'react-router';
import Products from './components/products/Products'
import SignupForm from './components/user/SignupForm'
function App() {
  return (
    <div className="App">
      <Route path='/products' component={Products}/>
      <Route path='/signup' component={SignupForm}/>
    </div>
  );
}

export default App;
