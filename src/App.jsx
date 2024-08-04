import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

function App() {

  return (
    <>
		<div className='min-h-screen bg-background'>
			<About />
			<Projects />
			<Experience />
			<Contact />
		</div>
    </>
  )
}

export default App
