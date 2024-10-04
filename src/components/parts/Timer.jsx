import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function Timer({ id, timer, stopTimer, startTimer }) {
  const { timeStart, timeLeft } = timer;
  const [left, setLeft] = useState(timeLeft || 0);

  useEffect(() => {
    let intervalId;
    if (timeStart) {
      intervalId = setInterval(() => {
        const curentTime = Date.now();
        const diff = curentTime - timeStart;
        const timeToEnd = left - diff;
        if (timeToEnd <= 0) {
          clearInterval(intervalId);
          setLeft(0);
        } else {
          setLeft(timeToEnd);
        }
      }, 200);
    }

    return () => clearInterval(intervalId);
  }, [timeStart, timeLeft]);

  return (
    <span className="description">
      <button
        className="icon icon-play"
        onClick={() => {
          startTimer(id, left);
        }}
      ></button>
      <button
        className="icon icon-pause"
        onClick={() => {
          stopTimer(id, left);
        }}
      ></button>
      {format(new Date(left), 'mm:ss')}
    </span>
  );
}

Timer.propTypes = {
  id: PropTypes.number.isRequired,
  timer: PropTypes.object.isRequired,
  timeStart: PropTypes.number,
  timeLeft: PropTypes.number,
  stopTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
};
