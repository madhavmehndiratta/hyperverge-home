import React, { useState, useEffect } from 'react'
import './PomodoroTimer.css'

const PomodoroTimer: React.FC = () => {
  const [minutes, setMinutes] = useState<number>(25)
  const [seconds, setSeconds] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval!)
            setIsActive(false)
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    } else if (!isActive && minutes !== 0) {
      clearInterval(interval!)
    }
    return () => clearInterval(interval!)
  }, [isActive, minutes, seconds])

  const resetTimer = () => {
    setMinutes(25)
    setSeconds(0)
    setIsActive(false)
  }

  return (
    <div className="widget pomodoro-timer">
      <h2>Pomodoro Timer</h2>
      <div className="timer">
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="controls">
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default PomodoroTimer
