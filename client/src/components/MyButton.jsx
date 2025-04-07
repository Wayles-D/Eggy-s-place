import React from 'react'

const MyButton = ({text ,className = "",onClick,disabled }) => {
  return (
    <button disabled={disabled} className={`bg-[#B67B0F] text-[#FBFBFB]  rounded-[31px] cursor-pointer ${className}`} onClick={onClick } > {text} </button>
  )
}

export default MyButton