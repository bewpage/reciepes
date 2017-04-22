import React from 'react';


export default class Menu extends React.Component{
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
                            <a className="navbar-brand" href="#">Project name</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Add Recipe</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>{/*<--/.nav-collapse -->*/}
                    </div>{/*<--/.container-fluid -->*/}
                </nav>
            </div>
            {this.props.children}
        </div>
    }
}
