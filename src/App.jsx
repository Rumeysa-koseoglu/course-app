import { useState } from 'react'
import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from './Course'
import './css/Course.css'

function App() {

  return (
    <>
    <Header/>
<div>
<p className='subheading-all-courses'>All Courses</p>
</div>
    <div className='course-main'>
    {
      courses?.map((course) => (
        <Course key={course.id} course={course} /** course={course} is our props  */ /> 
      ))
    }
    </div>
    </>
  )
}

export default App
