import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { useState } from 'react';

function App() {
  const[darkMode,setDarkMode] = useState(false);
  const[name,setName] = useState("");
  return (
    <div className={darkMode ? "container dark":"container"}>
      <h1>click counter App</h1>
      <input
      type="text"
      placeholder="Enter Your name"
      value={name}
      onChange={(e) => setName(e.target.value)}

      />
      <p>Hello,{name ? name: "User"}</p>
      <Counter/>
      <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? " Switch to Light Mode":"Switch to Dark Mode"};
      </button>
    </div>
  );
}

export default App;
