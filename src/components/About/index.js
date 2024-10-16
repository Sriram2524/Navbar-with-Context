import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="container">
          <Navbar />
          {isDarkTheme ? (
            <div className="home-dark-con">
              <img
                className="home-dark"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
              <h1 className="dark-home-heading">About</h1>
            </div>
          ) : (
            <div className="home-light-con">
              <img
                className="home-light"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
              <h1 className="light-home-heading">About</h1>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
