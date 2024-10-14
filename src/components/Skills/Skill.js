import React from 'react'
import styles from '../../styles/Skill.module.css'
// import github from "../../assets/github.mp4"
import ReactIcon from './icons/ReactIcon'
import JavaScriptIcon from './icons/JSIcon'
import NodeIcon from './icons/NodeIcon'
import Image from 'next/image'

const Skill = () => {


    const icons = [
        { component: <ReactIcon />, name: 'React' },
        { component: <JavaScriptIcon />, name: 'JavaScript' },
        { component: <iframe loading='lazy' src="https://drive.google.com/file/d/1hJbgnDkpZEqzrzcyjaS_1YJC4ukzpV7W/view?usp=drive_link" alt="tnk" />, name: 'Github' },
        // { component: <NodeIcon />, name: 'Node' },
      ];

  return (
    <div className={styles.container}>
      {icons.map((icon, index) => (
        <div className={styles.gridItem} key={icon.name || index}>
          {icon.component}
        </div>
      ))}
    </div>
  )
}

export default Skill