import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

type Props = {}

const Header = (props: Props) => {
  const [isScroll, setIsScroll] = useState(false)
  const { logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScroll && 'bg-[#141414]'}`}>
      {/* logo and nav bar */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="/LoginPage/Netflix_2015_logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">首页</li>
          <li className="headerLink">电视剧</li>
          <li className="headerLink">电影</li>
          <li className="headerLink">最新上映</li>
          <li className="headerLink">我的收藏</li>
        </ul>
      </div>
      {/* buttons */}
      <div className="flex items-center space-x-2 text-sm font-light md:space-x-6">
        <SearchIcon className="hidden h-6 w-6 md:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href="/account"> */}
        <img
          src="/Header/account.png"
          alt="account"
          className="cursor-pointer rounded"
          onClick={logout}
        />
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header
