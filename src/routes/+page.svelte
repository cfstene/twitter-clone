<script lang="ts">
  import NewTweet from "$lib/components/NewTweet.svelte";
  import Tweet from "$lib/components/Tweet.svelte";
  import type { ActionData, PageData } from "./$types";
  
  export let data: PageData;
  export let form: ActionData; 
</script>
<svelte:head>
    <title>cfstene - twitter clone</title>
</svelte:head>

<div class="p-5">
  <h1 class="text-2xl">Your feed</h1>
</div>

<NewTweet form={form} />


{#await data.tweets }
<p>loading...</p>
{:then}
   {#each data.tweets as tweet} 
  <Tweet tweet={tweet} />
  {/each} 
{/await}