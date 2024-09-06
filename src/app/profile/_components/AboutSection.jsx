'use client';

import { ProfileSection } from '../page';
import { useState } from 'react';

export const AboutSection = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);
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
