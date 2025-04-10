import React, { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";

function App() {
  const [reminderMsg, setReminderMsg] = useState("");
  const [remindAt, setRemindAt] = useState();

  const addReminder = () => {};

  return (
    <div className="App">
      <div className="homepage">
        <div className="homepage_header">
          <h1>Remind Me 🙋‍♂️</h1>
          <input
            type="text"
            placeholder="Reminder notes here..."
            value={reminderMsg}
            onChange={(e) => setReminderMsg(e.target.value)}
          />
          <DateTimePicker
            value={remindAt}
            onChange={setRemindAt}
            minDate={new Date()}
            minutePlaceholder="mm"
            hourPlaceholder="hh"
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearPlaceholder="YYYY"
          />
          <div className="button" onClick={addReminder}>
            Add Reminder
          </div>
        </div>

        <div className="homepage_body">
          <div className="reminder_card">
            <h2>Reminder Note</h2>
            <h3>Remind Me at:</h3>
            <p>10/04/2025 @ 2PM</p>
            <div className="button">Delete</div>
          </div>

          <div className="reminder_card">
            <h2>Reminder Note</h2>
            <h3>Remind Me at:</h3>
            <p>10/04/2025 @ 2PM</p>
            <div className="button">Delete</div>
          </div>

          <div className="reminder_card">
            <h2>Reminder Note</h2>
            <h3>Remind Me at:</h3>
            <p>10/04/2025 @ 2PM</p>
            <div className="button">Delete</div>
          </div>

          <div className="reminder_card">
            <h2>Reminder Note</h2>
            <h3>Remind Me at:</h3>
            <p>10/04/2025 @ 2PM</p>
            <div className="button">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
