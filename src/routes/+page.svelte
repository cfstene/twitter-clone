<script lang="ts">
  import NewTweet from "$lib/components/NewTweet.svelte";
  import Tweet from "$lib/components/Tweet.svelte";
  import type { Tweets } from "@prisma/client";
  import type { ActionData, PageData } from "./$types";

  async function getTweets() {
    const res = await fetch("/api/tweets");
    const data = await res.json();
    return data.tweets;
  }

  let tweets = getTweets() as unknown as Tweets[]
  export let form: ActionData; 
</script>
<svelte:head>
    <title>cfstene - twitter clone</title>
</svelte:head>

<div class="p-5">
  <h1 class="text-2xl">Your feed</h1>
</div>

<NewTweet form={form} />

{#await tweets }
<div class="flex justify-center mt-5">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 animate-spin">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>  
</div>
{:then tweets}
  {#each tweets as tweet} 
    <Tweet tweet={tweet} />
  {/each} 
{/await}
