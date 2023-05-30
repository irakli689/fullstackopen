import { useState } from 'react'

const Anectodeofday = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdote}</p>
      <button onClick={props.vote}>vote</button>
      <button onClick={props.nextanecdote}>next anecdote</button>
    </div>
  )
}
const Anecdotewithmostvotes = (props) => {
  return (
    <div>
      <h1>Anecdotes with most votes</h1>
      <p>{props.maxvotedanecdote}</p>
      <p>has {props.novotes} votes</p>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const maxVote = Math.max(...votes);
  const bestAnecdote = anecdotes[votes.indexOf(maxVote)];
  
  const Voteanecdote = () => {
    const copy=[...votes]
    copy[selected]+=1
    setVotes(copy)
  }
  const Nextanecdote = () => {
    const randomindex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomindex)
  }
  return (
    <div>
      <Anectodeofday anecdote={anecdotes[selected]} nextanecdote={Nextanecdote} vote={Voteanecdote}/>
      <Anecdotewithmostvotes maxvotedanecdote={bestAnecdote} novotes={maxVote}/>
    </div>
  )
}

export default App
