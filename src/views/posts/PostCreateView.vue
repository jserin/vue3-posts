<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4">
    <form @submit.prevent>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="text" class="form-control" id="title">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
    </form>
    <div class="pt-4">
      <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">LIST</button>
      <button class="btn btn-primary">SAVE</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goListPage = () => router.push({ name: 'PostList' });
</script>

<style lang="scss" scoped>

</style>