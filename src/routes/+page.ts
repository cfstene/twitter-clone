import type { PageLoad } from "./$types";

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('/api/tweets'); 
  const tweets = response.json()
  return tweets
} 