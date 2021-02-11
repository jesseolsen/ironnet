import SignIn from './signIn/signIn';
import { GlobalStyle } from './Styled/Global';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SignIn />
      </header>
    </div>
  );
}

export default App;
