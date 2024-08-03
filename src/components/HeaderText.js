import React from 'react';
import { AiFillBank } from "react-icons/ai";

function HeaderText({ name, task }) {
    return (
        <div className='flex flex-col items-center gap-3 pb-5 font-railway'>
            <div className='text-lg flex gap-1 items-center text-[color:var(--textColor)]'><AiFillBank className='w-7 h-7 text-blue-600' /><span>{task}</span></div>
            <div className="text-5xl text-[color:var(--primaryColor)]">{name}</div>
        </div>
    )
}

export default HeaderText