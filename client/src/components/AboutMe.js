import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const AboutMe = () => {
  useEffect(() => {
    document.title = 'Andrew Robles | Developer';
  }, []);

  return (
    <div
      id='about-me-container'
      className='flex flex-col h-full mb-4 mt-4 items-center text-center xsm:mt-12'
    >
      <div className='flex flex-col w-11/12 m-auto bg-parchment border-2 rounded p-8 drop-shadow-md space-y-12 divide-y-2 xsm:10/12 md:w-8/12'>
        <div className='space-y-4'>
          <h1 className='text-6xl font-extrabold'>
            Hey, I'm{' '}
            <span className='text-frogDark drop-shadow-sm'>Andrew</span>!
          </h1>
          <h2 className='text-4xl font-bold'>
            I'm a Full Stack Developer from New York City.
          </h2>
        </div>
        <div className='space-y-4'>
          <div className='w-full flex flex-col justify-center items-center pt-8 text-xl text-bold'>
            <p>
              Curious of what I do, or like to get in touch? Check these out:
            </p>
            <ul className='flex flex-row flex-wrap w-full justify-evenly mt-4 text-linkGreen text-2xl space-x-4 sm:space-x-2'>
              <li className='my-2'>
                <a
                  href='https://www.linkedin.com/in/andrew-robles'
                  className='flex flex-col text-center hover:text-soilLight active:text-grainHover'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-linkedin drop-shadow-md' />
                  <small>LinkedIn</small>
                </a>
              </li>
              <li className='my-2'>
                <a
                  href='https://github.com/Diaresta'
                  className='flex flex-col text-center hover:text-soilLight active:text-grainHover'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-github drop-shadow-md' />
                  <small>GitHub</small>
                </a>
              </li>
              <li className='my-2'>
                <NavLink
                  to='/projects'
                  className='flex flex-col text-center hover:text-soilLight active:text-grainHover'
                >
                  <i className='fa-solid fa-folder-open drop-shadow-md' />
                  <small>Portfolio</small>
                </NavLink>
              </li>
              <li className='my-2'>
                <a
                  href='https://github.com/Diaresta/Andrew-Robles-Resume'
                  target='_blank'
                  rel='noreferrer'
                  className='flex flex-col text-center hover:text-soilLight active:text-grainHover'
                >
                  <i className='fa-solid fa-file drop-shadow-md' />
                  <small>Resume</small>
                </a>
              </li>
              <li className='my-2'>
                <NavLink
                  to='/contact'
                  className='flex flex-col text-center hover:text-soilLight active:text-grainHover'
                >
                  <i className='fa-solid fa-envelope drop-shadow-md' />
                  <small>Contact</small>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='pt-8 text-2xl font-bold'>
            <h3>
              Currently working on:{' '}
              <a
                className='font-extrabold text-linkGreen underline drop-shadow-md hover:text-soilLight active:text-grainHover'
                href='https://github.com/Diaresta/cloyster'
                target='_blank'
                rel='noreferrer'
              >
                Cloyster
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
