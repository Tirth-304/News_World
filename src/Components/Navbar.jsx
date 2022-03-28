import react , {Component} from 'react'
import {Link} from "react-router-dom";

export default class App extends Component{
  render(){
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                  <Link className="navbar-brand mx-2" to="/"> News World </Link>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to="/"> Home </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span id="selected"> Categories </span><span className="caret"></span>
                          </Link>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/business">Business</Link></li>
                            <hr className="dropdown-divider"/>
                            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                            <hr className="dropdown-divider"/>
                            <li><Link className="dropdown-item" to="/">General</Link></li>
                            <hr className="dropdown-divider"/>
                            <li><Link className="dropdown-item" to="/health">Health</Link></li>
                            <hr className="dropdown-divider"/>
                            <li><Link className="dropdown-item" to="/science">Science</Link></li>
                            <hr className="dropdown-divider"/>
                            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                            <hr className="dropdown-divider"/>
                            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                          </ul>
                        </li>
                    </ul>
                  </div>
              </div>
          </nav>
        </div>
      </>
    );
  }
}