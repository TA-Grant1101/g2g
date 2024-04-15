import './App.css'
<<<<<<< HEAD
import { React, useState } from 'react';
import Home from './components/Home';
import AddBook from './components/AddBook';
import BookView from './components/BookView';
import Chat from './components/Chat';
import LoginForm from './components/LoginForm';
=======
import Home from './components/Home'
import BookView from './components/BookView'
import SimpleUserDashboard from './components/SimpleUserDashboard'
import AddBook from './components/AddBook'
import BookDetails from './components/BookDetails'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

>>>>>>> frontend-dev
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


const queryClient = new QueryClient();

export default function App() {
  
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData); // Set user data after successful authentication
  };



    return (
    <>
      <QueryClientProvider client={queryClient}>
      <Router>  
        <div className="App">
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route exact path="BookDetails/:id" element={<BookView />} />
<<<<<<< HEAD
          <Route exact path="Login" element={<LoginForm onLogin={handleLogin} />} /> 
          {user ? ( <Route exact path="Chat user={user}" element={<Chat />} /> ) : 
            ( <Route exact path="Login" element={<LoginForm onLogin={handleLogin} />} /> )} 
        
=======
          <Route exact path="SimpleUserDashboard" element={<SimpleUserDashboard />} />
          <Route path="/AddBook/book-details/:title" element={<BookDetails />}/>
>>>>>>> frontend-dev
        </Routes>
        </div>
      </Router>
      </QueryClientProvider>
    </>
  )
}