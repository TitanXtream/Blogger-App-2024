import { BlogPostCard } from '..';

const BlogsList = ({ blogsList }) => {
  return (
    <ul className='responsive_w h-auto flex flex-col justify-start items-center xs:gap-y-xs gap-y-lg py-sm'>
      {blogsList.map((blog, i) => (
        <BlogPostCard key={i} blog={blog} />
      ))}
    </ul>
  );
};

export default BlogsList;
