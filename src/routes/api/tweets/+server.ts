import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const GET = async () => {
  const tweets = (await prisma.tweets.findMany()).reverse();
  return json({tweets})
}