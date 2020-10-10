<template>
  <div class="QuestList">
    <h1>Quest List</h1>
    <div
      class="p-4 md:w-1/2 xl:w-1/3 xxl:w-1/3 "
      v-for="quest in quests"
      :key="quest.id"
    >
        <questCard :quest="quest" />
    </div>
  </div>
</template>

<script>
import questCard from '@/components/questCard'

export default {
  name: "QuestsList",
  components: {questCard},
  data(){
    return{
      quests: [
    {
      "id": 0,
      "title": "Гид по Москве",
      "questImage": "MSK.gif",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat debitis veritatis nihil ex repellendus eum saepe, provident aspernatur et sint dolorem labore sit laudantium tenetur quia veniam laborum quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat debitis veritatis nihil ex repellendus eum saepe, provident aspernatur et sint dolorem labore sit laudantium tenetur quia veniam laborum quas.",
      "author": "Vasiliy Petrov",
      "published": "2020-10-10T12:30:00.511Z",
      "type": "public"
    },
    {
      "id": 1,
      "title": "Курс по новому офису",
      "questImage": "MSK.gif",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat debitis veritatis nihil ex repellendus eum saepe, provident aspernatur et sint dolorem labore sit laudantium tenetur quia veniam laborum quas. Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "author": "KirillShapkin",
      "published": "2020-10-10T13:30:00.511Z",
      "type": "private"
    }
  ]
    }
  }  
}
</script>
