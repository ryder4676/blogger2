// import { getServerSession } from "next-auth";
// import { authOptions } from "./auth";

// export async function getCurrentUser() {
//   const session = await getServerSession(authOptions);
//   return session?.user;
// }
"use client";
import { SessionProvider } from "next-auth/react";
export default SessionProvider;