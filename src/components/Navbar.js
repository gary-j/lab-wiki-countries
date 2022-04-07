import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    //   <p>COUCOUCOUCOU</p>
    <nav className="navbar bg-dark">
      <ul className="nav">
        <li className="nav-item">
          <Link className='nav-link' to="/">{props.appName}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
