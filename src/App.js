import './styles/App.scss'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="header-home">
      <div className="container">
        <Navbar />
        <div className="header-content">
          <h1>
            I Am Jessica The {/* <Typing> */}
            <span
              className="txt-type"
              data-wait="3000"
              data-words="[Full Stack Developer, iOS Developer]"
            ></span>
            {/* </Typing> */}
          </h1>
          <p className="lead">I specialize in JavaScript, React and Swift</p>
          <a href="/" className="btn-light">
            View My Work
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
