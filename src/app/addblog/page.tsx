// addblog.tsx

import React from 'react';
import FormNewPost from '@/components/form-new-post';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function AddBlogPage() {

  const session = await getServerSession(authOptions);
  if (!session || !session.user){
    redirect("/api/auth/signin")
  }
  return (
    <main className='max-w-4xl mx-auto my-5'>
      <FormNewPost />
    </main>
  );
};


