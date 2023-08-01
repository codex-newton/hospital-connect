import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Use ReactDOM.createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
