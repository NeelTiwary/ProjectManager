import React from 'react'
import {createPortal} from 'react-dom'
import { forwardRef , useImperativeHandle } from 'react'
import { useRef } from 'react'

const Modal = forwardRef(function Modal({children , buttonCaption} ,ref) {

    const dialog = useRef()
    useImperativeHandle(ref , () => {
        return{
            open(){
                dialog.current.showModal()
            }
        }
    })


  return createPortal (
    <dialog className='backdrop:bg-stone-900/90 p-4 rounded shadow' ref={dialog}>
        {children}
        <form method="dialog">
            <button className='px-4 py-2 text-xs md:text-base text-stone-400 rounded-md hover:bg-stone-700 hover:text-stone-200' type="submit">
                {buttonCaption}
            </button>
        </form>
    </dialog> , 
    document.getElementById('modal-root')
  )
})

export default Modal
