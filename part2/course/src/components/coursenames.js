import Exercises from "./exercises"
const Course = ({course}) => {
    const total=course.parts.reduce((a,b) => a+b.exercises, 0)
    return (
      <div>
        <h2>{course.name}</h2>
        {course.parts.map(part=> <Exercises key={part.id} name={part.name} number={part.exercises}/>)}
        <b>total of {total} exercises</b>
      </div>
    )
  }

  export default Course