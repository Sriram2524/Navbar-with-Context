// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBgClassName = isDarkTheme
        ? 'navbar-bg-dark'
        : 'navbar-bg-light'

      const websiteLogoImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'

      return (
        <>
          <div className={navbarBgClassName}>
            <img
              className="nav-logo"
              src={websiteLogoImageURL}
              alt="website logo"
            />
            <ul className="unordered-list">
              <li className="list">
                <Link to="/" className={navItemClassName}>
                  Home
                </Link>
              </li>
              <li className="list">
                <Link to="/about" className={navItemClassName}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              type="button"
              onClick={onClickTheme}
              className="theme-button"
            >
              <img className="dark-theme" alt="theme" src={themeImageURL} />
            </button>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
