<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import PostService from '@/services/PostService'

const postService = new PostService()
const post = postService.getPost()

onMounted(async () => {
  const route = useRoute()
  const elm = route.params.id
  await postService.fetchById(elm)
})
</script>

<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
  <RouterLink :to="{name: 'home'}">Vovler atrás</RouterLink>
</template>
