import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Books 2 Borrow</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>Hello this is test code. Demonstrating how to do a pull request.</h1>  <h1>This is a conflict.</h1>
      </div>

      </div>
    </>
  )
}

export default App
