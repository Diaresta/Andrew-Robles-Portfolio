import { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [messageFirst, setMessageFirst] = useState('');
  const [messageLast, setMessageLast] = useState('');
  const [messageEmail, setMessageEmail] = useState('');
  const [messageText, setMessageText] = useState('');
  const [alertStyle, setAlertStyle] = useState('hidden');
  const [alertText, setAlertText] = useState('');

  // Pops up and fades out alerts on contact form submit
  const fadeOutAlert = (background) => {
    setAlertStyle(`flex opacity-100 ${background}`);

    setTimeout(() => {
      setAlertStyle(
        `flex ${background} transition-opacity duration-1000 ease-out opacity-0`
      );
    }, 750);

    setTimeout(() => {
      setAlertStyle('hidden');
    }, 1500);
  };

  // Submits contact form to db
  const submitContact = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/contact/create', {
        firstName: messageFirst,
        lastName: messageLast,
        email: messageEmail.toLocaleLowerCase(),
        message: messageText,
        contactDate: new Date().toLocaleDateString(),
      })
      .then((response) => {
        setAlertText('Message Submitted!');
        fadeOutAlert('bg-successGreen');

        setTimeout(() => {
          window.location.href = '/';
        }, 500);
      })
      .catch((err) => {
        setAlertText(err.response.data.error);
        fadeOutAlert('bg-failedRed');
        console.error(err);
      });
  };

  useEffect(() => {
    document.title = 'Andrew Robles | Contact';
  }, []);

  return (
    <div id='contact-container' className='flex flex-col text-center mb-4'>
      <h1 className='text-2xl font-bold mt-3'>Contact</h1>

      <div className='flex flex-col w-full justify-center items-center'>
        <p className='text-lg mb-3 w-4/5'>
          Have any questions or care to chat? Don't hesitate to reach out!
        </p>
        <div className='flex flex-col relative justify-center items-center bg-parchment border-2 rounded p-8 w-4/5 drop-shadow-md'>
          <span
            id='calc-alert'
            className={`absolute rounded p-2 text-errorText text-lg top-0 mt-2 ${alertStyle}`}
          >
            {alertText}
          </span>
          <form
            className='flex flex-col space-y-4 items-center xsm:w-3/4 mb-4'
            onSubmit={(e) => {
              e.preventDefault();
              submitContact(e);
            }}
          >
            <div className='flex flex-col w-full justify-between space-y-4 lg:space-y-0 lg:space-x-6 lg:flex-row'>
              <div className='w-full text-left'>
                <label
                  className='uppercase justify-start tracking-wide text-xs font-bold mb-2'
                  htmlFor='first-name'
                >
                  First Name
                </label>
                <input
                  type='text'
                  id='first-name'
                  placeholder='First Name'
                  className='appearance-none border border-soil rounded py-1 px-2 w-full focus:border-soilLight focus:bg-parchmentLight'
                  onChange={(e) => {
                    setMessageFirst(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className='w-full text-left'>
                <label
                  className='uppercase justify-start tracking-wide text-xs font-bold mb-2'
                  htmlFor='last-name'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  id='last-name'
                  placeholder='Last Name'
                  className='appearance-none border border-soil rounded py-1 px-2 w-full focus:border-soilLight focus:bg-parchmentLight'
                  onChange={(e) => {
                    setMessageLast(e.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>
            <div className='flex flex-col w-full space-y-4'>
              <div className='w-full text-left'>
                <label
                  className='uppercase justify-start tracking-wide text-xs font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='appearance-none border border-soil rounded py-1 px-2 w-full focus:border-soilLight focus:bg-parchmentLight'
                  placeholder='Email'
                  onChange={(e) => {
                    setMessageEmail(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className='w-full text-left'>
                <label
                  className='uppercase justify-start tracking-wide text-xs font-bold mb-2'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  placeholder='Message...'
                  id='message'
                  className='appearance-none border border-soil rounded py-1 px-2 w-full h-32 focus:border-soilLight focus:bg-parchmentLight'
                  onChange={(e) => {
                    setMessageText(e.target.value);
                  }}
                  required
                ></textarea>
              </div>
            </div>
            <button
              className='text-lg bg-grain rounded h-8 w-16 p-0.5 text-center hover:bg-grainHover hover:text-soilDark active:bg-grainLight xsm:w-20'
              type='submit'
            >
              Submit
            </button>
          </form>

          <div className='w-full flex flex-col justify-center items-center pt-4 text-xl'>
            <p>Or get in contact with me here:</p>
            <ul className='flex flex-row w-full text-linkGreen xsm:w-3/5 justify-evenly mt-4'>
              <li>
                <a
                  href='https://www.linkedin.com'
                  className='flex flex-col text-center hover:text-soilLight active:text-grainHover'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-brands fa-linkedin drop-shadow-md' />
                  <small>LinkedIn</small>
                </a>
              </li>
              <li>
                <a
                  href='mailto:andrewjordanrobles@gmail.com'
                  className='flex flex-col text-center hover:text-soilLight active:text-grainHover'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fa-solid fa-envelope drop-shadow-md' />
                  <small>Email</small>
                </a>
              </li>
              <li>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
