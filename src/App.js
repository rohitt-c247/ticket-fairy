import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import './App.css';

function App() {
  return (
	  <Router>
      		<Routes>
        		<Route path="/" element={<h1>Welcome to Ticket Fairy <br/><br/><a href="/calendar">Click To View Calender</a></h1>} />
        		<Route path="/calendar" element={<CalendarPage />} />
      		</Routes>
    	</Router>
  );
}

export default App;
