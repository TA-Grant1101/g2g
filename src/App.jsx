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
import Chat from './components/chatComponents/Chat';
import MyLibrary from './components/MyLibrary';
import Testing from './components/Testing';


const queryClient = new QueryClient();

export default function App() {
  
  const [user, setUser] = useState({});

  // useEffect(() => {

  //   const token = localStorage.getItem('token');
    
  //   if (token) {
  //     const decodedHeader = jwtDecode(token, { header: true });
  //       console.log(decodedHeader);
  //     const decodedToken = jwtDecode(token);
  //     const user = decodedToken.payload.username;
  //       console.log(decodedToken);
  //       console.log(user);

  //     setUser(user);
  //   } else {
  //       // Handle case when token is not available
  //       console.error('JWT token not found');
  //   }
  // }, []);
    useEffect(() => {
      async function getUserData() {
        const response = await fetch('http://localhost:8080/user');
        const resultJson = await response.json;
        setUser(resultJson);
      }
    },[])

    return (
    <>
      <QueryClientProvider client={queryClient}>
      <Router>  
        <div className="App">
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AddBook" element={<AddBook />} />
          <Route exact path="/BookDetails/:id" element={<BookView />} />
          <Route exact path={`/${ user.id }/SimpleUserDashboard`} element={<SimpleUserDashboard user={ user } />} />
          <Route exact path="/LoginForm" element={<LoginForm />} />
          <Route exact path="/AddBook/book-details/:title" element={<BookDetails />}/>
          <Route exact path="/Chat" element={<Chat />} />
          <Route exact path="/MyLibrary" element={<MyLibrary />} />
          <Route exact path="/Testing" element={<Testing />} />
        </Routes>
        </div>
      </Router>
      </QueryClientProvider>
    </>
  )
}