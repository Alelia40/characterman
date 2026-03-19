import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface Character {
  id: string
  name: string
  class: string
  race: string
  level: number
}

export default function Characters() {
  const navigate = useNavigate()
  
  // TODO: Replace with actual character data fetching
  const [characters] = useState<Character[]>([
    {
      id: '1',
      name: 'Aragorn',
      class: 'Fighter',
      race: 'Human',
      level: 8,
    },
    {
      id: '2',
      name: 'Legolas',
      class: 'Ranger',
      race: 'Elf',
      level: 7,
    },
    {
      id: '3',
      name: 'Gimli',
      class: 'Barbarian',
      race: 'Dwarf',
      level: 7,
    },
    {
      id: '4',
      name: 'Gandalf',
      class: 'Wizard',
      race: 'Human',
      level: 12,
    },
  ])

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>My Characters</h1>
        <button
          onClick={() => navigate('/characters/create')}
          className="btn btn-primary"
        >
          Create New Character
        </button>
      </div>

      {characters.length === 0 ? (
        <div className="text-center">
          <p>You haven't created any characters yet!</p>
          <button
            onClick={() => navigate('/characters/create')}
            className="btn btn-primary"
          >
            Create Your First Character
          </button>
        </div>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div key={character.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">
                    <strong>Class:</strong> {character.class} <br />
                    <strong>Race:</strong> {character.race} <br />
                    <strong>Level:</strong> {character.level}
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={() => navigate(`/characters/${character.id}/play`)}
                      className="btn btn-primary me-2"
                    >
                      Play
                    </button>
                    <button
                      onClick={() => {
                        // TODO: Implement edit character (navigate to edit page if created)
                        console.log('Edit character', character.id)
                      }}
                      className="btn btn-secondary"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <button onClick={() => navigate('/')} className="btn btn-secondary mt-4">
        Back to Home
      </button>
    </div>
  )
}
