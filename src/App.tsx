import React from 'react';
import GoogleSlideWidget from './components/GoogleSlideWidget';
import PomodoroTimer from './components/PomodoroTimer';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-3xl">Digital Notice Board</h1>
      </header>
      <main className="flex-grow p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <GoogleSlideWidget />
        <PomodoroTimer />
        {/* Add more widgets here as needed */}
      </main>
    </div>
  );
};

export default App;
