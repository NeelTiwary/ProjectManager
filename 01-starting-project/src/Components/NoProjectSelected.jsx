import React from 'react'
import noProjectImage from '../assets/no-projects.png'

function NoProjectSelected({onStartAddProject}) {
  return (
    <div className='w-2/3 flex flex-col items-center justify-center h-full px-8 py-16 text-stone-50 bg-stone-900 rounded-l-xl shadow-lg'>
      <img src={noProjectImage} alt="No Project" className='mb-4 w-16 h-16 object-contain mx-auto' />
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200 '>No Project Selected</h2>
      <p className='text-stone-500'>Please select a project from the sidebar or create a new one.</p>
      <p>
        <button onClick={onStartAddProject}>Create new Project</button>
      </p>
    </div>
  )
}

export default NoProjectSelected
