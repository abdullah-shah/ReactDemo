import React from 'react';
import { useState } from 'react';
import {createPortal} from 'react-dom';
import { useToggle } from '../hooks/useToggle';
// import {useToggle} from './hooks/useToggle'

function DropdownPortal({html}) {
    const[isOpen, toggleState] = useToggle();   
  return (
    <>
        <button onClick={toggleState}>
            Dropdown<span>+</span>
        </button>
        {isOpen && createPortal(
            <div className='dropdown-menu'>
                {html}
            </div>,document.getElementById("dropdown-portal")
        )}
    </>
  )
}

export default DropdownPortal