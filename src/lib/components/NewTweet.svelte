<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "../../routes/$types";
  export let form: ActionData; 

  let submitting = false;

  $: if (form?.success) {
    submitting = false
  }

</script>

<div class="flex items-start space-x-4 p-5 border-t border-b border-r">
  <div class="flex-shrink-0">
    <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
  </div>
  <div class="min-w-0 flex-1">

    <form method="post" action="?/createTweet" use:enhance on:submit={()=> submitting = true}>
      <div class="border-b border-gray-200 focus-within:border-indigo-600">
        <textarea 
          autocomplete="off"
          autosave="off"
          rows="2" 
          name="tweet" 
          id="tweet" 
          class="block w-full resize-none border-0 border-b border-transparent p-3 pb-2 text-gray-900 placeholder:text-gray-400 text-lg outline-none" 
          placeholder="What's happening?"></textarea>
      </div>
        <div class="flex-shrink-0 flex justify-between mt-2">
          <div class="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>       
          </div>
          {#if submitting}
          <button type="submit" disabled class="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submitting... </button>
          {:else}
          <button type="submit" class="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Tweet</button>
          {/if}
        </div>
    </form>

  </div>
</div>
