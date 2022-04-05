import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    document.title = 'Andrew Robles | Resume';
  }, []);

  return (
    <div className='flex'>
      <h1>resume</h1>
    </div>
  );
};

export default Resume;
