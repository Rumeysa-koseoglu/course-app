import React from 'react'

function Course({ course }) {
    const {id, title, description, price, image} = course; //we destructured our courses
  return (
    <div className='course'>
      <div>
        <img src={image} width={250} height={150}/>
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h5>{price}</h5>
        <h5>{description}</h5>
      </div>
    </div>
  )
}

export default Course
