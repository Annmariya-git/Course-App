import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import InsertCourse from './components/InsertCourse'
import ViewAllCourses from './components/ViewAllCourses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InsertCourse />
      <ViewAllCourses />
    </>
  )
}

export default App
