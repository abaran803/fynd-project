import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TicketPanel from './pages/TicketPanel';
import AllTickets from './pages/AllTickets';

function App() {

  const [generateTicket, setGenerateTicket] = useState();
  const [showTicket, setShowTicket] = useState();

  useEffect(() => {
    setGenerateTicket(true);
  }, []);
  
  return (
    <div className="App">
      <Navbar setShowTicket={setShowTicket} setGenerateTicket={setGenerateTicket} />
      {generateTicket && <TicketPanel />}
      {showTicket && <AllTickets />}
    </div>
  );
}

export default App;
