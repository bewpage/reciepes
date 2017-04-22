import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import Template from './template.jsx';
import Main from './main.jsx';
import Submit from './submit.jsx';

document.addEventListener('DOMContentLoaded', function(){


    class Contact extends React.Component {
        render() {
            return <h1>Contact us at contact@example.com</h1>;
        }
    }

    class NotFound extends React.Component {
        render() {
            return <h1>404,Nothing is here</h1>;
        }
    }

    class App extends React.Component {
        render() {
            return <Router history={hashHistory}>
                <Route path='/' component={Template}>
                    <IndexRoute component={Main} />
                    <Route path='/submit' component={Submit} />
                    <Route path='/contact' component={Contact} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>;
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});