<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">项目广场</RouterLink>
        <RouterLink to="/my-projects">我的项目</RouterLink>
        <RouterLink to="/profile">个人中心</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  margin-bottom: 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* Vue路由会自动为当前激活的链接添加 'router-link-exact-active' 类 */
nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1); /* Vue的标志性绿色 */
  font-weight: bold;
}
</style>
