import './App.css';
import logo from './logo.jpg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img className="logo" src={logo} alt="logo"></img>
                <h1>School dashboard</h1>
            </header>
            <div className="App-body">
                <p>
                    Login to access the full dashboard
                </p>
                <form>
                    <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">OK</button>
                </form>
            </div>
            <div className="App-footer">
                <p>
                    Copyright 2020 - holberton School
                </p>
            </div>
        </div>
    );
}

export default App;