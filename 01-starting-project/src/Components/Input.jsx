import React from 'react'
import { forwardRef } from 'react'


const Input = forwardRef((({label , textarea , ...props } ,ref) => {

  return (
    <p className='flex flex-col gap-2 mb-4'>
        <label className='flex items-center gap-2 text-sm font-bold text-stone-500'>
            <span className='text-stone-500'>{label}</span>
            {textarea && <span className='text-stone-500'> (optional)</span>}
        </label>
        {textarea ? (
          <textarea ref={ref} {...props} className='w-full px-4 py-2 text-stone-900 rounded-md' placeholder='Enter project description'></textarea>
        ) : (
          <input ref={ref} {...props} className='w-full px-4 py-2 text-stone-900 rounded-md' placeholder='Enter project name' />
        )}                                                                                      
    </p>
  )
})
)

export default Input
