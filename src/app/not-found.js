import Navbar from '@/components/navbar/Navbar'
import { logo } from '@/data/navbar'
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen bg-black'>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-screen'>
            <Link href={"/"} className='my-5'>
                <Image src={logo.src} alt={logo.src} width={400} height={400} className='w-80 h-24' />
            </Link>
            <div className='my-5'>
                <h1 className='text-5xl font-bold text-white'>404 - Página no encontrada</h1>
            </div>
            <h2 className='my-5'>
                <Link href='/' className='bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-white/90'>
                    Volver al inicio
                </Link>
            </h2>
        </div>
    </div>
  )
}