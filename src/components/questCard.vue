<template>
  <div class="questCard">
    <div
      class="h-full hover:shadow-md border-gray-200  overflow-hidden transition duration-500 ease-in-out"
    >
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        :src="require('../assets/images/' + quest.questImage)"
        alt="blog"
      />
      <div class="flex items-start py-5 px-5">
        <div>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            {{ quest.title }}
          </h1>
          <p class="type text-gray-600">{{ quest.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestCard",
  props: ["quest"]
}
</script>

<style>

</style>