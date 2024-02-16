import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';
import ButtonLogout from './button-logout';
import ButtonFormNewPost from './button-form-new-post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Image from 'next/image';

const Header = async () => {
  const session = await getServerSession(authOptions);
  

  return (<>
  
    <header className='bg-blue-500 p-4'>
      <nav className='flex justify-between items-center  max-w-4xl mx-auto'>
        <Link href="/" className="text-white text-2xl font-bold">
          <Image
            src="/../next.png" // Add the path to your blog logo or any image you prefer
            alt="Next.js Logo"
            className="w-32 h-32 rounded-full"
            width={90}
            height={90}
          />
        </Link>

        <ul className='flex space-x-4'>
          {session?.user?.name ? (
            <ButtonFormNewPost />
          ) : (
            <li>
              <Link href='/addblog'>
                
              </Link>
            </li>
          )}

          <li>
            <Link href='/blogs' className='text-white font-bold text-xl hover:underline'>
              Blogs
            </Link>
          </li>

          {session?.user?.name ? (
            <ButtonLogout />
          ) : (
            <li>
              <Link
                href='/api/auth/signin'
                className='text-white font-bold text-xl hover:underline'
              >
                login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;