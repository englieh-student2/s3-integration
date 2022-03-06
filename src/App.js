import logo from './logo.svg';
import './App.css';

import { useEffect } from "react";

function App() {
  //const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  //useEffect(() => {
  //  fetch(`https://b05slmqz8d.execute-api.us-east-1.amazonaws.com/test/`)
  //    .then(res => res.json())
  //    .then(
  //      (result) => {
          //setIsLoaded(true);
          //setItems(result);
  //      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        //(error) => {
        //  setIsLoaded(true);
        //  setError(error);
        //}
  //    )
  //}, [
    useEffect(() => {
	fetch(`https://b05slmqz8d.execute-api.us-east-1.amazonaws.com/test/`)
	.then((response) => console.log(response.json()));
    }, []);
	 //
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload from Github Actions with React2.
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
