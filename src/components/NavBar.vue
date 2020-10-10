<template>
<nav class="bg-white shadow">
  <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <div>
        <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">Geo</a>
      </div>

      <!-- Mobile menu button -->
      <div class="flex md:hidden" @click="opened=!opened">
        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div class="md:flex items-center " :class="{'block':opened, 'hidden':!opened}">
      <div class="flex flex-col md:flex-row md:mx-6">
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Home</a>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Shop</a>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Contact</a>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">About</a>
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
