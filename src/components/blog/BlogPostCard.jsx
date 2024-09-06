'use client';

import React, { useState } from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { BlogPostOptions } from '..';
import Link from 'next/link';
import { AiTwotoneLike } from 'react-icons/ai';
import { RiChat4Fill, RiSendPlaneFill } from 'react-icons/ri';

const BlogPostCard = ({ blog }) => {
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <li className='flex gap-sm p-xs bg-white w-full xs:flex-row flex-col xs:h-[11em] h-auto'>
      <div className='xs:basis-[15em] flex-shrink-0 xs:h-full 2xs:h-[20em] h-[12em] order-1'>
        <img
          src={blog.thumbnailImg}
          alt={blog.title}
          className='h-full w-full object-cover'
        />
      </div>
      <article className='flex flex-col w-full h-auto xs:text-[1em] text-[1.3em] xs:order-2 order-3'>
        <div className='flex justify-between gap-x-sm'>
          <Link href={'dg'} className='hover:text-blue-600'>
            <h1 className='leading-tight font-semibold sx:text-start text-justify'>
              {blog.title}
            </h1>
          </Link>
        </div>
        <p className='mt-sm text-gray-400 text-[0.7em] space-x-sm'>
          {blog?.author?.link ? (
            <Link
              href={blog.author?.link}
              className='text-slate-600 hover:text-blue-500 font-medium'
            >
              @{blog.author.name}
            </Link>
          ) : (
            <span className='font-medium'>{blog.author?.name}</span>
          )}
          <span>{blog.createdAt.toDateString()}</span>
        </p>
        <Link
          href={''}
          className='h-full overflow-y-clip text-[0.7em] mt-sm text-gray-700 text-justify hover:text-blue-600'
        >
          {blog.description}
        </Link>
      </article>
      <div className='h-auto flex xs:flex-col flex-row-reverse justify-between xs:order-3 order-2 xs:text-[1em] text-[1.5em]'>
        <div className={'relative'}>
          <button
            className='h-max rounded-full hover:text-gray-500 active:text-blue-500 outline-none xs:text-center text-end'
            onClick={() => setOpenOptions(true)}
          >
            <BiDotsVertical />
          </button>
          {openOptions && <BlogPostOptions />}
        </div>
        <BlogReactions />
      </div>
    </li>
  );
};

export default BlogPostCard;

const BlogReactions = () => {
  return (
    <div
      className={
        'flex xs:flex-col flex-row gap-y-xs text-[0.8em] xs:gap-x-0 gap-x-[0.5em]'
      }
    >
      <BlogReactionBtn icon={<RiSendPlaneFill />} />
      <BlogReactionBtn number={22} icon={<RiChat4Fill />} />
      <BlogReactionBtn number={22} icon={<AiTwotoneLike />} />
    </div>
  );
};

const BlogReactionBtn = ({ icon, number, onClick }) => {
  return (
    <button
      className='relative text-[1em] group flex xs:flex-col flex-row items-center '
      onClick={onClick}
    >
      <p className='text-[0.6em] leading-tight text-gray-500/60'>{number}</p>
      <span className='text-gray-500/80 group-hover:text-gray-800'>{icon}</span>
    </button>
  );
};
