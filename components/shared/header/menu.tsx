import {ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export default function Menu ()  {
  return (
    <div className='flex justify-end'>
        <nav className='flex gap-3 w-full'>
            <Link href='/sigin' className='header-button flex items-center'>
             Hello, Sign in
            </Link>
            <Link href='/cart'>
              <div className='flex items-end'>
              <ShoppingCartIcon className='h-8 w-8'/>
                Cart
              </div>
              
            </Link>
        </nav>
    </div>
  )
}

