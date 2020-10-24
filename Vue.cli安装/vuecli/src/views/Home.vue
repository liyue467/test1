<template>
  <div class="home">
    <p>加油</p>
    {{$route.query.id}}
    {{$route.query.name}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
