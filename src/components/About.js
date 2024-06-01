import React from 'react';
import Nav from './Nav';
import SkillCard from './SkillCard';
export default function About() {
  return (
        <>

        <div className='container-fluid p-5' id='about'>
            <h1>About Me</h1>
            <h5>I'm Md.Samee Shaikh, a full stack web developer</h5>
            <p className='otherfont'>I am a self taught dedicated web developer with proficiency in Python. Particularly skilled in Django and React.js frameworks and currently learning MERN Stack. As the current president of ACES, I lead with a blend of technical prowess and strategic vision, driving the organization towards continued success.
</p>
        </div>
        <SkillCard />
        </>

  );
}
