import React, {useState, useEffect, useRef} from "react";
import { createPortal } from "react-dom";
import { useToggle } from "../hooks/useToggle";

export function Tooltip ({text, children}){
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        const onMouseEnter = ()=> setIsOpen(true);
        const onMouseLeave = () => setIsOpen(false);
        ref.current.addEventListener('mouseenter',onMouseEnter);
        ref.current.addEventListener('mouseleave', onMouseLeave);
        return () =>{
            ref.current.removeEventListener('mouseenter',onMouseEnter);
            ref.current.removeEventListener('mouseleave', onMouseLeave)
        }
    },[])
    const tooltip = isOpen? (
        <div>
            <div className="tooltip" style={{fontSize:'16px',fontWeight:500, padding:5, boxShadow: "2px #888888"}}>{text}</div>
        </div>
    ): null;
    return (
        <div ref={ref} style={{display:'inline-block'}}>
            {children}
            {createPortal(tooltip, document.getElementById('tooltip-portal'))}
        </div>

    );

};