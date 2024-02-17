import Comments from '@/components/comments';
import FormComment from '@/components/form-comments';
import React from 'react'

const BlogDetailPage = () => {
  return (
    <div className='max-w-4xl mx-auto py-8'>
    <h1 className='text-3xl font-bold'>Post one</h1>
    <p>Written by: John Doe</p>
    <div className='mt-4'>Lorem Ipsum dolor sit, amet consectetur adipisicing elit.</div>
     <Comments />
     <FormComment />
    </div>
   
  )
}

export default BlogDetailPage;