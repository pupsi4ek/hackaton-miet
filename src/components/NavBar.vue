<template>
<nav class="bg-white shadow">
  <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <div>
        <router-link to="/">
        <div class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">Geo</div>
        </router-link>
      </div>

      <div class="flex md:hidden" @click="opened=!opened">
        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="md:flex items-center " :class="{'block':opened, 'hidden':!opened}">
      <div class="flex flex-col md:flex-row md:mx-6">
        <router-link to="/">
          <div class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
            Home
          </div>
        </router-link>
        <router-link to="/login">
          <div class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
            Login
          </div>
        </router-link>
        <router-link to="/login">
          <div class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
            Logout
          </div>
        </router-link>
        <router-link to="/cabinet">
          <div class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">
            Cabinet
          </div>
        </router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    data ()
    {
        return {
            opened : false
        }
    }

}
</script>
