import React, { useState } from 'react';
import { Header } from "../../components/components";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { enUS } from 'date-fns/locale';

import "./Calendar.css";

// Localizer for react-big-calendar using date-fns
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

// Define the Event type for our custom calendar
interface Event {
  title: string;
  date: string; // Original event structure (before conversion to react-big-calendar format)
}

// Define the type for react-big-calendar events
interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}

const EventCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(
    [
      {
        "title": "Meeting with zaid",
        "date": "2024-10-9"
      },
    {
      "title": "Lawyers call",
      "date": "2024-10-9"
    },
    {
      "title": "going supreme court ",
      "date": "2024-10-22"
    },
    {
      "title": "ztest 2",
      "date": "2024-10-25"
    },
    {
      "title": "ztest 3",
      "date": "2024-10-24"
    }
  ]
);
  const [eventTitle, setEventTitle] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');

  // Add a new event to the events list
  const addEvent = (): void => {
    if (eventTitle && eventDate) {
      setEvents([...events, { title: eventTitle, date: eventDate }]);
      setEventTitle('');
      setEventDate('');
    }
  };

  // Download the events as a JSON file
  const handleDownload = (): void => {
    const json = JSON.stringify(events, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'events.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Format the events for react-big-calendar (convert date strings to Date objects)
  const formatEventsForBigCalendar = (): CalendarEvent[] => {
    return events.map((event) => {
      const eventDate = new Date(event.date);
      return {
        title: event.title,
        start: eventDate, // Start and end are the same for single-day events
        end: eventDate,
      };
    });
  };

  return (
    <div>
      <Header />
      <div className="addevent-wrap">
      
      <div className="input-group">
      <h6 className="addevent-text">Add Event </h6>
      <input
      className="form-control"
        type="text"
        placeholder="Event Title"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />
      <input
      className="form-control"
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      
      <button onClick={addEvent} className="btn btn-success">Add Event</button>
      <button onClick={handleDownload} className="btn btn-warning">Save</button>
      </div>
      </div>

      {/* list of custom calendar events
      <h2>Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul> */}

      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={formatEventsForBigCalendar()} // Pass the formatted events
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: '5px' }}
        />
      </div>
    </div>
  );
};

export default EventCalendar;
