<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">MOVE TO ABOUT</button>
    <hr>
    <AppGrid :items="items" v-slot="{item}">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  }
}
</script>

<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
}

const items = ref(['apple', 'berry', 'grape', 'banana']);

</script>

<style lang="scss" scoped></style>
