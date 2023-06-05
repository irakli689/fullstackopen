import { useState } from 'react'
import List from './components/list'
import Filter from './components/filter'
import Personform from './components/personform'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('')
  const [namesArr, setNamesArr] = useState([...persons.map(person=>person.name)])
  const [newNumber, setNewNumber] = useState ('')
  const [filter, setFilter] = useState ('')

  
  const handleFilter = (event) => {
    const filt=event.target.value
    setFilter(event.target.value)
    console.log("filt", filter)
    setPersons(persons.filter(person=>person.name.includes(filt)))
  }
  const handleName = (event) => {
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
      <Filter value={filter} handleChange={handleFilter}/>
      <h3>Add a new</h3>
      <Personform onSubmit={addContact} 
                  name={newName} 
                  handleNameChange={handleName}
                  number={newNumber}
                  handleNumberChange={handleNumber}
      />
      <h3>Numbers</h3>
      <ul>
        <List obj={persons} />
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
