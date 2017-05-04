import React from 'react';
import {Link} from 'react-router';

export default class Template extends React.Component{
    render(){
        return <div>
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed"
                                    data-target="#navbar"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">MyCook Book</Link>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li key="1"><Link to="/">Home</Link></li>
                                <li key="2"><Link to="/submit">Add Recipe</Link></li>
                                <li key="3"><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>{/*<--/.nav-collapse -->*/}
                    </div>{/*<--/.container-fluid -->*/}
                </nav>
            </div>
            {this.props.children}
        </div>
    }
}
