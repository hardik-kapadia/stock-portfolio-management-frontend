import './App.css';

import Profile from './components/Profile';
import Main from './components/Main';

import { possibleMainScreens } from './constants';

import { useState, useEffect } from 'react';


const Searchbar = (props) => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='searchbar'>
      <input type="text" placeholder="Search for stocks" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <input type="button" value="Search" onClick={() => {
        props.setMainSearchTerm(searchTerm.trim());
        props.updateScreen(possibleMainScreens[1]);
      }} />
    </div>
  )

}


function App() {

  const [user, setUser] = useState(null);
  const [mainScreen, setMainScreen] = useState(possibleMainScreens[0]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">

      <div className="title">
        <h1> Stock market portfolio management </h1>
      </div>

      <div className='body'>

        <div className='main'>
          <Searchbar setMainSearchTerm={setSearchTerm} updateScreen={setMainScreen} />
          <Main user={user} screen={mainScreen} updateScreen={setMainScreen} searchTerm={searchTerm} />
        </div>

        <div className='profile' >
          <Profile user={user} logout={() => { setUser(null) }} />
        </div>

      </div>

      <div className='summary'>

      </div>

    </div>
  );
}

export default App;
