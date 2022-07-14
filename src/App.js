import './App.css';
import StockComponent from './components/Stock';
import Profile from './components/Profile';
import { useState, useEffect } from 'react';

import { getUserObject } from './models';

import { login } from './services';

function getUser() {
  return getUserObject();
}


function App() {

  const [stocks, setStocks] = useState([]);
  const [investments, setInvestments] = useState(null);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [addingStock, setAddingStock] = useState(false);
  const [jwt, setJwt] = useState(null);

  // useEffect(() => {
  //   console.log("effect called")
  //   login("abc@xyz.com", "password123");
  //   console.log("effect ended")
  // }, [])

  return (
    <div className="App">

      <div className="title">
        <h1> Stock market portfolio management </h1>
      </div>

      <div className='body'>

        <div className='main'>
          {stocks.map((stock) => <StockComponent stock={stock} />)}
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
