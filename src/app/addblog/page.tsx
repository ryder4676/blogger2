// addblog.tsx

import React from 'react';
import FormNewPost from '@/components/form-new-post';

const AddBlogPage: React.FC = () => {
  return (
    <main className='max-w-4xl mx-auto my-5'>
      <FormNewPost />
    </main>
  );
};

export default AddBlogPage;
