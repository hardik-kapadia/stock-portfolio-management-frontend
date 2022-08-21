import './App.css';

import Profile from './components/Profile';
import Main from './components/Main';

import {possibleMainScreens} from './constants';

import {useEffect, useState} from 'react';
import {getUserDetails} from "./services/user";


const Searchbar = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='searchbar'>
            <input type="text" placeholder="Search for stocks" value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}/>
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

        console.log('something');

        getUserDetails().then(
            response => {
                console.log("response is: ", response);
                console.log("invvvvs of respo: ", response.investments);
                setUser(response);
                console.log("1111111111 epic user: ", user);
            }
            , e => console.log(e)
        );

    }

    useEffect(() => {
        console.log("!!!!!!!!!!!user is now----: ", user)
    }, [user])

    return (
        <div className="App">

            <div className="title">
                <h1> Stock market portfolio management </h1>
            </div>

            <div className='body'>

                <div className='main'>
                    <Searchbar setMainSearchTerm={setSearchTerm} updateScreen={setMainScreen}/>
                    <Main user={user} screen={mainScreen} updateScreen={setMainScreen} searchQuery={searchTerm}
                          updateUser={updateUserDeets}/>
                </div>

                <div className='profile'>
                    <Profile
                        user={user}
                        logout={() => {
                            console.log("logging out noww!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                            setUser(null)
                        }
                        }
                        updateUserDeets={updateUserDeets}
                    />
                </div>

            </div>

            <div className='summary'>

            </div>

        </div>
    );
}

export default App;
