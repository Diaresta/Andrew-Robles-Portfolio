import { useState } from 'react';
import { Link } from 'react-scroll';

const ProjectButtons = () => {
  const [scrollBtnOne, setScrollButtonOne] = useState('fa-circle-dot');
  const [scrollBtnTwo, setScrollButtonTwo] = useState('fa-circle-dot');
  const [scrollBtnThree, setScrollButtonThree] = useState('fa-circle-dot');
  const [scrollBtnFour, setScrollButtonFour] = useState('fa-circle-dot');

  const buttonChange = () => {
    let heightCheck = window.innerHeight / 1.2;

    // Styles portfolio item buttons
    if (window.scrollY < heightCheck) {
      setScrollButtonOne('fa-circle');
      setScrollButtonTwo('fa-circle-dot');
      setScrollButtonThree('fa-circle-dot');
      setScrollButtonFour('fa-circle-dot');
    } else if (
      window.scrollY > heightCheck &&
      window.scrollY < heightCheck * 2
    ) {
      setScrollButtonOne('fa-circle-dot');
      setScrollButtonTwo('fa-circle');
      setScrollButtonThree('fa-circle-dot');
      setScrollButtonFour('fa-circle-dot');
    } else if (
      window.scrollY > heightCheck * 2 &&
      window.scrollY < heightCheck * 3
    ) {
      setScrollButtonOne('fa-circle-dot');
      setScrollButtonTwo('fa-circle-dot');
      setScrollButtonThree('fa-circle');
      setScrollButtonFour('fa-circle-dot');
    } else if (window.scrollY > heightCheck * 3) {
      setScrollButtonOne('fa-circle-dot');
      setScrollButtonTwo('fa-circle-dot');
      setScrollButtonThree('fa-circle-dot');
      setScrollButtonFour('fa-circle');
    }
  };

  // Checks window height position and styles portfolio item buttons
  window.addEventListener('scroll', buttonChange);

  return (
    <div className='mr-3'>
      <ul className='h-screen justify-center flex flex-col sticky top-0 space-y-2'>
        <li>
          <Link smooth={true} to='top' activeClass='bg-charcole'>
            <i
              className={`fa-solid ${scrollBtnOne} text-soil hover:text-soilLight hover:cursor-pointer active:text-grainHover`}
            />
          </Link>
        </li>
        <li>
          <Link smooth={true} to='draftboys' offset={-70}>
            <i
              className={`fa-solid ${scrollBtnTwo} text-soil hover:text-soilLight hover:cursor-pointer active:text-grainHover`}
            />
          </Link>
        </li>
        <li>
          <Link smooth={true} to='vandal' offset={-70}>
            <i
              className={`fa-solid ${scrollBtnThree} text-soil hover:text-soilLight hover:cursor-pointer active:text-grainHover`}
            />
          </Link>
        </li>
        <li>
          <Link smooth={true} to='shine' offset={-70}>
            <i
              className={`fa-solid ${scrollBtnFour} text-soil hover:text-soilLight hover:cursor-pointer active:text-grainHover`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProjectButtons;
