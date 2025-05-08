import React from 'react'
import Tasks from './Tasks';

function SelectedProjectC({project , onDelete , onAddTask , onDeleteTask , tasks}) {

    const formattedDate = project.date
    ? new Date(project.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'No date provided';
  

  return (
    <div className='w-[35rem] mt-16'>
    <header className='pb-4 mb-4 border-b-2 border-stone-300'>
        <div className='flex items-center justify-between mb-4'>
        <h1>
            {project.title}
        </h1>
        <button onClick={onDelete} className='px-4 py-2 text-xs md:text-base text-stone-400 rounded-md hover:bg-stone-700 hover:text-stone-200'>
            Delete
        </button>
        </div>
        <p>{formattedDate}</p>
        <p>{project.description}</p>
    </header>
    <h2>TASKS</h2>
    <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  )
}

export default SelectedProjectC
