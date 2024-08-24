import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store.js'
// import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <ToastContainer
            autoClose={5000}
            closeOnClick
            // hideProgressBar
            draggable
            position="top-center" style={{ width: "504px", height: "56px" }}
          />
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
