import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mt-5">
        <div className="col-md-8">
          <h1 className="display-4">Welcome to your D&D Character Management System</h1>
          <p className="lead">Create, manage, and view your characters with ease.</p>
        </div>
      </div>
      <div className="row justify-content-center text-center mt-4">
        <div className="col-md-4 mb-3">
          <Link to="/characters/create" className="btn btn-primary btn-lg w-100">
            Create New Character
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/characters" className="btn btn-secondary btn-lg w-100">
            View Characters
          </Link>
        </div>
      </div>
    </div>
  )
}
