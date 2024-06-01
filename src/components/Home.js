
import React from 'react';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';
import About from './About';
import Banner from './Banner';
import Nav from './Nav';
export default function Home() {
  return (
    <>
    <Banner />
    <About />
              
      <h1 className=" my-3 px-5">Projects</h1>
      <div className="container-fluid p-5">
      <div className="row ">
        <div className="col-md-6 mb-3">
          <ProjectCard
            title="TAE ERP"
            description="I have been leading a team of approximately 20 students in the development of an ERP system for my college. This ongoing project utilizes Django as the primary framework.project"
            githubLink="https://github.com/samhk90/TAE_erp"
          />
        </div>
        <div className="col-md-6 mb-3">
          <ProjectCard
            title="CareerForge"
            description="The job portal, developed using Django, includes features such as messaging, OTP authentication via email etc "
            githubLink="https://github.com/samhk90/CareerForge"
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 mb-3">
          <ProjectCard
            title="Safar"
            description="Safar is a website developed using Django that utilizes Prim's algorithm to provide the shortest path for tourism sites, ensuring an efficient and enjoyable travel planning experience."
            githubLink="https://github.com/samhk90/Safar"
          />
        </div>
        <div className="col-md-6 mb-3">
          <ProjectCard
            title="BookMyEvent"
            description="This platform is essentially a clone of BookMyShow with a distinct user interface, developed using Django and PostgreSQL for backend."
            githubLink="https://github.com/samhk90/BookMyEvent"
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 mb-3">
          <ProjectCard
            title="Movie_lib"
            description="This project is developed in React.js and showcases a
            movie library where users can access comprehensive information
            about various movies.|"
            githubLink="https://movie-lib-black.vercel.app/"
          />
        </div>
        <div className="col-md-6 mb-3">
          <ProjectCard
            title="Small Projects"
            description="Small Projects such as Todo,Weather,Calculator,DRR,Auth-system you can checkout on my github profile."
            githubLink="https://github.com/samhk90/"
          />
        </div>
      </div>
      </div>
    </>
  );
}
