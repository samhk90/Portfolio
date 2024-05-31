import React from 'react';

const SkillCard = ({ skill, level }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-name">{skill}</h3>
      <div className="skill-level-container">
        <div className="skill-level" style={{ width: `${level}%` }}></div>
      </div>
      <p className="skill-level-text">{level}%</p>
    </div>
  );
};

export default SkillCard;
