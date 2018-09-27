import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from "./silly/learn/home/Home";
import Study from "./silly/learn/study/Study";
import Test from "./silly/learn/test/Test";
import Type from "./silly/learn/type/Type";
import Play from "./silly/learn/play/Play";
import News from "./silly/learn/news/News";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/study" component={Study}/>
                    <Route path="/type" component={Type}/>
                    <Route path="/play" component={Play}/>
                    <Route path="/news" component={News}/>

                    <Route path="/test" component={Test}/>
                </div>
            </Router>
        );
    }
}

export default App;
