import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CharacterCreate() {
  const [characterName, setCharacterName] = useState('')
  const [characterClass, setCharacterClass] = useState('')
  const [characterRace, setCharacterRace] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual character creation logic
    console.log('Character created:', { characterName, characterClass, characterRace })
    navigate('/characters')
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Create Character</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Character Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="class" className="form-label">Class:</label>
                  <select
                    id="class"
                    className="form-select"
                    value={characterClass}
                    onChange={(e) => setCharacterClass(e.target.value)}
                    required
                  >
                    <option value="">Select a class</option>
                    <option value="barbarian">Barbarian</option>
                    <option value="bard">Bard</option>
                    <option value="cleric">Cleric</option>
                    <option value="druid">Druid</option>
                    <option value="fighter">Fighter</option>
                    <option value="monk">Monk</option>
                    <option value="paladin">Paladin</option>
                    <option value="ranger">Ranger</option>
                    <option value="rogue">Rogue</option>
                    <option value="sorcerer">Sorcerer</option>
                    <option value="warlock">Warlock</option>
                    <option value="wizard">Wizard</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="race" className="form-label">Race:</label>
                  <select
                    id="race"
                    className="form-select"
                    value={characterRace}
                    onChange={(e) => setCharacterRace(e.target.value)}
                    required
                  >
                    <option value="">Select a race</option>
                    <option value="human">Human</option>
                    <option value="elf">Elf</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="halfling">Halfling</option>
                    <option value="dragonborn">Dragonborn</option>
                    <option value="gnome">Gnome</option>
                    <option value="half-elf">Half-Elf</option>
                    <option value="half-orc">Half-Orc</option>
                    <option value="tiefling">Tiefling</option>
                  </select>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className="btn btn-primary">Create Character</button>
                  <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
