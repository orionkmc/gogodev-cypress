<script lang="ts" setup>
import { ref } from 'vue'
import { useAuth } from '@/store/useAuth'
import router from '@/router'

const store = useAuth()
const email = ref('')
const password = ref('')
const error = ref(false)

const login = () => {
  error.value = store.login(email.value, password.value)
  if (store.is_auth) router.push('/')
}
</script>

<template>
  <h1>Login</h1>
  <input type="text" placeholder="email" v-model="email"> <br>
  <input type="password" placeholder="password" v-model="password"> <br>
  <button @click="login()">Login</button>
  <div v-if="error">
    <p>Wrong email or password</p>
  </div>
</template>
