import React, { useEffect, useState } from 'react'
import { SkillProps } from './Skills.types'

const Skills = (props: SkillProps) => {
  const { skills } = props
  const [isloggin, setIsLoggin ] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoggin(true)
    }, 1500)
  },[])
  return (
    <div>
        <p>Skills</p>
        <ul>
            {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        {isloggin ? <button onClick={() => setIsLoggin(false)}>ログアウト</button> : <button onClick={() => setIsLoggin(true)}>ログイン</button>}
    </div>
  )
}

export default Skills