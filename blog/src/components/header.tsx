import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href="/" className="text-white text-2xl font-bold">
          <img
            src="/next.png" // Add the path to your blog logo or any image you prefer
            alt="Next.js Logo"
            className="w-32 h-32 rounded-full"
          />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blogs" className="text-white hover:underline">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-white hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
