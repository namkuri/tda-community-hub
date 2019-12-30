import React, { Component } from 'react';
/*import Home from './components/Home';*/
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Auth } from 'pages';
import HeaderContainer from 'containers/Base/HeaderContainer';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <Route exact path="/" component={Home} />
                <Route path="/Auth" component={Auth} />
            </div>
        );
    }
}


export default App;