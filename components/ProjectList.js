import React from 'react'

function ProjectList({id,title,active,setSelected}) {
  return (
      <div className={active ? "projectList active" : "projectList" }
             onClick = {() => setSelected(id)}
    > 
      <div className="md:inline-flex mb-5 space-x-3 mr-1 md:mr-2  whitespace-nowrap ">
        <p className="tag">  {title}  </p>
    </div>
    </div>
  )
}

export default ProjectList;