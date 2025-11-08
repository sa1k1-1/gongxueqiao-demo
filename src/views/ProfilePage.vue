<script setup>
// 1. (新) 导入 computed
import { ref, computed } from 'vue'

// 2. (新) 导入“技能总库”、“用户”和“项目库”
import { mockUser, mockAllSkills, mockProjects } from '@/mock/db.js'
import { RouterLink } from 'vue-router' // (新) 导入 RouterLink

// --- (技能栈逻辑保持不变) ---
const userSkills = ref([...mockUser.skills]);
function isSelected(skill) {
  return userSkills.value.includes(skill);
}
function toggleSkill(skill) {
  if (isSelected(skill)) {
    userSkills.value = userSkills.value.filter(s => s !== skill);
  } else {
    userSkills.value.push(skill);
  }
}
// --------------------


// --- 3. (新逻辑) 创建一个 computed 属性来筛选“已完成”的项目 ---
const completedProjects = computed(() => {
  // a. 筛选出用户项目中所有“已完成”的
  const completedUserProjects = mockUser.myProjects.filter(
    p => p.status === '已完成'
  );

  // b. 遍历筛选结果，去项目库中查找完整的项目信息
  return completedUserProjects.map(userProject => {
    return mockProjects.find(p => p.id === userProject.projectId);
  });
});
// --------------------

</script>

<template>
  <main class="profile-page">
    <div class="profile-header">
      <img :src="mockUser.avatarUrl" alt="用户头像" class="avatar">
      <h1>{{ mockUser.name }}</h1>
      <p>{{ mockUser.grade }} - {{ mockUser.major }}</p>
    </div>

    <div class="profile-section">
      <h2>我的技能栈 (点击可添加/移除)</h2>
      <div class="skills-list">
        <span
          v-for="skill in mockAllSkills"
          :key="skill"
          :class="['skill-tag', { selected: isSelected(skill) }]"
          @click="toggleSkill(skill)"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <div class="profile-section">
      <h2>我的作品集</h2>

      <div v-if="completedProjects.length > 0" class="project-list">
        <div v-for="project in completedProjects" :key="project.id" class="project-card">
          <span class="status-badge completed">已完成</span>
          <h3>
            <RouterLink :to="'/project/' + project.id">
              {{ project.title }}
            </RouterLink>
          </h3>
          <div class="reward">￥{{ project.reward }}</div>
          <div class="company">{{ project.companyName }}</div>
        </div>
      </div>

      <div v-else>
        <p class="empty-state">（暂无已完成的作品）</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* (大部分样式不变, 只在底部添加 project-card 相关的样式) */
.profile-page { max-width: 800px; margin: 0 auto; padding: 0 1rem; }
.profile-header { text-align: center; padding: 2rem; border-bottom: 1px solid #eee; }
.avatar { width: 100px; height: 100px; border-radius: 50%; border: 3px solid #eee; margin-bottom: 1rem; object-fit: cover; }
.profile-header h1 { margin: 0; }
.profile-header p { font-size: 1.1rem; color: #555; margin: 0.25rem 0 0 0; }
.profile-section { margin-top: 2rem; }
.profile-section h2 { font-size: 1.25rem; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem; }
.skills-list { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.skill-tag { background-color: #f0f0f0; color: #555; padding: 0.5rem 0.75rem; border-radius: 20px; font-weight: 500; cursor: pointer; transition: all 0.2s ease; }
.skill-tag.selected { background-color: hsla(160, 100%, 37%, 0.1); color: hsla(160, 100%, 32%, 1); box-shadow: 0 0 0 2px hsla(160, 100%, 37%, 0.5); }

/* --- 以下是新增的样式 (复用自 MyProjectsPage) --- */
.project-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.project-card {
  position: relative;
  border: 1px solid #eee;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.project-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  padding-right: 60px;
}
.project-card h3 a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}
.reward {
  font-size: 1.1rem;
  font-weight: bold;
  color: #d9534f;
  margin-bottom: 0.75rem;
}
.company {
  font-size: 0.9rem;
  color: #777;
}
.status-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.25rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
}
.status-badge.completed {
  background-color: #5cb85c; /* 绿色 - 已完成 */
}
.empty-state {
  color: #777;
  font-style: italic;
}
/* -------------------- */
</style>
