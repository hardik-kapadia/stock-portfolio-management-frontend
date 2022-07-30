import './App.css';

import Profile from './components/Profile';
import Main from './components/Main';

import { possibleMainScreens } from './constants';

import { useState } from 'react';
import { getUserDetails } from "./services/user";


const Searchbar = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='searchbar'>
            <input type="text" placeholder="Search for stocks" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            <input type="button" value="Search" onClick={() => {

                let searchQuery = searchTerm.trim();
                if (searchQuery.length > 0) {
                    props.setMainSearchTerm();
                    props.updateScreen(possibleMainScreens[1]);
                }

            }} />
        </div>
    )

}


function App() {

    const [user, setUser] = useState(null);
    const [mainScreen, setMainScreen] = useState(possibleMainScreens[0]);
    const [searchTerm, setSearchTerm] = useState("");

    function updateUserDeets() {
        setUser(getUserDetails().then(response => response,e => null));
    }

    return (
        <div className="App">

            <div className="title">
                <h1> Stock market portfolio management </h1>
            </div>

            <div className='body'>

                <div className='main'>
                    <Searchbar setMainSearchTerm={setSearchTerm} updateScreen={setMainScreen} />
                    <Main user={user} screen={mainScreen} updateScreen={setMainScreen} searchQuery={searchTerm}
                        updateUser={updateUserDeets} />
                </div>

                <div className='profile'>
                    <Profile user={user} logout={() => {
                        setUser(null)
                    }} />
                </div>

            </div>

            <div className='summary'>

            </div>

        </div>
    );
}

export default App;
