import React from 'react';
import Digit from './Digit/Digit';

import './App.css';

function App() {
  const [time, setTime] = React.useState(new Date());
  const [hour, setHour] = React.useState(0);
  const [hour2, setHour2] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [minute2, setMinute2] = React.useState(0);
  const [is24hr, setIs24hr] = React.useState(false);

  React.useEffect(() => {

    // 12 hr time
    const timer = is24hr ? time.getHours() : time.getHours() % 12;

    const hourStr = (timer).toString().padStart(2, "0");
    const minuteStr = (time.getMinutes().toString().padStart(2, 0));

    console.log(hourStr, minuteStr);

    setHour(Number(hourStr[0]));
    setHour2(Number(hourStr[1]));
    setMinute(Number(minuteStr[0]));
    setMinute2(Number(minuteStr[1]));
  }, [time, is24hr])

  React.useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    }
  });

  return (
    <div className="App">
      <Digit number={hour} />
      <Digit number={hour2} />

      <Digit number={minute} />
      <Digit number={minute2} />
      <span>Version 0.1</span>
    </div>
  );
}

export default App;
