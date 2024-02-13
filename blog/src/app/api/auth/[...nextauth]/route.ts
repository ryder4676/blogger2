// File: api/auth/[...nextauth].ts

import NextAuth from "next-auth/next";
import { authConfig } from "../../../../lib/auth";
import bcrypt from "bcrypt";
import prisma from "../../../../lib/db";

const handler = NextAuth({
  ...authConfig,
  pages: {
    signIn: "/signin",
    // signOut: '/signout', // Customize the sign-out page URL
    // error: '/error', // Customize the error page URL
    // verifyRequest: '/verify-request', // Customize the email verification page URL
    // newUser: null, // No separate page for new user registration
    // Add your custom pages here if needed
  },
  callbacks: {
    async signIn(credentials) {
      try {
        const { email, password } = credentials;

        // Existing logic for finding the user by email using Prisma
        const user = await prisma.user.findUnique({
          where: { email },
        });

        // Check if the user exists
        if (!user) {
          return null;
        }

        // New code for password comparison
        if (user && user.hashedPassword) {
          const isPasswordCorrect = await bcrypt.compare(
            password,
            user.hashedPassword || ""
          );

          if (isPasswordCorrect) {
            return user.id.toString();
          }
        }

        return null;
      } catch (error) {
        console.error("Error during sign in:", error);
        throw new Error("Error during sign in");
      }
    },
    // Add other callbacks as needed
  },
});

export { handler as GET, handler as POST };
