import React, { useState } from 'react'

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('')

  function handleChange(event) {
    setEnteredTask(event.target.value)
  }

  function handleClick() {
    if (enteredTask.trim() === '') return;
    onAdd(enteredTask)
    setEnteredTask('')
  }

  return (
    <div>
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        className="px-4 mx-2 py-2 text-xs md:text-base text-stone-400 rounded-md hover:bg-stone-700 hover:text-stone-200"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  )
}

export default NewTask
