import React from "react";

import { getCurrentUser } from "../lib/session";
import Footer from "@/components/footer";

export default async function Home() {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <main className="max-w-4xl mx-auto my-5">
      <div className="flex flex-col items-center py-14 bg-gray-200">
        <img
          src="/next.png" // Add the path to your blog logo or any image you prefer
          alt="Next.js Logo"
          className="w-44 h-44 rounded-full mb-14"
        />
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to My Next.js Learning Blog
          </h1>
          <p className="text-gray-700">
            Explore a journey through the world of Next.js as we share our
            experiences, challenges, and discoveries. From the basics to
            advanced concepts, this blog is a reflection of or learning process
            and a resource for those on a similar path.
          </p>
        </div>
      </div>

      {/* <FormNewPost /> */}
      <Footer />
    </main>
  );
}