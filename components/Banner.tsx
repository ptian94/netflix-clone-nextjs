import { useEffect, useState } from 'react'
import { posterBaseUrl } from '../constants/movie'
import { doubanRes, Movie } from '../typings'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'

type Props = {
  trending: Movie[]
}

const Banner = ({ trending }: Props) => {
  // console.log('trending:', trending)
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(trending[Math.floor(Math.random() * trending.length)])
  }, [trending])

  // console.log('movie:', movie)
  return (
    <div className="flex flex-col space-y-2 py-12 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${posterBaseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="poster"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.name || movie?.title || movie?.original_title}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerBtn bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          播放
        </button>
        <button className="bannerBtn bg-[grey]/70">
          更多信息
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  )
}

export default Banner
