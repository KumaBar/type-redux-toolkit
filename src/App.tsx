import { Provider } from 'react-redux';
import './App.css'
import store from './store';
import { ProductForm } from './Shop/ProductForm';
import { ProductList } from './Shop/ProductList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;
