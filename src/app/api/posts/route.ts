import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  try {
    if(!session?.user?.email) {
      return NextResponse.json({ message: 'Not Authenticated!' }, { status: 401 })
    }

    const { title, content } = await req.json();
    const newPost = await prisma.post.create({
      data: {
        title, content, authorEmail: session?.user.email
      }
    })
    return NextResponse.json({newPost}, { status: 200})

  } catch(error) {
    return NextResponse.json({ message: 'Something went wrong!'}, { status: 500 })
  }
}