import { getCurrentUser } from '@/lib/session';
import Link from 'next/link';
import ButtonLogout from './button-logout';

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <header className='bg-blue-500 p-4'>
      <nav className='flex justify-between items-center  max-w-4xl mx-auto'>
      <Link href="/" className="text-white text-2xl font-bold">
          <img
            src="/next.png" // Add the path to your blog logo or any image you prefer
            alt="Next.js Logo"
            className="w-32 h-32 rounded-full"
          />
        </Link>

        <ul className='flex space-x-4'>
          
        <li>
  <Link href='/addblog' className='text-white font-bold text-xl hover:underline'>
    
    Create Blog
    
  </Link>
</li>

          <li>
            <Link href='/blogs' className='text-white font-bold text-xl hover:underline'>
              Blogs
            </Link>
          </li>
          {user?.name ? (
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
  );
};

export default Header;
