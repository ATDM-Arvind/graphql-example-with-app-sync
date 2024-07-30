import './App.css';

import ChannelsList from './component/ChannelList';
import { MockedProvider } from '@apollo/client/testing';
import logo from '../../assets/logo.svg';
import logoApollo from '../../assets/apolo.png';
import { mocks } from '../../utility/queries';

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
        <MockedProvider mocks={mocks} addTypename={false}>
            <ChannelsList />
        </MockedProvider>
      </header>
    </div>
  );
}

export default App;
