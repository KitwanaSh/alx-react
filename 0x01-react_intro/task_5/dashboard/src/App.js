import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear } from './utils.js';
import { getFooterCopy } from './utils.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor = "email">Email</label>
          <input type = "text" name = "email" id = "email"/>

          <label htmlFor = "passwd">Password</label>
          <input type = "password" name = "passwd" id = "passwd" />
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">Copyright {getFullYear} - {getFooterCopy()}</div>
    </div>
  );
}

export default App;
