// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
              <h1 className="dark-home-heading">Home</h1>
            </div>
          ) : (
            <div className="home-light-con">
              <img
                className="home-light"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
              <h1 className="light-home-heading">Home</h1>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
