import { BlogsList } from '@/components';
import { blogPosts } from '@/data/dummy';
// import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <BlogsList blogsList={blogPosts} />
    </div>
  );
}
