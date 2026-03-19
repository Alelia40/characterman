import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

interface InventoryItem {
  id: string
  name: string
  quantity: number
}

export default function CharacterPlay() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // TODO: Replace with actual character data fetching
  const [characterName] = useState('Example Character')
  const [characterClass] = useState('Fighter')
  const [characterRace] = useState('Human')

  const [inventory, setInventory] = useState<InventoryItem[]>([
    { id: '1', name: 'Longsword', quantity: 1 },
    { id: '2', name: 'Shield', quantity: 1 },
    { id: '3', name: 'Rope', quantity: 50 },
  ])

  const [newItemName, setNewItemName] = useState('')
  const [newItemQuantity, setNewItemQuantity] = useState(1)

  const addItem = () => {
    if (newItemName.trim()) {
      const newItem: InventoryItem = {
        id: Date.now().toString(),
        name: newItemName,
        quantity: newItemQuantity,
      }
      setInventory([...inventory, newItem])
      setNewItemName('')
      setNewItemQuantity(1)
    }
  }

  const removeItem = (itemId: string) => {
    setInventory(inventory.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: string, newQuantity: number) => {
    setInventory(
      inventory.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const handleRoll = (diceType: number) => {
    const roll = Math.floor(Math.random() * diceType) + 1
    console.log(`Rolled d${diceType}: ${roll}`)
    alert(`You rolled a ${roll} on d${diceType}!`)
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <h1>{characterName}</h1>
            <p className="mb-0">
              <strong>Class:</strong> {characterClass} | <strong>Race:</strong> {characterRace}
            </p>
          </div>
          <button onClick={() => navigate('/characters')} className="btn btn-secondary">
            Back to Characters
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <section className="inventory-section">
                <h2>Inventory</h2>
                {inventory.length === 0 ? (
                  <p>No items in inventory</p>
                ) : (
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventory.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.id, parseInt(e.target.value) || 1)
                              }
                              className="form-control form-control-sm w-50"
                            />
                          </td>
                          <td>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="btn btn-danger btn-sm"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <div className="add-item-form mt-4">
                  <h3>Add Item</h3>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Item name"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addItem()}
                    />
                    <input
                      type="number"
                      min="1"
                      className="form-control"
                      placeholder="Quantity"
                      value={newItemQuantity}
                      onChange={(e) => setNewItemQuantity(parseInt(e.target.value) || 1)}
                    />
                    <button onClick={addItem} className="btn btn-primary">
                      Add
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-4">
              <section className="actions-section">
                <h2>Dice Rolls</h2>
                <div className="d-grid gap-2">
                  <button onClick={() => handleRoll(4)} className="btn btn-outline-dark">d4</button>
                  <button onClick={() => handleRoll(6)} className="btn btn-outline-dark">d6</button>
                  <button onClick={() => handleRoll(8)} className="btn btn-outline-dark">d8</button>
                  <button onClick={() => handleRoll(10)} className="btn btn-outline-dark">d10</button>
                  <button onClick={() => handleRoll(12)} className="btn btn-outline-dark">d12</button>
                  <button onClick={() => handleRoll(20)} className="btn btn-outline-dark">d20</button>
                  <button onClick={() => handleRoll(100)} className="btn btn-outline-dark">d100</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
