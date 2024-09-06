import Link from 'next/link';
import React from 'react';

import { BiLogOut } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white py-xs px-xs'>
      <div className='w-full max-w-[800px] m-auto flex justify-between items-center'>
        <Link href={'/'} className='font-semibold'>
          Blog app
        </Link>
        <div>
          <nav className='text-[0.6em] flex gap-[2em]'>
            <NavBtn text='Profile' link='/profile' />
            <NavBtn text='New Blog' link='/new-blog' />
            <NavBtn text='My Blogs' link='/my-blogs' />
            <NavBtn text='Saved Blogs' link='/saved-blogs' />
          </nav>
        </div>
        <button className='text-white text-[1.2em]'>
          <BiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const NavBtn = ({ text, link }) => {
  return (
    <Link
      href={link}
      className='px-[1em] py-[0.2em] hover:bg-white/20 rounded-sm'
    >
      {text}
    </Link>
  );
};
