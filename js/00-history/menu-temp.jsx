import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


document.addEventListener('DOMContentLoaded', function(){

    class NavComponent extends React.Component{

        burgerToggle = () => {
            const linksEl = document.querySelector('.narrowLinks');
            if (linksEl.style.display === 'block') {
                linksEl.style.display = 'none';
            } else {
                linksEl.style.display = 'block';
            }
        };

        render(){
            return <div>
                    <navbar>
                            <nav>
                                <div className="navWide">
                                    <div className="wideDiv">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                                <div className="navNarrow">
                                    <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                                    <div className="narrowLinks">
                                        <a href="#" onClick={this.burgerToggle}>Link 1</a>
                                        <a href="#" onClick={this.burgerToggle}>Link 2</a>
                                        <a href="#" onClick={this.burgerToggle}>Link 3</a>
                                    </div>
                                </div>
                            </nav>
                    </navbar>
                </div>
        };
    }

    ReactDOM.render(
        <NavComponent />,
        document.getElementById('app')
    );
});