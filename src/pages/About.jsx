import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Ruben Dario Castilla Romero</p>
      <p>
        Pagina de la misíon de Assesment Frontend , en la cual se veran los
        temas que tratamos en el Frontend (Git, HTML y CSS, JavaScript y React)
      </p>
      <img
        src='https://i.pinimg.com/564x/b0/85/2c/b0852cd49469925e5cff88a1582c47ed.jpg'
        alt='imagen de about'
      ></img>
      <p>rcastrome@gmail.com</p>
      <a href='https://github.com/CastRome' target='_blank' rel='noreferrer'>
        GitHub/CastRome
      </a>
      <br></br>
      <Link to='/'>Go home</Link>
    </div>
  );
};

export default About;
