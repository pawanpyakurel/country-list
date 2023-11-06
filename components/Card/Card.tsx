'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { shakeAnimationVariants } from '@/variants/cardView'

type Flags = {
  png: string
  svg: string
  alt: string
}

type CardProps = {
  flags?: Flags
  heading?: string
  population?: string
  region?: string
  capital?: string
}

export const Card = ({
  capital = '',
  heading = '',
  flags,
  population = '',
  region = '',
}: CardProps) => {
  return (
    <motion.div
      className='bg-white rounded-lg shadow-sm w-72 md:w-80 h-full md:h-64 flex-grow px-3 pb-4 hover:cursor-pointer'
      whileHover={{ scale: 1.05 }}
    >
      <div className='flex justify-center'>
        <div className='relative w-[70%] h-20  md:h-26 l lg:h-30'>
          <Image
            src={flags?.png ?? ''}
            alt={flags?.alt ?? 'flag'}
            layout='fill'
            objectFit='fill'
            className='border-radius-bottom'
          />
        </div>
      </div>
      <h3 className='text-center text-lg text-heading md:text-xl lg:text-2xl font-semibold mt-4'>
        {heading}
      </h3>
      <div className='mt-4 flex gap-1 text-base flex-col justify-between'>
        <div className='text-sm'>
          <span className='font-semibold'>Population:</span>
          <span className='md:ml-2 lg:ml-3'>{population}</span>
        </div>
        <div className='text-sm'>
          <span className='font-semibold'>Region:</span>
          <span className='md:ml-2 lg:ml-3'>{region}</span>
        </div>
        <div className='text-sm'>
          <span className='font-semibold'>Capital:</span>
          <span className='md:ml-2 lg:ml-3'>{capital}</span>
        </div>
      </div>
    </motion.div>
  )
}
