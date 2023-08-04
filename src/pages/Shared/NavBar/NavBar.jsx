import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">A to Z It Job Solution</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    
      <div>
      
      </div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-5">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link" aria-current="page" to='/about'>About</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link" aria-current="page" to='/contact'>Contact</Link>
        </li>
        <li className="nav-item btn btn-sm bg-black  me-2">
          <a className="nav-link active text-white" aria-current="page" href="#">Login</a>
        </li>
        <button className="btn bg-black btn-sm text-white">Logout</button>
      </ul>
      
      
    </div>
  </div>
</nav>
        </>
    );
};

export default NavBar;