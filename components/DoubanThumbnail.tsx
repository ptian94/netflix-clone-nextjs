import { doubanMovie } from '../typings'
import Image from 'next/image'

type Props = {
  movie: doubanMovie
}

const DoubanThumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={movie.poster}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default DoubanThumbnail
