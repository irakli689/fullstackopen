import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const onGood = ()=>{
     setGood(good+1)
     setAll(all+1)
  }
  const onNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }
  const onBad = () => {
    setBad(bad+1)
    setAll(all+1)
  }
  const average = () => {
    return ((good*1)+(neutral*0)+(bad*-1))/all
  }
  const positive = () => {
    return good/all
  }
  const Button = (props) => {
    return (
      <div>
        <button onClick={props.func}>{props.text}</button>
      </div>
    )
  }
  const StatisticLine = (props) => {
    return (
      <div>
        <p>{props.text} {props.value}</p>
      </div>
    )
  }
  const Buttons = () => {
    return (
      <div>
        <Button text='good' func={onGood}/>
        <Button text='neutral' func={onNeutral}/>
        <Button text='bad' func={onBad}/>
      </div>
    )
  }
  const Statistics = (props) => {
    if (props.all==0){
      return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    }
    return(
      <div>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='all' value={props.all}/>
        <StatisticLine text='average' value={props.average}/>
        <StatisticLine text='positive' value={props.positive}/>
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Buttons />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average()} positive={positive()}/>
    </div>
  )
}

export default App

