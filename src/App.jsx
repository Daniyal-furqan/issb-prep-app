import { useState } from 'react';
import { issbData } from './data/issbData';
import Dashboard from './components/Dashboard';
import ScreeningTest from './components/ScreeningTest';
import PsychologicalTest from './components/PsychologicalTest';
import GTOTask from './components/GTOTask';
import DeputyPresident from './components/DeputyPresident';

function App() {
  const [activeSegment, setActiveSegment] = useState(null);

  const renderContent = () => {
    if (!activeSegment) {
      return <Dashboard data={issbData} onSelectSegment={setActiveSegment} />;
    }

    const segmentData = issbData.segments.find(s => s.segment_id === activeSegment);

    switch (activeSegment) {
      case 'screening':
        return <ScreeningTest segment={segmentData} onBack={() => setActiveSegment(null)} />;
      case 'psychological':
        return <PsychologicalTest segment={segmentData} onBack={() => setActiveSegment(null)} />;
      case 'gto':
        return <GTOTask segment={segmentData} onBack={() => setActiveSegment(null)} />;
      case 'deputy_president':
        return <DeputyPresident segment={segmentData} onBack={() => setActiveSegment(null)} />;
      default:
        return <Dashboard data={issbData} onSelectSegment={setActiveSegment} />;
    }
  };

  return (
    <div className="animate-fade-in">
      {activeSegment && (
        <button className="btn btn-secondary mb-8" onClick={() => setActiveSegment(null)}>
          &larr; Back to Dashboard
        </button>
      )}
      {renderContent()}
    </div>
  );
}

export default App;
