const ProjectsComp = ({
  screenLocation,
  siteName,
  siteLink,
  siteImage,
  siteAbout,
  siteCode,
  siteTech,
}) => {
  return (
    <div className='flex flex-col mb-1 drop-shadow-md'>
      <div className='flex flex-col w-full px-4 space-x-4'>
        <div className='mx-auto bg-parchment border-2 rounded p-4 w-full lg:w-4/5'>
          <article className='flex flex-col'>
            <div>
              <h2 className=' mb-2'>
                <a id={screenLocation} className='pt-5' />
                <a
                  href={siteLink}
                  className='text-xl font-bold underline hover:text-soilLight active:text-grainHover'
                  target='_blank'
                  rel='noreferrer'
                >
                  {siteName}
                </a>
              </h2>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <div className='w-full mb-2 lg:w-3/4'>
                <img
                  className='h-6/6 w-6/6 mb-1 rounded m-auto drop-shadow-md'
                  src={siteImage}
                />
              </div>

              <div className='bg-parchmentLight border rounded w-full lg:w-3/4'>
                <div>
                  <p className='text-left p-2 mb-2 bg-parchmentLight leading-7 rounded'>
                    {siteAbout}
                  </p>
                </div>
                <div className='space-x-4 py-2'>
                  <button className='text-lg bg-grain rounded h-8 w-14 p-0.5 text-center hover:bg-grainHover hover:text-soilDark active:bg-grainLight'>
                    <a href={siteLink} target='_blank' rel='noreferrer'>
                      Site
                    </a>
                  </button>
                  <button className='text-lg bg-frog rounded h-8 w-14 p-0.5 text-center hover:bg-frogDark active:bg-frogLight'>
                    <a href={siteCode} target='_blank' rel='noreferrer'>
                      Code
                    </a>
                  </button>
                </div>
                <hr className='' />
                <div className='py-2'>
                  <ul className='flex flex-wrap justify-center space-x-4'>
                    {siteTech.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default ProjectsComp;
