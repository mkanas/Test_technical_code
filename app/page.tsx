'use client'

import { useState } from 'react'
import GenerateSegitiga from './components/GenerateSegitiga'
import GenerateBilanganGanjil from './components/GenerateBilanganGanjil'
import GenerateBilanganPrima from './components/GenerateBilanganPrima'

export default function Home() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>([])
  const [error, setError] = useState('')

  const isValidNumber = (str: string) => /^\d+$/.test(str)

  const handleGenerate = (type: 'segitiga' | 'ganjil' | 'prima') => {
    if (!isValidNumber(input)) {
      setError('Masukkan hanya angka valid')
      setOutput([])
      return
    }

    setError('')
    const number = parseInt(input)
    let result: string[] = []

    if (type === 'segitiga') {
      const resultTemp: string[] = []
      let i = 1
      let index = 0

      while (index < input.length) {
        const group = input.slice(index, index + i)
        resultTemp.push(group)
        index += i
        i++
      }

      // Lanjutkan menampilkan baris nol setelah input habis
      while (i <= 6) {
        resultTemp.push('0'.repeat(i))
        i++
      }

      result = resultTemp
    }

    if (type === 'ganjil') {
      for (let i = 1; i <= number; i += 2) {
        result.push(i.toString())
      }
    }

    if (type === 'prima') {
      for (let i = 2; i <= number; i++) {
        let isPrime = true
        for (let j = 2; j * j <= i; j++) {
          if (i % j === 0) {
            isPrime = false
            break
          }
        }
        if (isPrime) result.push(i.toString())
      }
    }

    setOutput(result)
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Generator Angka</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Masukkan angka"
        className="border p-2 rounded w-full mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        <GenerateSegitiga onClick={() => handleGenerate('segitiga')} />
        <GenerateBilanganGanjil onClick={() => handleGenerate('ganjil')} />
        <GenerateBilanganPrima onClick={() => handleGenerate('prima')} />
      </div>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <div className="bg-gray-100 p-4 rounded whitespace-pre-line max-h-[300px] overflow-auto">
        {output.length > 0 ? output.join('\n') : 'Belum ada hasil.'}
      </div>
    </main>
  )
}
