import React from 'react'
import {SectionWrapper} from '../hoc'
import {BallCanvas} from "./canvas"
import {technologies} from "../constants"
import { styles } from '../styles'

const Tech = () => {
  return (<div>
  <p className={styles.sectionSubText}>Some DevOps and FullStack tools which I used.</p>
    <h2 className={styles.sectionHeadText}>Tech Stack</h2>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  </div>
    
  );
};

export default SectionWrapper(Tech, "");