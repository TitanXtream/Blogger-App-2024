import { BlogsList } from '@/components';
import { userProfile as user } from '@/data/dummy';

const page = () => {
  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <BlogsList blogsList={user.savedPosts} />
    </div>
  );
};

export default page;
