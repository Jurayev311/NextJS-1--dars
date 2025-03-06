import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-slate-50 shadow-md'>
      <div className='container mx-auto max-w-[1380px]'>
        <nav className='flex items-center justify-between h-[60px]'>
          <div>
            <h2>Next JS</h2>
          </div>

          <ul className='flex gap-3 items-center'>
            <Link href={'/'}>Home</Link>
            <Link href={'/user'}>User</Link>
            <Link href={'/recipe'}>Home</Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header