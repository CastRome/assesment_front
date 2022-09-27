import '../styles/components/Card.scss';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const Ref = useRef(null);
  const navigate = useNavigate();
  const [timer, setTimer] = useState('00:00:00');
  const [isDisabled, setIsDisabled] = useState(false);
  const RandomNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return { total, hours, minutes, seconds };
  };

  const startTimer = (e) => {
    const { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        `${hours > 9 ? hours : `0${hours}`}:${
          minutes > 9 ? minutes : `0${minutes}`
        }:${seconds > 9 ? seconds : `0${seconds}`}`,
      );
    }
  };

  const clearTimer = (e) => {
    setTimer(`00:0${RandomNumber}:00`);
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + RandomNumber * 60);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  useEffect(() => {
    if (timer === '00:00:00') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [timer]);

  /*
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  */

  return (
    <div className="CardContainer">
      <img src={item.image} alt="Product_Img" />
      <h2>{item.title}</h2>
      <p>{item.gender}</p>
      <div className="timerContainer">
        <h2>{timer}</h2>
        <button
          type="button"
          disabled={isDisabled}
          onClick={() => {
            navigate(`/product/detail/${item.id}`);
          }}
        >
          Go To Detail
        </button>
      </div>
    </div>
  );
};
/*
Card.propTypes = {
  item: PropTypes.shape({}).isRequired,
};
*/
export default Card;
