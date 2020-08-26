<template>
  <div>导航栏 | <router-link to="/">Qing</router-link> | <router-link to="/xxx">Qing2</router-link></div>
  <hr>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>
