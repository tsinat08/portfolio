import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
/*-----pages-----*/
import {Home} from './Home';

class App extends Component{

    render(){
        return(
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;

