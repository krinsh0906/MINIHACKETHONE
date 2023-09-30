import React from 'react';
import todo from './assest/todo.jpg'
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <>
      <div>
        <img className='hero-vactor' src={todo} />
      </div>
      <div className='hero-text'>
        <h2 data-aos="fade-up" data-aos-duration="1500">
          Stay Organized,<br />
          Your Life.
        </h2>
        <TypeAnimation className='hero-animation'
          data-aos="fade-up"
          sequence={[
            " Make Your Task  ",
            2000,
            "",
          ]}
          speed={30}
          wrapper='h2'
          repeat={Infinity}


        />
        <div className='hero-button'>
          <button className='main-button' type='submit'>Contact us</button>
        </div>

      </div>

    </>

  );
}

export default Hero;
