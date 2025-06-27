'use client'
import React from 'react'

type Props = {
  onClick: () => void
}
const GenerateSegitiga = ({ onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className=" bg-green-400 rounded cursor-pointer  p-2 "
        type="submit"
      >
        Generate Segitiga
      </button>
    </div>
  )
}

export default GenerateSegitiga
