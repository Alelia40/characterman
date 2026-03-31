import { Outlet, Link, useNavigate } from 'react-router-dom'
import './App.css'
import { useAuth } from './AuthContext'

function App() {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={isAuthenticated ? '/home' : '/'}>Character Manager</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/characters">Characters</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="btn btn-primary" to="/">Login</Link>
                </li>
              )}
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
