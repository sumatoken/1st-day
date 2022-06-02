import React from 'react'
import { Link } from 'react-router-dom'
import Todo from '../components/Todo'

const People = () => {
    const [people, setPeople] = React.useState([])
    React.useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        setPeople(json)
      })
      
      
    }, [])
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6">
          {people.filter((p) => p.completed ).map((p, i) => (
      <Todo key={i} userId={p.userId} title={p.title} id={p.id} completed={p.completed} />
    )   
    )}
        </div>
        <div className="col-6">
    {people.filter((p) => !p.completed ).map((p, i) => (
      <Todo key={i} userId={p.userId} title={p.title} id={p.id} completed={p.completed} /> 
    )
    )}

        </div>
      </div>
    <div>People</div>  
     </div>
)
}

export default People