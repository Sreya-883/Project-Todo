import React from 'react'
import { Link } from 'react-router-dom'

function Navigationbar() {
  function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
  
    return previous;
  }
  
  console.log(getPreviousDay()); // yesterday
  
  // ️ Fri Dec 23 2022
  console.log(getPreviousDay(new Date('2022-12-24')));
  
  //  Sat Dec 31 2022
  console.log(getPreviousDay(new Date('2023-01-01')));
  return (
    <div className=' bg-light mt-1 fw-bold'>
      
      <nav className="navbar navbar-expand-md navbar-light ">
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mt-2 fs-5">
      <li className="nav-item">
        <Link className="nav-link" to="/">AddTask</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tasklist">TaskList</Link>
      </li>
    </ul>
  </div>
</nav>  
<hr/>
    </div>
  )
}

export default Navigationbar