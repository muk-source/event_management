'use client'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavItems = () => {
    const pathname = usePathname()
  return (
    <ul className='w-full flex flex-col gap-5 md:flex-row md:flex-between'>
        {headerLinks.map((link)=> {
            const isActive = pathname === link.route
            return (
                <li className={`${isActive && 'text-primary-500'}`}>
                    <Link href={link.route}>{link.label}</Link>
                </li>
            )
        })}
    </ul>
  )
}
