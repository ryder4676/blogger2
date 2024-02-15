"use client";

// ButtonFormNewPost component
import { useRouter } from 'next/router';

const ButtonFormNewPost = () => {
  const router = useRouter();

  const handleCreateBlog = () => {
    // Navigate to the /addblog page
    router.push('/addblog');
  };

  return (
    <button onClick={handleCreateBlog} className='text-white font-bold text-xl hover:underline'>
      Create Blog
    </button>
  );
};

export default ButtonFormNewPost;
