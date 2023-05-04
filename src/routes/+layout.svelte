<script lang="ts">
  import "../app.postcss";

  let navItems = [
    {label: "Home", href: "/", icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />`},
    {label: "Explore", href: "/", icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />`},
    {label: "Notifications", href: "/", icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />`},
    {label: "Messages", href: "/messages", icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />`},
    {label: "Bookmarks", href: "/", icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />`},
    {label: "Profile", href: "/cfstene", icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />`},
    {label: "More", href: "/", icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`}
  ]

  let navState = {
    showUserMenu: false
  }

</script>

<div class="max-w-screen-xl mx-auto flex">
 
  <div class="fixed inset-y-0 z-50 flex w-20 lg:w-60 flex-col">
    <div class="flex grow flex-col gap-y-2 overflow-y-auto bg-white px-6 border-r">
      <div class="flex h-12 mt-3 shrink-0 items-center">
        <img class="h-8 w-8 lg:ml-2" src="/twitter.png" alt="Twitter Clone">
      </div>
      <nav class="flex flex-1 flex-col">

        <ul class="flex flex-1 flex-col">
          <li>
            <ul class="-mx-2 space-y-2">
              {#each navItems as item}
              <li>
                <a href="{item.href}" class="text-gray-900 hover:bg-gray-200 group flex items-center gap-x-3 py-2 px-2 lg:px-4 rounded-full text-lg leading-6 font-normal">
                  <svg class="h-7 w-7 shrink-0 text-gray-900" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    {@html item.icon}
                  </svg>
                  <span class="hidden lg:block">{item.label}</span>
                </a>
              </li>
              {/each}
            </ul>
          </li>

          <li class="-mx-6 mb-3 mt-auto">
            <div class:hidden={!navState.showUserMenu} class="absolute bottom-20 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-gray-100" >
              <div class="py-1" role="none">
                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
              </div>
            </div>

            <button on:click={()=> navState.showUserMenu = !navState.showUserMenu} class="flex items-center gap-x-4 px-6 py-3 rounded-full text-base leading-6 text-gray-900 hover:bg-gray-200 lg:mr-2">
              <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              <span class="sr-only">Your profile</span>
              <span class="hidden lg:block" aria-hidden="true">Christian Stene</span>
            </button>
          </li>

        </ul>
      </nav>
    </div>
  </div>

  <main class="pl-24 lg:pl-60 w-full md:w-9/12">
    <div>

      <slot />

    </div>
  </main>

  <!-- Static sidebar for desktop coming later -->
  <div class="hidden md:flex w-3/12">
  </div>

</div>


