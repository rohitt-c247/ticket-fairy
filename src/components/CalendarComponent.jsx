import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list"; // Enables List (Agenda) view
import interactionPlugin from "@fullcalendar/interaction";
import "../components/CalendarStyles.css"; // Import CSS

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Music Concert 🎵",
      start: "2025-03-06T18:00:00", // 6:00 PM
      end: "2025-03-06T21:00:00", // 9:00 PM
      category: "Music",
      brand: "Sony",
      status: "Active",
      image: "https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M=",
      location: "Los Angeles, CA",
    },
    {
      id: "2",
      title: "Tech Conference 💻",
      start: "2025-03-014T09:00:00", // 9:00 AM
      end: "2025-03-14T12:30:00", // 12:30 PM
      category: "Conference",
      brand: "Google",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      location: "San Francisco, CA",
    },
    {
      id: "3",
      title: "Business Meeting 📅",
      start: "2025-03-25T14:00:00", // 2:00 PM
      end: "2025-03-25T15:30:00", // 3:30 PM
      category: "Meeting",
      brand: "Google",
      status: "Upcoming",
      image: "https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=",
      location: "New York, NY",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Filter events based on search & filters
  const filteredEvents = events.filter((event) => {
    return (
      (searchTerm === "" || event.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "" || event.category === selectedCategory) &&
      (selectedStatus === "" || event.status === selectedStatus)
    );
  });

  // Open event form when clicking on a date
  const handleDateClick = (info) => {
    console.log(info);
    alert(`Open event form for date: ${info.dateStr}`);
  };

  return (
    <div className="calendar-container">
      {/* Search & Filter Options */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search event..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Music">Music</option>
          <option value="Conference">Conference</option>
          <option value="Meeting">Meeting</option>
        </select>
        <select onChange={(e) => setSelectedStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Past">Past</option>
          <option value="Archive">Archive</option>
        </select>
      </div>

      {/* FullCalendar */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek", // Enables multiple views
        }}
        events={filteredEvents}
        eventContent={(eventInfo) => (
          <div className="custom-event">
            <img src={eventInfo.event.extendedProps.image} alt="event" />
            <b>{eventInfo.event.title}</b>
            <p>{eventInfo.event.extendedProps.location}</p>
          </div>
        )}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default CalendarComponent;

