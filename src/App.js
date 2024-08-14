import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './routes'

import GlobalStyle from './global';
import {Provider} from 'react-redux'
import { store } from './redux/store';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer/>
        <GlobalStyle/>
        <RoutesApp/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
