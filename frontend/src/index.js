import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import store from './redux/store';
import AppContextProvider from './Components/appContext/appContext';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Provider store={store}>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </Provider>
</BrowserRouter>
);

