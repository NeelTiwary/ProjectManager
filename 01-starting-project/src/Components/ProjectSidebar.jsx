import React from 'react'
import Button from './Button'

function ProjectSidebar({onStartAddProject  , projects ,onSelectProject ,selectedProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl shadow-lg">
      {/* Add your sidebar content here */}
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200 '>Your Project</h2>
      <p>Welcome to your project dashboard!</p>
      <div>
       <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClass = 'w-full hover:text-stone-200 rounded-sm'

          if(project.id === selectedProject) {
            cssClass += ' bg-stone-700 text-stone-200'
          }else{
            cssClass += ' text-stone-400'
          }


          return (
          <li key={project.id} className=''>
            <button onClick={() => onSelectProject(project.id)} className={cssClass}>{project.title}</button>
          </li>
          ) 
        }
          
        )}
      </ul>
    </aside>
  )
}

export default ProjectSidebar
