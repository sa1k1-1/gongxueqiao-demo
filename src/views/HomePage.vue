<script setup>
// 1. 导入我们的模拟数据
import { mockProjects } from '@/mock/db.js'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="home-page">
    <h1>项目广场</h1>
    <div class="project-list">
      <div v-for="project in mockProjects" :key="project.id" class="project-card">

        <h3>
          <RouterLink :to="'/project/' + project.id">
            {{ project.title }}
          </RouterLink>
        </h3>

        <div class="reward">￥{{ project.reward }}</div>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
        <div class="company">{{ project.companyName }}</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 项目之间的间距 */
}

.project-card {
  border: 1px solid #eee;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.project-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
}

.project-card h3 a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

.project-card h3 a:hover {
  text-decoration: underline;
}

.reward {
  font-size: 1.1rem;
  font-weight: bold;
  color: #d9534f; /* 红色，吸引眼球 */
  margin-bottom: 0.75rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background-color: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.company {
  font-size: 0.9rem;
  color: #777;
}
</style>
