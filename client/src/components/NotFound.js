import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex h-full mt-20'>
      <div className='flex flex-col m-auto text-center items-center justify-center text-5xl font-extrabold space-y-8'>
        <h1>
          We couldn't find what you were looking for.
          <br />
        </h1>
        <NavLink
          to=''
          exact='true'
          className='font-extrabold text-linkGreen underline drop-shadow-md hover:text-soilLight active:text-grainHover'
        >
          Click here to return home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
