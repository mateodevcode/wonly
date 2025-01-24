import Navbar from '@/components/navbar/Navbar'
import { logo } from '@/data/logo'
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen dark:bg-black'>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-screen'>
            <Link href={"/"} className='my-5'>
                <Image src={logo.src} alt={logo.alt} width={400} height={400} className='w-40 h-auto' />
            </Link>
            <div className='my-5'>
                <h1 className='xl:text-5xl lg:text-5xl md:text-4xl smd:text-2xl sm:text-2xl font-bold dark:text-white'>404 - Página no encontrada</h1>
            </div>
            <div className='my-10'>
                <Link href='/' className='dark:bg-white bg-black dark:text-black text-white px-4 py-2 rounded-md font-semibold dark:hover:bg-white/90 hover:bg-black/80'>
                    Volver al inicio
                </Link>
            </div>
        </div>
    </div>
  )
}