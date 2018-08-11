<template>
  <div class="container text-center p-16">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/" class="bg-orange hover:bg-orange-dark text-orange-lightest font-semibold py-2 px-4 rounded shadow">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>