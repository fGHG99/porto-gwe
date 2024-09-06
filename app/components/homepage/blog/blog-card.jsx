import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

function BlogCard({ title, description, coverImage, reactionsCount, commentsCount, readingTime }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={coverImage}
          height={1080}
          width={1920}
          alt="Blog cover image"
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{reactionsCount}</span>
            </p>
            {commentsCount > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{commentsCount}</span>
              </p>
            )}
          </div>
        </div>
        <Link target="_blank" href="#">
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
            {title}
          </p>
        </Link>
        <p className="mb-2 text-sm text-[#16f2b3]">
          {`${readingTime} Min Read`}
        </p>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
