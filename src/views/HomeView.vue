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
    <hr class="my-4">
    <h2>{{ position }}</h2>
    <h2>x: {{ x }}</h2>
    <h2>y: {{ y }}</h2>
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
import { reactive, ref, toRef, toRefs } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
}

const items = ref(['apple', 'berry', 'grape', 'banana']);

const position = reactive({
  x: 100,
  y: 1000,
});

// const x = ref(position.x);
// const y = ref(position.y);
// const {x, y} = position;

// const x = toRef(position, 'x');
// const y = toRef(position, 'y');

const {x, y} = toRefs(position);
</script>

<style lang="scss" scoped></style>
