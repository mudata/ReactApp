import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import { RoomProvider } from './providers/context';
import UserProvider from './providers/UserProvider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
<UserProvider>
  <RoomProvider>
    
  <Router>
    <App />
    
  </Router>
  
</RoomProvider>
</UserProvider>,

  document.getElementById('root')
);



reportWebVitals();
