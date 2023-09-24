import React from 'react';
import './project.css';

const Projects = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("HELLO")
  }
  return (
  <>
  <div className='projectFormCont'>
    <h1>PROJECT DETAILS</h1>
    <form onSubmit={handleSubmit} className='projectFrom'>
      <div>
      <label htmlFor="pName">Project Name:</label>
      <input type="text" placeholder='Project '/>
      </div>
      <div>
      <label htmlFor="mName">Mentor's Name:</label>
      <input type="text" placeholder='Mentors'/>
      </div>
      <div>
      <label htmlFor="cName">Contributor's Name:</label>
      <input type="text" placeholder='Contributors'/>
      </div>
      <div>
      <label htmlFor="desc">Description:</label>
      <textarea rows={10} type="text" placeholder='Description '/>
      </div>
      <div>
      <label htmlFor="summ">Summary:</label>
      <textarea rows={10} type="text" placeholder='Summary '/>
      </div>
      <button style={{"backgroundColor": "white"}} className='projectSubmit' type="submit">SUBMIT</button>
    </form>
    </div>
  </>
  )
}

export default Projects