import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDollar} from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container">
        <p className="navbar-brand text-light fw-bold" style={{fontSize:"25px"}} href="#">Xplore  <i className="fab fa-staylinked"></i>kill</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                    <a className="nav-link text-light" aria-current="page" href="#">home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">course</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" aria-disabled="true">about</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" aria-disabled="true">contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}
