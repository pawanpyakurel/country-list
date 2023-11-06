'use client'

import React, { memo, useState } from 'react'
import { motion } from 'framer-motion'
import { CancelRounded, Search as SearchIcon } from '@mui/icons-material'
import { easeAnimVarient } from '@/variants/common'
import Input from '@/components/_common/Input'

export type SearchProps = {
  onSearch?: (field: string) => void
}

const Search = ({ onSearch }: SearchProps) => {
  const [onChangeSearch, setOnChangeSearch] = useState('')

  const clear = () => {
    !!onSearch && onSearch('')
    setOnChangeSearch('')
  }

  return (
    <div className='relative w-[80%] sm:w-2/5 my-5 left-6'>
      <div className='absolute mx-3 my-3 text-gray-600 '>
        <SearchIcon />
      </div>
      <Input
        className={`pl-11  pr-8 rounded-none  h-12 text-slate-800`}
        type='text'
        placeholder='Search for a country...'
        value={onChangeSearch}
        onBlur={(value) => !!onSearch && onSearch(value)}
        onDebounce={(value) => {
          !!onSearch && onSearch(value)
        }}
        setValue={(value) => {
          setOnChangeSearch(value)
        }}
        handleKeyDown={(event) =>
          event.key === 'Enter' && !!onSearch && onSearch(onChangeSearch)
        }
      />
      <div className='w-fit absolute top-0 h-full flex justify-center items-center right-2 text-gray-500 cursor-pointer'>
        <motion.div
          animate={!!onChangeSearch ? 'visible' : 'hidden'}
          variants={easeAnimVarient}
          onClick={clear}
        >
          <CancelRounded className='!h-5 !w-5' />
        </motion.div>
      </div>
    </div>
  )
}

export default memo(Search)
