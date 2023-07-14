import { useEffect, useState } from 'react'
//import axios from 'axios'
import List from './components/list'
import Filter from './components/filter'
import Personform from './components/personform'
import personService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect ( () => {
    console.log('effect')
    personService
      .get()
      .then(response=>{
        console.log('promise is fulfilled')
        setPersons(response)
      })
  },[])
  
  console.log('render', persons.length, 'notes')
  const [newName, setNewName] = useState('')
  const [namesArr, setNamesArr] = useState([...persons.map(person=>person.name)])
  const [newNumber, setNewNumber] = useState ('')
  const [search, setSearch] = useState ('')

  
  
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
    personService
      .create(newObject)
      .then(response=>{
        console.log(response)
      })

    if (namesArr.includes(newName)){
      alert(`${newName} is already added to phonebook`)
    } else{
      setPersons(persons.concat(newObject))
      setNamesArr(namesArr.concat(newName))
      setNewName('')
      setNewNumber('')
    }
  }
  
  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete this person")) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
        })
        .catch((err) => alert(err))
    } else {
      return
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={search} handleChange={(e) => setSearch(e.target.value)}/>
      <h3>Add a new</h3>
      <Personform onSubmit={addContact} 
                  name={newName} 
                  handleNameChange={handleName}
                  number={newNumber}
                  handleNumberChange={handleNumber}
      />
      <h3>Numbers</h3>
      <ul>
        {persons
          .filter((item) => {
            return search.toLowerCase() === ''
              ? item
              : item.name.toLowerCase().includes(search)
          })
          .map(item=> <List item={item} dlt={()=>handleDelete(item.id)}/>)}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
