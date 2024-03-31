import './App.css';
import Home from './components/Home';
import AddBook from './components/AddBook';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  
    return (
        <div className="App">
          <Router>
                <Routes path="/">
                    <Route index element={<Home />} />
                    <Route path="AddBook" element={<AddBook />} />
                </Routes>
            </Router>
        </div>
  )
}