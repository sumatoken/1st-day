import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home</div>
     <nav>
        <Link to="/about">About</Link>
     </nav>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}

export default Home