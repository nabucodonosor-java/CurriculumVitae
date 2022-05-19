import React from 'react'
import './styles.css';

type Props = {
  title: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

const SkillComponent = ({ title, first, second, third, fourth, fifth }: Props) => {

  return (
    <div className="skill-component-container">
      <div>
        <h5>{title}</h5>
      </div>
      <div className="skill-component-sphere">
        <p className={first}></p>
        <p className={second}></p>
        <p className={third}></p>
        <p className={fourth}></p>
        <p className={fifth}></p>
      </div>
    </div>
  )
}

export default SkillComponent;