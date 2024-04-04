import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border border-gray-200'>
      <div className='flex flex-col justify-center items-center wrapper gap-4 text-center sm:flex-row sm:justify-between'>
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt='logo' width={128} height={38}/>
        </Link>
        <p>2024 EventVerse.All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer