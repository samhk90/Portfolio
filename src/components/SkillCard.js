import React from 'react';
const images = require.context('../img', true, /\.svg$/);
const SkillCard = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
    <div className="skills-container mx-5 p-3">
            <h1>Technologies I like the most</h1>
            <div className="skill-card">
      <img src={images('./javascript.svg')} alt="" />
      <img src={images('./html.svg')} alt="" />
      <img src={images('./css.svg')} alt="" />
      <img src={images('./python.svg')} alt="" />
      <img src={images('./django.svg')} alt="" />
      <img src={images('./react.svg')} alt="" />
      <img src={images('./mysql.svg')} alt="" />
      <img src={images('./pg.svg')} alt="" />
      <img src={images('./mongodb.svg')} alt="" />
      <img src={images('./git.svg')} alt="" />
      <img src={images('./docker.svg')} alt="" />
      
      </div>
            </div>
    </div>

  );
};

export default SkillCard;
