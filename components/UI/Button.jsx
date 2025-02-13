import React from 'react'

export const Button = ({ style, text }) => {
    return (
        <button type='button' className={`${style} rounded-full border lg:text-lg border-black hover:bg-black/80 hover:text-white transition-colors duration-500 ease-in-out`}>
            {text}
        </button>
    )
}
