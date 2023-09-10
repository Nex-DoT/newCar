import Image from 'next/image'
import { Inter } from 'next/font/google';
import carsData from '@/data/carsData';
import Cars from '@/components/Cars';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Cars data={carsData}/>
   </>
  )
}
