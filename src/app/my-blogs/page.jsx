'use client';

import React, { ReactNode, useState } from 'react';

import { userProfile as user } from '@/data/dummy';
import Link from 'next/link';

const ProfilePage = () => {
  return (
    <div className='bg-gray-100 py-xs'>
      <div className='responsive_w flex flex-col gap-xs'>
        {/* ===================== Header section - START ===================== */}
        <section className='w-full shadow-md overflow-hidden bg-white'>
          <div className='relative w-full h-[12em]'>
            <img
              src={user.thumbnail}
              alt='ui-ux'
              className='h-full w-full object-cover object-center'
            />
            <div className='absolute h-[6em] w-[6em] rounded-full p-[5px] bottom-0 left-[50%] z-[10] translate-x-[-50%] translate-y-[30%] overflow-hidden shadow-lg bg-white'>
              <img
                src={user.profileImage}
                className='h-full w-full object-cover rounded-full'
              />
            </div>
          </div>
          <article className='py-lg text-center'>
            <h1 className='text-center font-semibold text-[1.2em] px-lg'>
              {user.name}
            </h1>
            <p className='text-[0.8em] px-md'>{user.headline}</p>
          </article>
        </section>
        {/* ===================== Header section - END ===================== */}
        {user.description && <AboutSection description={user.description} />}
        <PostsSection blogs={user.posts} />
        <SavedPostsSection savedBlogs={user.savedPosts} />
      </div>
    </div>
  );
};

export default ProfilePage;

const AboutSection = ({ description }) => {
  const [isOpen, setIsOpen] = useState < boolean > false;
  return (
    <ProfileSection heading='About'>
      <p
        className={`text-justify text-[1em] ${
          isOpen ? 'h-full' : 'h-[6em]'
        } leading-[1.5em] overflow-hidden`}
      >
        {description}
      </p>
      {!isOpen && (
        <div className='absolute inset-0 z-[5] bg-gradient-to-b from-transparent via-white/80 to-gray-50' />
      )}
      <div
        className={`${
          isOpen ? 'w-full flex justify-end' : 'absolute'
        } z-[10] bottom-0 right-0 bg-gray-50`}
      >
        <button
          className={` font-medium text-gray-500 hover:text-blue-500 pl-sm py-[0.2em] `}
          onClick={() => setIsOpen((state) => !state)}
        >
          ...see {isOpen ? 'less' : 'more'}
        </button>
      </div>
    </ProfileSection>
  );
};

const PostsSection = ({ blogs }) => {
  return (
    <ProfileSection heading='Blogs'>
      {blogs.length === 0 ? (
        <div className='w-full flex flex-col items-center'>
          <p>You have not posted any blogs yet</p>
          <button className='mt-xs px-xs bg-gray-300/80 text-black py-[0.2em] rounded-md  font-medium hover:bg-blue-500 hover:text-white hover:shadow-md hover:shadow-blue-400'>
            {' '}
            Lets create your first Blog
          </button>
        </div>
      ) : (
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <p>Total {blogs.length} blogs</p>
            <Link
              href={'/new-blog'}
              className='bg-white shadow-md px-xs py-[0.2em] rounded-[0.3em]  hover:text-blue-600 hover:shadow-blue-100'
            >
              Create New Posts
            </Link>
          </div>
          <ul className='flex flex-col gap-sm mt-md'>
            {blogs.slice(0, 3).map((blog) => (
              <li>
                <p className='text-gray-500 text-[0.8em]'>
                  {blog.updatedAt ? 'Updated' : 'Posted'} on :{' '}
                  {blog.createdAt.toDateString()}
                </p>
                <>
                  <div className='h-[5em] border-t-[1px] border-gray-200 hover:shadow-md overflow-hidden flex flex-row gap-xs group hover:bg-white'>
                    <img
                      className='h-full aspect-video w-auto object-cover'
                      src={blog.thumbnailImg}
                    />
                    <div className='w-full flex flex-col justify-evenly overflow-clip'>
                      <h1 className='font-medium truncate w-[100%] pr-xs group-hover:text-blue-600'>
                        {blog.title}
                      </h1>
                      <p className='text-[0.8em] text-gray-500'>
                        Total likes 22 | Total comments 22
                      </p>
                    </div>
                  </div>
                </>
              </li>
            ))}
            <Link href={'/my-blogs'} className='profile_see_all_btn mt-lg'>
              See all
            </Link>
          </ul>
        </div>
      )}
    </ProfileSection>
  );
};

const SavedPostsSection = ({ savedBlogs }) => {
  return (
    <ProfileSection heading='SavedBlogs'>
      {savedBlogs.length === 0 ? (
        <div className='w-full flex flex-col items-center'>
          <p>You have not saved any blogs yet</p>
        </div>
      ) : (
        <div className='flex flex-col'>
          <p>Total {savedBlogs.length} saved blogs</p>
          <ul className='flex flex-col gap-xs mt-md'>
            {savedBlogs.slice(0, 3).map((blog) => (
              <li>
                <>
                  <div className='h-[5em] border-t-[1px] border-gray-200 hover:shadow-md hover:bg-white overflow-hidden flex flex-row gap-xs group'>
                    <img
                      className='h-full aspect-video w-auto object-cover'
                      src={blog.thumbnailImg}
                    />
                    <div className='w-full flex flex-col justify-evenly overflow-clip'>
                      <h1 className='font-medium truncate w-[100%] pr-xs group-hover:text-blue-600'>
                        {blog.title}
                      </h1>
                      <p className='text-[0.8em] text-gray-500'>
                        By {blog.author?.name}
                      </p>
                    </div>
                  </div>
                </>
              </li>
            ))}
            <Link href={'/saved-blogs'} className='profile_see_all_btn mt-lg'>
              See all
            </Link>
          </ul>
        </div>
      )}
    </ProfileSection>
  );
};

const ProfileSection = ({ heading, children }) => {
  return (
    <section className='px-lg py-md shadow-md  overflow-hidden bg-gray-50 w-full'>
      <h1 className='font-semibold text-center text-[0.9em]'>{heading}</h1>
      <div className='relative mt-xs text-[0.7em] w-full text-gray-800'>
        {children}
      </div>
    </section>
  );
};
