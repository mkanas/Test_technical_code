'use client'
import React from 'react'

type Props = {
  onClick: () => void
}
const GenerateBilanganPrima = ({ onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-green-400 text-black rounded cursor-pointer  p-2"
        type="submit"
      >
        Generate Bilangan Prima
      </button>
    </div>
  )
}

export default GenerateBilanganPrima
