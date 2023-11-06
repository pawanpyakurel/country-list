import { Card } from '@/components/Card/Card'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'

type HomePageProps = {}

async function getData() {
  const res = await fetch('https://restcountries.com/v3.1/all')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const HomePage = async ({}: HomePageProps) => {
  const countryList = await getData()

  return (
    <div className='flex flex-1 gap-5 flex-wrap p-4 pt-1'>
      {countryList?.map((item: (typeof countryList)[number], index: number) => (
        <Card
          key={index + item?.name?.official}
          flags={item?.flags}
          heading={item?.name?.common}
          population={item?.population}
          region={item?.region}
          capital={item?.capital}
        />
      ))}
    </div>
  )
}
