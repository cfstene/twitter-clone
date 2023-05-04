export const ssr = false;

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import type { Actions } from "@sveltejs/kit";


export const actions: Actions = {
  createTweet: async ({request}) => {
    const data = await request.formData(); 
    const tweet = data.get('tweet') as string;

    const response = await prisma.tweets.create({
      data: {
        text: tweet
      }
    }); 
    return {success: true};
  }, 

  deleteTweet: async ({request}) => {
    const data = await request.formData();
    const tweetId = data.get('tweetId') as string;

    const response = await prisma.tweets.delete({
      where: {
        id: parseInt(tweetId)
      }
    });
  }
}