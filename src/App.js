import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";

function App() {
  //const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);
  const [data, setData] = useState(null);

    useEffect(() => {
	fetch(`https://b05slmqz8d.execute-api.us-east-1.amazonaws.com/test/`)
	.then((response) => console.log(response.json()))
        .then((actualData) => {
	        setData(actualData);
	      })
    }, []);
	 //
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload from Github Actions with React2.
	    {data.body}
	</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>
   </div>
    );
}

export default App;
