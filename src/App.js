import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

    useEffect(() => {
	fetch(`https://b05slmqz8d.execute-api.us-east-1.amazonaws.com/test/`)
	.then((response) => {
	    	return response.json()
	})
        .then((actualData) => {
		console.log("Writing....");
	        setData(actualData.body);
		console.log(actualData.body);
	      })
    }, []);
	 
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload from Github Actions with React2.
	</p>
	<p> {data}
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
