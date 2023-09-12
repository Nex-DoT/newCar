import Image from 'next/image'
import { Inter } from 'next/font/google';
import carsData from '@/data/carsData';
import Cars from '@/components/Cars';
import Rangeprice from '@/components/Rangeprice';
import Category from '@/components/Category';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Rangeprice/>
      <Category/>
      <Cars data={carsData}/>
   </>
  )
}
