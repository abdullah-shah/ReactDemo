import React from 'react';
import { useState } from 'react';

export function useToggle(initialState=false) {
    const [isOpen, setIsOpen]=useState(initialState);
    const toggleState = ()=>{
        setIsOpen(!isOpen)
    }
  return [isOpen, toggleState]
}
