import React from 'react'

type HeaderProps = {
  title?: string
}

export const Header = ({ title = 'Where in the world?' }: HeaderProps) => (
  <div className='text-heading p-5 bg-white border-b-2'>
    <h1 className='font-bold text-2xl font-nutino '>{title}</h1>
  </div>
)
