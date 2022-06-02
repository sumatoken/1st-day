import React from 'react'

const Todo = ({userId, title, completed, id}) => {
  return (
    <>
     <div className="card" >id: {id}
  <div className="card-body">
    Title: <h5 className="card-title"> {title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">userId: {userId}</h6>
    {
      completed? 
      <button type="button" className="btn btn-success">Success</button>
      : 
      <button type="button" className="btn btn-danger">Danger</button>

    }
  </div>
</div>
    </>
  )
}

export default Todo