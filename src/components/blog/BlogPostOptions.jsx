import React, { ReactNode } from 'react';
// import { Menu } from '@headlessui/react';
import { BsFillShareFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';

const BlogPostOptions = () => {
  const handler = () => {
    alert('Working');
  };
  return (
    // <Menu.Items
    //   className={
    //     'absolute bg-white shadow-md right-0 text-[0.8em] border-[1px] border-gray-200 flex flex-col whitespace-nowrap ring-0 outline-none z-[10]'
    //   }
    // >
    <div className='absolute bg-white shadow-md right-0 text-[0.8em] border-[1px] border-gray-200 flex flex-col whitespace-nowrap ring-0 outline-none z-[10]'>
      <OptionItem text='Edit' icon={<RiEdit2Fill />} onClick={handler} />
      <OptionItem text='Share' icon={<BsFillShareFill />} onClick={handler} />
      <OptionItem text='Delete' icon={<MdDelete />} onClick={handler} />
    </div>
    // </Menu.Items>
  );
};

export default BlogPostOptions;

const OptionItem = ({ onClick, text, icon }) => {
  return (
    <button onClick={onClick} className={'min-w-[10em] h-auto'}>
      <div
        className={`${'bg-transparent'} flex flex-row gap-xs px-xs py-[0.2em] rounded-sm items-center`}
      >
        {icon && (
          <div className='flex flex-row items-center justify-center h-[1.5em] aspect-square w-auto'>
            {icon}
          </div>
        )}

        {text}
      </div>
    </button>
    // <Menu.Item
    //   as={'button'}
    //   onClick={onClick}
    //   className={'min-w-[10em] h-auto'}
    // >
    //   {({ active }) => (
    //     <div
    //       className={`${
    //         active ? 'bg-gray-200' : 'bg-transparent'
    //       } flex flex-row gap-xs px-xs py-[0.2em] rounded-sm items-center`}
    //     >
    //       {icon && (
    //         <div className='flex flex-row items-center justify-center h-[1.5em] aspect-square w-auto'>
    //           {icon}
    //         </div>
    //       )}

    //       {text}
    //     </div>
    //   )}
    // </Menu.Item>
  );
};
