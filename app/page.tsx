import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className='text-bold text-red-500' >
        <h1>Hello World</h1>
      </div>
    </main>
  )
}
