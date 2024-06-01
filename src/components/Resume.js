import React from 'react';

const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/12rHTszQIlEcfyG3DzI0EYa49E57azIaa/view?usp=sharing'; 
    link.download = 'Resume(2).pdf'; // Specify the filename for download
    document.body.appendChild(link);
    link.click(); // Simulate a click event to trigger the download
    document.body.removeChild(link); // Clean up by removing the temporary link element
  };
  
  const handleGitHub = () => {
    window.open('https://github.com/samhk90', '_blank'); // Replace 'yourusername' with your actual GitHub username
  };
  
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/samee-shaikh-3a3406220/', '_blank'); // Replace 'yourlinkedinprofile' with your actual LinkedIn profile URL
  };
  
const Resume = () => {
  return (
    <div className="container-fluid p-5">
      <div className="resume">
      <div className="col-md-6 left">
  <div className="info zoom-in glass-effect">
    <h1>Md.Samee Shaikh</h1>
    <p>Full Stack Web Developer</p>
    <p>mdsami9022@gmail.com</p>
    <p><i className="ri-map-pin-line"></i> Pune | India</p>
  </div>
  <div className="button-box zoom-in glass-effect">
    <button className="btn btn-primary my-2" onClick={handleGitHub}>GitHub</button>
    <button className="btn btn-primary my-2" onClick={handleLinkedIn}>LinkedIn</button>
    <button className="btn btn-primary my-2" onClick={handleDownloadResume}>Download Resume</button>
  </div>
</div>

        
        <div className="right fade-up">
          <div className="experience">
            <h1 className='h1 mb-3'>Experience</h1>
            <h4>Full Stack Web Developer Intern</h4>
            <p>28 FEb 2024 - 25 APR 2024</p>
            <ul>
              <li>During my internship, I successfully developed a job portal using
Django.</li><li> My contributions were recognized and I received
commendation for the quality of my work.</li>
              <li>Gained clear understanding of how the industry level applications are made</li>
            </ul>
            <br /><br />
            <h4>Web developer intern</h4>
            <p>15 OCT 2023 - 15 NOV 2023</p>
            <ul>
              <li>I had the opportunity to apply theoretical knowledge gained in
academic settings to real-world projects</li>
 </ul>
          </div>
          
          <div className="skills">
            <h1 className='h1 mb-3'> Skills</h1>
            <ul>
              <li>JavaScript / React</li>
              <li>HTML, Bootstrap, CSS</li>
              <li>Django</li>
              <li>Git / Github</li>
              <li>Docker</li>
              <li>Mongo DB, MySQL, PostgreSQL</li>
            </ul>
          </div>
          
          <div className="certificate">
            <h1 className='h1 mb-3'>Certificates</h1>
            <ul>
              <li>Certificate in Full Stack Web
Development By Internshala</li>
              <li>Certificate in Python and Django (Udemy)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
