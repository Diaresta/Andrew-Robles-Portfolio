import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [buttonState, setButtonState] = useState('fa-solid fa-bars');
  const [navState, setNavState] = useState('closed');
  const [mobileNav, setMobileNav] = useState('hidden');
  const [mobileState, setMobileState] = useState('-translate-x-full');
  const [mobileOverflow, setMobileOverflow] = useState('overflow-auto');

  const showMobileNav = () => {
    if (navState === 'closed') {
      setMobileNav('flex');
      setButtonState('fa-solid fa-xmark');
      setNavState('open');
      setMobileState('translate-x-0');
      // setMobileOverflow('overflow-hidden');
    } else {
      setMobileNav('hidden');
      setButtonState('fa-solid fa-bars');
      setNavState('closed');
      setMobileState('-translate-x-full');
      // setMobileOverflow('overflow-auto');
    }
  };

  let activeStyle =
    'text-charcoleDark p-1.5 rounded border-b-4 border-charcole';

  return (
    <div id='navbar-container' className=''>
      <nav className='bg-frog mx-auto flex justify-between items-center py-5 px-6 border-b-2 border-frogDark'>
        <div id='narbar-left'>
          <NavLink
            to=''
            className='font-bold text-2xl hover:text-soilLight active:text-grainHover'
          >
            Andrew Robles
          </NavLink>
        </div>
        <div id='narbar-right'>
          <ul className='flex flex-row space-x-10 text-2xl hidden xsm:flex'>
            <li className='hover:text-charcoleLight active:text-grainHover'>
              <NavLink
                to=''
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : 'p-1.5 rounded border-b-0 hover:border-b-4 border-charcoleLight transition-all duration-300'
                }
                exact='true'
              >
                About
              </NavLink>
            </li>
            <li className=' active:text-grainHover'>
              <NavLink
                to='projects'
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : 'p-1.5 rounded border-b-0 hover:border-b-4 border-charcoleLight transition-all duration-300'
                }
                exact='true'
              >
                Projects
              </NavLink>
            </li>
            <li className=' active:text-grainHover'>
              <NavLink
                to='resume'
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : 'p-1.5 rounded border-b-0 hover:border-b-4 border-charcoleLight transition-all duration-300'
                }
                exact='true'
              >
                Resume
              </NavLink>
            </li>
            <li className=' active:text-grainHover'>
              <NavLink
                to='contact'
                className={({ isActive }) =>
                  isActive
                    ? activeStyle
                    : 'p-1.5 rounded border-b-0 hover:border-b-4 border-charcoleLight transition-all duration-300'
                }
                exact='true'
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className='xsm:hidden flex items-center hover:color-parchment'>
            <button
              id='mobile-nav-btn'
              onClick={() => {
                showMobileNav();
              }}
            >
              <i
                className={`${buttonState} text-2xl hover:drop-shadow hover:text-charcoleLight active:text-grainHover`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ----- Mobile ----- */}
      <div
        id='mobile-nav'
        className={`relative z-50 xsm:${mobileNav} sm:hidden xsm:${mobileOverflow}`}
      >
        <div
          id='mobile-content'
          className={`min-h-screen bg-gradient-to-tr from-grain via-parchment to-grain absolute inset-y-0 right-0 duration-300 ease-in-out ${mobileState}`}
        >
          <nav className=''>
            <ul className='text-2xl text-center'>
              <li className='w-screen py-4 hover:text-charcole hover:bg-parchment hover:text-charcoleLight active:text-grainHover'>
                <NavLink
                  to=''
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => {
                    showMobileNav();
                  }}
                  exact='true'
                >
                  About
                </NavLink>
              </li>
              <li className='w-screen py-4 hover:text-charcole hover:bg-parchment hover:text-charcoleLight active:text-grainHover'>
                <NavLink
                  to='projects'
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => {
                    showMobileNav();
                  }}
                  exact='true'
                >
                  Projects
                </NavLink>
              </li>

              <li className='w-screen py-4 hover:text-charcole hover:bg-parchment hover:text-charcoleLight active:text-grainHover'>
                <NavLink
                  to='resume'
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => {
                    showMobileNav();
                  }}
                  exact='true'
                >
                  Resume
                </NavLink>
              </li>

              <li className='w-screen py-4 hover:text-charcole hover:bg-parchment hover:text-charcoleLight active:text-grainHover'>
                <NavLink
                  to='contact'
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => {
                    showMobileNav();
                  }}
                  exact='true'
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
