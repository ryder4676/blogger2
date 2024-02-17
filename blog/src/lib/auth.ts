import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "./db";
import { AdapterUser } from "next-auth/adapters";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // Authorize function is called during login attempt
      async authorize(credentials: any) {
        try {
          // Find a user in the database based on the provided email
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          // Check if user and hashedPassword exist in the database
          if (user && user.hashedPassword) {
            // Compare the provided password with the hashed password
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.hashedPassword
            );

            // If password is correct, return user details
            if (isPasswordCorrect) {
              return {
                ...user,
                id: user.id.toString(),
              };
            }
          }

          // Return null if user not found or password is incorrect
          return null;
        } catch (err: any) {
          // Throw an error if an exception occurs during authorization
          console.error("Authorization error:", err);
          throw new Error("Authorization error");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};

export default authConfig;
