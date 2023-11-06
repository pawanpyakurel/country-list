import Link from 'next/link'
import React from 'react'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

type FooterItem = {
  text: string
  url: string
}
type FooterProps = {
  footer?: FooterItem[]
}

const footerLinks = [
  { text: 'GitHub', url: 'https://github.com/pawanpyakurel' },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pawanpyakurel',
  },
  { text: 'Email', url: 'mailto:ppyakurel30.com' },
]

export const Footer = ({ footer = footerLinks }: FooterProps) => {
  return (
    <footer className='bg-gray-800 text-white p-2'>
      <div className='sm:flex-row flex-col container  mx-auto flex justify-between items-center  gap-4'>
        {footer?.map(({ text, url }, index) => (
          <div
            key={index + text}
            className='flex-1'
          >
            <Link
              href={url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex items-center hover:text-blue-500'>
                {text === 'GitHub' && <GitHub sx={{ marginRight: 1 }} />}
                {text === 'LinkedIn' && <LinkedIn sx={{ marginRight: 1 }} />}
                {text === 'Email' && <Email sx={{ marginRight: 1 }} />}
                {text}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
