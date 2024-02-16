import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";
import NextAuth from "next-auth/next";
import { SessionOptions } from "next-auth"; // Correct import

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Other providers can be added here
  ],
  session: {
    jwt: true,
  } as Partial<SessionOptions>,
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
