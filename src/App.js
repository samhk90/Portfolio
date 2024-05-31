import React from 'react';
import './App.css';
import './index.css'; 
import Nav from './components/Nav';
import About from './components/About';
import SkillCard from './components/SkillCard';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
const skills = [
  { skill: 'C++', level: 90 },
  { skill: 'Python', level: 100 },
  { skill: 'JavaScript', level: 85 },
];
const db = [
  { skill: 'MySQL', level: 90 },
  { skill: 'PostgreSQL', level: 85 },
  { skill: 'MongoDB', level: 80 },
];
const framework = [
  { skill: 'Django', level: 95 },
  { skill: 'React.js', level: 75 },
];
const tools = [
  { skill: 'Git and Github', level: 95 },
  { skill: 'Supabase', level: 85 },
  { skill: 'Docker', level: 80 },
];

function App() {
  return (
    <div>
      <div className="banner">
        <Nav />
        <div className="container-fluid p-5">
          <h1 className="text-left my-4 text-white">Hi, I'm Md.Samee Shaikh</h1>
          <h3 className="text-left text-white">Empowering the future,</h3>
          <h3 className="text-left secondary-color">one line of code at a time...</h3>
        </div>
      </div>
      <About />
      <h1 className="px-5">My Skills</h1>
      <div className="row">
        <div className="col-sm-6">
          <h3 className="text-center secondary-color">Programming Languages</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill.skill} level={skill.level} />
            ))}
          </div>
        </div>
        <div className="col-sm-6">
          <h3 className="text-center secondary-color">Databases</h3>
          <div className="skills-container">
            {db.map((dbSkill, index) => (
              <SkillCard key={index} skill={dbSkill.skill} level={dbSkill.level} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h3 className="text-center secondary-color">Frameworks</h3>
          <div className="skills-container">
            {framework.map((fwSkill, index) => (
              <SkillCard key={index} skill={fwSkill.skill} level={fwSkill.level} />
            ))}
          </div>
        </div>
        <div className="col-sm-6">
          <h3 className="text-center secondary-color">Tools</h3>
          <div className="skills-container">
            {tools.map((tool, index) => (
              <SkillCard key={index} skill={tool.skill} level={tool.level} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ProjectCard
            title="Project 1"
            description="This is the description of Project 1."
            githubLink="https://github.com/username/project1"
          />
        </div>
        <div className="col-md-6">
          <ProjectCard
            title="Project 2"
            description="This is the description of Project 2."
            githubLink="https://github.com/username/project2"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
