import './App.css';

import Profile from './components/Profile';
import Main from './components/Main';

import {possibleMainScreens} from './constants';

import {useState} from 'react';
import {getUserDetails} from "./services/user";
import {logOut} from "./services/auth";

const Searchbar = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='searchbar'>
            <input type="text" placeholder="Search for stocks" value={searchTerm}
                   onChange={e => setSearchTerm(e.target.value)}/>
            <input type="button" value="Search" onClick={() => {

                let searchQuery = searchTerm.trim();
                if (searchQuery.length > 0) {
                    props.setMainSearchTerm();
                    props.updateScreen(possibleMainScreens[1]);
                }

            }}/>
        </div>
    )
}

function App() {

    const [user, setUser] = useState(null);
    const [mainScreen, setMainScreen] = useState(possibleMainScreens[0]);
    const [searchTerm, setSearchTerm] = useState("");

    function updateUserDeets() {
        getUserDetails().then(response => setUser(response), e => {
            console.log(e);
            logUserOut();
        });
    }

    function logUserOut() {
        console.log("logging out now!!!!!!!!!");
        logOut().then(response => {
            if (response)
                setUser(null);
            else
                console.log("Couldn't log out!");
        }, e => console.log(e));
    }

    return (
        <div className="App">


            <div id='top-div' className='body d-flex'>
                <div className="left flex-fill" id='left-div'>
                    <Searchbar setMainSearchTerm={setSearchTerm} updateScreen={setMainScreen}/>
                    <Main user={user} screen={mainScreen} updateScreen={setMainScreen} searchQuery={searchTerm}
                          updateUser={updateUserDeets}/>
                    <div>
                        <p>summary</p>
                    </div>
                </div>
                <div className="right flex-fill" id='right-div'>
                    <Profile
                        user={user}
                        logout={logUserOut}
                        updateUserDeets={updateUserDeets}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
