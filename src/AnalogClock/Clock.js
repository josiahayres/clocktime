import React from 'react';
import './Clock.css';

/**
 * A nicer clock with clean animation
 * https://codepen.io/dope/pen/KJYMZz
 * @param {*} props
 */
function Clock(props) {
  const { size = "regular", showSecond = false, config = { hour: 0, minute: 0, visible: true } } = props;

  const { hour, minute, visible } = config;
  const hourHand = React.createRef(null);
  const minuteHand = React.createRef(null);

  React.useEffect(() => {
    if (isNaN(hour) || isNaN(minute)) return;
    if (!!hourHand?.current && !!minuteHand?.current) {
      const h = hour * 30;
      const m = minute * 6;
      hourHand.current.style.transform = `rotate(${h}deg)`;
      minuteHand.current.style.transform = `rotate(${m}deg)`;


    } else {
      console.log(hourHand)
    }
  }, [hourHand, minuteHand, hour, minute])



  const clockClass = "wrap" + (visible ? "" : " hidden");

  return (
    <div className={`clock ${size}`} >
      <div className={clockClass} >
        <span ref={hourHand} className="hour"></span>
        <span ref={minuteHand} className="minute"></span>
        {showSecond && <span className="second"></span>}
        <span className="dot"></span>
      </div >
    </div >
  )
}

export default Clock;
