import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const GET = async () => {
  const tweets = await prisma.tweets.findMany();

  return json({tweets})
}