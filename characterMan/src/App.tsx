import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Character Manager</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="btn btn-primary" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App

