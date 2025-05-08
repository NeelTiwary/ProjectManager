import React from 'react'
import Input from './Input'
import Button from './Button'
import { useRef } from 'react'
import Modal from './Modal'


function NewProject({onAdd ,onCancel}) {
  const modal = useRef()

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value
    //console.log(enteredTitle, enteredDescription, enteredDueDate)

    //validation...
    if(enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredDueDate.trim().length === 0) {
      //show error modal
      modal.current.open()
      return
    }


    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <>
    <Modal className="bg-cyan-600" ref={modal} buttonCaption="Close">
      <h2 className="text-lg font-bold">Invalid Input</h2>
      <p className="text-sm">Please fill in the details below:</p>
    </Modal>
    <div className=' px-8 py-16 rounded-l-xl shadow-lg w-[35rem] '>                  
    <menu className='flex items-center justify-end gap-4 my-4 mb-8'>
        <li><button className='text-red-500 hover:text-red-900' onClick={onCancel}>Cancel</button></li>
        <li><Button 
        onClick={handleSave}>Save</Button></li>
    </menu>
    <div className='flex flex-col gap-4'>
    
      {/* Add your project details form here */}
      <Input ref={title} type="text" label="Title" required />  
      <Input ref={description} label="Description" textarea required />
      <Input ref={dueDate} label="Due date" type="date" required />             
    </div>
    </div>
    </>
  )
}

export default NewProject
