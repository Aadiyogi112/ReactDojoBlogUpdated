// import logo from './logo.svg';
import './App.css';
import ComponentRoute from './ReactRoutes/ComponentRoute';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ComponentRoute/>
    </div>
    </Provider>
  );
}

export default App;
