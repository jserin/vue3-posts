<template>
  <header>
    <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">LOGO</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/posts">Posts</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/nested">Nested</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/my">MyPage</RouterLink>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-outline-light" type="button" @click="goPage">
              ADD POST
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = () => {
  router.push({
    name: 'PostCreate',
  });
}
</script>

<style lang="scss" scoped></style>
