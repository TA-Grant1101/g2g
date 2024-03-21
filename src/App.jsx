import { useState } from 'react';
import Notifications from './components/Notifications';'./components/Notifications';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import ChatElement from './components/ChatElement';


function App() {
  const [count, setCount] = useState(0);

  return (
    <><>
      <div>
        <Notifications />
      </div>
      <div>
        <h1>Books 2 Borrow</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <h1>Hello this is test code. Demonstrating how to do a pull request.</h1>
        </div>
      </div>
    </><Routes>
        <Route path="chat" element={<ChatElement />} />

      </Routes></>
  )
}

export default App
