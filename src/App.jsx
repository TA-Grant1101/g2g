import './App.css'
import { React, useState } from 'react';
import Home from './components/Home';
import AddBook from './components/AddBook';
import BookView from './components/BookView';
import Chat from './components/Chat';
import LoginForm from './components/LoginForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData); // Set user data after successful authentication
  };



    return (
    <>
      <Router>
        <div className="App">
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="AddBook" element={<AddBook />} />
          <Route exact path="BookDetails/:id" element={<BookView />} />
          <Route exact path="Login" element={<LoginForm onLogin={handleLogin} />} /> 
          {user ? ( <Route exact path="Chat user={user}" element={<Chat />} /> ) : 
            ( <Route exact path="Login" element={<LoginForm onLogin={handleLogin} />} /> )} 
        
        </Routes>
        </div>
      </Router>
    </>
  )
}