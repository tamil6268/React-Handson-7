import './App.css';
import Nav from './Components/Nav'
import Main from './Routes/Main'
import { Provider } from 'react-redux';
import store from './Redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Nav />
      <Main />
    </Provider>
  )
}

export default App;
