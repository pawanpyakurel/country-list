import { HomePage } from '@/Feature/Home/Home'
import SearchBar from '@/components/Search/SearchBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-start justify-between '>
      <SearchBar />
      <HomePage />
    </main>
  )
}
