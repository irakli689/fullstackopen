import { useState } from 'react'
import List from './list'
const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [namesArr, setNamesArr] = useState([])
  const [newNumber, setNewNumber] = useState ('')
  
  const handleNotChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const addContact = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber
    }
    
    if (namesArr.includes(newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      setPersons(persons.concat(newObject))
      setNamesArr(namesArr.concat(newName))
      setNewName('')
      setNewNumber('')
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newName} onChange={handleNotChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <List obj={persons} />
      </ul>
      <div>debug: {newName}</div>
      
      ...
      {/* <ul>{namesArr.map(item=><li>{item}</li>)}</ul> */}
    </div>
  )
}

export default App
