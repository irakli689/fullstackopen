import { useState, useEffect } from 'react'
//import axios from 'axios'
import './index.css'
import List from './components/list'
import Filter from './components/filter'
import Personform from './components/personform'
import personService from './services/person'
import Notification from './components/notification'

const App = () => {
  const [persons, setPersons] = useState([])
  
  

  useEffect(()=>{
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons=>{
        setPersons(initialPersons)
      })
  },[])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState ('')
  const [filter, setFilter] = useState ('')
  const [notMessage, setNotMessage] = useState(null)
  const [className, setClassName] = useState(null)

  const handleName = (event) => {
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
    
    const people = persons.map(person=>person.name);

    if (people.includes(newName)){
      const suspect = persons.find(p => p.name === newName)
      const num = suspect.id
      if(window.confirm(`${suspect.name} is already added to phonebook, replace the old number with a new one?`)){
        personService
        .update(num, newObject)
        .then(response => {
          setPersons(persons.map(p => p.id!==num ? p : response))
        })
        .catch(error => {
          setClassName('err')
          setNotMessage(`Information of ${suspect.name} has already been removed from server`)
          setTimeout(() => {setNotMessage(null)}, 5000)
          //alert(`Information of ${suspect.name} has already been removed from server`)
          setPersons(persons.filter(p => p.id !== num))
        })
      }
      setClassName('notification')
      setNotMessage(`Updated ${newName}`)
      setTimeout(() => {setNotMessage(null)}, 5000)
      
    }else if(!newName || !newNumber || isNaN(newNumber)){
      alert('Enter name and number correctly!')

    } else{
      personService
        .create(newObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
        })
      setClassName('notification')
      setNotMessage(`Added ${newName}`)
      setTimeout(() => {setNotMessage(null)}, 5000)
    }
  }
  
  const handleDelete = (name, id) => {
      console.log(`delete ${id} item`)
      //const person = persons.find(n => n.id===id);
      //const deletedPerson = {...person};
      if(window.confirm(`Delete ${name}?`)){
        personService
        .dlt(id)
        .then(response => {
          setPersons(persons.filter (person => person.id !==id))
        })
      }
      
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notMessage} className={className}/>
      <Filter value={filter} handleChange={e=>setFilter(e.target.value)}/>
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
            return filter.toLowerCase() === ''
              ? item
              : item.name.toLowerCase().includes(filter)
          })
          .map(item=> <List key={item.name} item={item} onDelete={() => handleDelete(item.name, item.id)}/>)
        }
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
