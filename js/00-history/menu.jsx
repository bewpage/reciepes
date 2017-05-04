import React from 'react';
import {Link} from 'react-router';
import { Nav } from 'react-bootstrap';


// export default class Template extends React.Component{
//     render(){
//         return <div>
//             <div>
//                 <nav className="navbar navbar-default">
//                     <div className="container-fluid">
//                         <div className="navbar-header">
//                             <button type="button" className="navbar-toggle collapsed"
//                                     data-target="#navbar"
//                                     data-toggle="collapse"
//                                     aria-expanded="false"
//                                     aria-controls="navbar">
//                                 <span className="sr-only">Toggle navigation</span>
//                                 <span className="icon-bar"></span>
//                                 <span className="icon-bar"></span>
//                                 <span className="icon-bar"></span>
//                             </button>
//                             <Link className="navbar-brand" to="/">MyCook Book</Link>
//                         </div>
//                         <div id="navbar" className="navbar-collapse collapse">
//                             <ul className="nav navbar-nav">
//                                 <li key="1"><Link to="/">Home</Link></li>
//                                 <li key="2"><Link to="/submit">Add Recipe</Link></li>
//                                 <li key="3"><Link to="/contact">Contact</Link></li>
//                             </ul>
//                         </div>{/*<--/.nav-collapse -->*/}
//                     </div>{/*<--/.container-fluid -->*/}
//                 </nav>
//             </div>
//             {this.props.children}
//         </div>
//     }
// }




const navbarInstance = (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

ReactDOM.render(navbarInstance, mountNode);