import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { store, persistor } from './redux/store';
// import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);














// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './components/App/App'
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <Provider store={store}> 
//        <App />
//      </Provider> 
//   </StrictMode>
// )
