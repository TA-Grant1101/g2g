import './App.css';
import Home from './components/Home';
import BookView from './components/BookView';
import SimpleUserDashboard from './components/SimpleUserDashboard';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';
import { useState, useEffect } from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { jwtDecode } from 'jwt-decode';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Chat from './components/Chat';


const queryClient = new QueryClient();

export default function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem('token');
    
    if (token) {
      const decodedHeader = jwtDecode(token, { header: true });
        console.log(decodedHeader);
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.sub;
        console.log(decodedToken);

      setUser(userId);
    } else {
        // Handle case when token is not available
        console.error('JWT token not found');
    }
  }, []);

    return (
    <>
      <QueryClientProvider client={queryClient}>
      <Router>  
        <div className="App">
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AddBook" element={<AddBook />} />
          <Route exact path="/BookDetails/:id" element={<BookView />} />
          <Route exact path="/SimpleUserDashboard" element={<SimpleUserDashboard user={ user } />} />
          <Route exact path="/LoginForm" element={<LoginForm />} />
          <Route exact path="/AddBook/book-details/:title" element={<BookDetails />}/>
          <Route exact path="/Chat" element={<Chat />} />
        </Routes>
        </div>
      </Router>
      </QueryClientProvider>
    </>
  )
}