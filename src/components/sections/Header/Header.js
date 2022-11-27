import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
  return (
    <header className="header">
      <h1>{props.logo}</h1>
      <nav>
        <ul>
          <li>
            {/* komponent Link od react-router-dom, rozni sie tym, ze zamiast atrybutu href jest atrybut to */}
            <Link to="/add">
              Dodaj nowy post
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;