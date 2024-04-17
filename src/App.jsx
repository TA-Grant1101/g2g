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
  const [user, setUser] = useState({
    "id": 0,
    "name": "",
    "email": "",
    "role": "",
    "createDt": "",
    "bookLibrary": null,
    "wishlist": null
  });


                // useEffect(async() => {
                //     const response = await fetch('http://localhost:8080/user')
                //     const resultJson = await response.json()
                //     setUser(resultJson)
                //     },[])
  const token = localStorage.getItem("jwt");
  console.log(token)
  if (token > 0) {
    useEffect(async() => {
      const response = await fetch('http://localhost:8080/user')
      const resultJson = await response.json()
      setUser(resultJson)
      console.log(user);
      },[token]);
    }



    return (
    <>
      <QueryClientProvider client={queryClient}>
      <Router>  
        <div className="App">
        <Routes >
          <Route exact path="/" element={<Home user={user}/>} />
          <Route exact path="/AddBook" element={<AddBook />} />
          <Route exact path="/BookDetails/:id" element={<BookView />} />
          <Route exact path={`/${user.id}/SimpleUserDashboard`} element={<SimpleUserDashboard user={user} />} />
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