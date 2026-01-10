"use client"
import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [valueTo, setValueTo] = useState(0);
    return (
        <div className='h-screen w-full flex flex-col items-center justify-center space-y-8'>
            <h1 className='text-5xl font-mono'>Count is {count}</h1>
            <div className='text-black space-x-2'>
                <button className='bg-white p-2' onClick={() => setCount(count + 1)}>Increase</button>
                <button className='bg-white p-2' onClick={() => setCount(count - 1)}>Decrease</button>
                <button className='bg-white p-2' onClick={() => setCount(0)}>Reset</button>
            </div>
            <div>
                <input type="text" className='focus:outline-none focus:ring-0 border px-2 py-1'
                    value={valueTo}
                    onChange={(e) => setValueTo(Number(e.target.value))}
                />
            </div>
            <button
                className='bg-white p-2 text-black'
                onClick={() => setCount(Number(valueTo))}
            >Set to {valueTo}</button>

        </div>
    )
}

export default Counter