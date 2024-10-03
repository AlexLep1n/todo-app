import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function Timer({ id, timer: { timeStart, timeLeft }, StopTimer, startTimer }) {
  const [start, setStart] = useState(timeStart);
  const [left, setLeft] = useState(timeLeft);

  console.log(left);
  const tick = () => {
    const curentTime = Date.now();
    const diff = curentTime - start;
    const timeToEnd = left - diff;
    setLeft(timeToEnd);
  };

  useEffect(() => {
    let intervalId;
    if (start > 0) {
      intervalId = setInterval(() => {
        tick();
      }, 1000);
    }
    // if (left - 1000 <= 0) {
    //   setLeft(0);
    //   StopTimer(id, left);
    // }

    return () => clearInterval(intervalId);
  }, [left]);

  return (
    <span className="description">
      <button
        className="icon icon-play"
        onClick={() => {
          startTimer(id);
          setStart(Date.now());
        }}
      ></button>
      <button
        className="icon icon-pause"
        onClick={() => {
          StopTimer(id, left);
          setStart(0);
        }}
      ></button>
      {`${new Date(left).getMinutes()}:${new Date(left).getSeconds()}`}
    </span>
  );
}

Timer.propTypes = {
  id: PropTypes.number.isRequired,
  timer: PropTypes.object.isRequired,
  timeStart: PropTypes.number,
  timeLeft: PropTypes.number,
  StopTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
};
