import { useState, useEffect } from 'react';
import ProjectsComp from './ProjectsComp';
import ProjectButtons from './ProjectButtons';
import portfolioProjects from '../static/scripts/ProjectsInfo';

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState(
    portfolioProjects.portfolioProjects
  );

  useEffect(() => {
    document.title = 'Andrew Robles | Projects';
  }, []);

  return (
    <div className='flex flex-row w-screen mb-4'>
      <div id='projects-container' className='w-full flex flex-col text-center'>
        <h1 className='text-2xl font-bold my-3'>Projects</h1>

        <div className='md:space-y-8'>
          <ProjectsComp
            siteName={projectInfo.geteller.name}
            siteLink={projectInfo.geteller.site}
            siteImage={projectInfo.geteller.image}
            siteAbout={projectInfo.geteller.about}
            siteCode={projectInfo.geteller.code}
            siteTech={projectInfo.geteller.tech}
            screenLocation='geteller'
          />
          <ProjectsComp
            siteName={projectInfo.draftboys.name}
            siteLink={projectInfo.draftboys.site}
            siteImage={projectInfo.draftboys.image}
            siteAbout={projectInfo.draftboys.about}
            siteCode={projectInfo.draftboys.code}
            siteTech={projectInfo.draftboys.tech}
            screenLocation='draftboys'
          />
          {/* <ProjectsComp
            siteName={projectInfo.vandal.name}
            siteLink={projectInfo.vandal.site}
            siteImage={projectInfo.vandal.image}
            siteAbout={projectInfo.vandal.about}
            siteCode={projectInfo.vandal.code}
            siteTech={projectInfo.vandal.tech}
            screenLocation='vandal'
          />
          <ProjectsComp
            siteName={projectInfo.shine.name}
            siteLink={projectInfo.shine.site}
            siteImage={projectInfo.shine.image}
            siteAbout={projectInfo.shine.about}
            siteCode={projectInfo.shine.code}
            siteTech={projectInfo.shine.tech}
            screenLocation='shine'
          /> */}
        </div>
      </div>

      <ProjectButtons />
    </div>
  );
};
export default Projects;
