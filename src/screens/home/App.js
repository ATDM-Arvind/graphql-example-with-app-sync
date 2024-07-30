import './App.css';

import ChannelsList from './component/ArticleList';
import logo from '../../assets/logo.svg';
import logoApollo from '../../assets/apolo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoApollo} className="App-logo" alt="logo" />
        </div>
        <p>
          Welcome to Apollo Client with React JS.
        </p>
      </header>
      <ChannelsList />
    </div>
  );
}

export default App;
