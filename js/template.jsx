import React from 'react';
import {Link} from 'react-router';

export default class Template extends React.Component{
    render(){
        return <div>
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#navbar"
                                    aria-expanded="false"
                                    aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar">Home</span>
                                <span className="icon-bar">Add Recipe</span>
                                <span className="icon-bar">Contact</span>
                            </button>
                            <Link className="navbar-brand" to="/">Project name</Link>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/submit">Add Recipe</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>{/*<--/.nav-collapse -->*/}
                    </div>{/*<--/.container-fluid -->*/}
                </nav>
            </div>
            {this.props.children}
        </div>
    }
}
