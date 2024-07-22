import React from 'react'
import GoogleSlideWidget from './components/GoogleSlideWidget'
import PomodoroTimer from './components/PomodoroTimer'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Digital Notice Board</h1>
      </header>
      <main className="widgets">
        <GoogleSlideWidget />
        <PomodoroTimer />
      </main>
    </div>
  )
}

export default App
