<script setup>
// 1. 导入 ref 用于跟踪当前激活的标签页
import { computed, ref } from 'vue'
import { mockUser, mockProjects } from '@/mock/db.js'
import { RouterLink } from 'vue-router'

// 2. 标签页状态
const currentTab = ref('开发中') // 默认显示“开发中”
const tabs = ['开发中', '已申请', '已完成']

// 3. (逻辑不变) 获取所有“我的项目”的完整信息
const myProjectsFull = computed(() => {
  return mockUser.myProjects.map(userProject => {
    const projectDetails = mockProjects.find(p => p.id === userProject.projectId);
    return {
      ...projectDetails,
      userStatus: userProject.status
    };
  });
});

// 4. (新逻辑) 根据当前激活的标签页，过滤项目列表
const filteredProjects = computed(() => {
  return myProjectsFull.value.filter(p => p.userStatus === currentTab.value);
});
</script>

<template>
  <main class="my-projects-page">
    <h1>我的项目</h1>

    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div v-if="filteredProjects.length > 0" class="project-list">
      <div v-for="project in filteredProjects" :key="project.id" class="project-card">

        <span
          :class="['status-badge', project.userStatus.replace('已', '')]">
          {{ project.userStatus }}
        </span>

        <h3>
          <RouterLink :to="'/project/' + project.id">
            {{ project.title }}
          </RouterLink>
        </h3>
        <div class="reward">￥{{ project.reward }}</div>
        <div class="company">{{ project.companyName }}</div>
      </div>
    </div>

    <div v-else class="empty-state">
      <p>“{{ currentTab }}”分类下没有项目。</p>
    </div>
  </main>
</template>

<style scoped>
/* (大部分样式不变, 只在底部添加新样式) */
.my-projects-page { max-width: 800px; margin: 0 auto; padding: 0 1rem; }
.project-list { display: flex; flex-direction: column; gap: 1.5rem; }
.project-card { position: relative; border: 1px solid #eee; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.project-card h3 { margin: 0 0 0.5rem 0; font-size: 1.25rem; padding-right: 60px; }
.project-card h3 a { text-decoration: none; color: #333; font-weight: 600; }
.reward { font-size: 1.1rem; font-weight: bold; color: #d9534f; margin-bottom: 0.75rem; }
.company { font-size: 0.9rem; color: #777; }
.status-badge { position: absolute; top: 1.5rem; right: 1.5rem; padding: 0.25rem 0.6rem; border-radius: 12px; font-size: 0.8rem; font-weight: bold; color: #fff; }

/* (修改了类名, 兼容新状态) */
.status-badge.申请 { background-color: #f0ad4e; } /* 橙色 - 已申请 */
.status-badge.完成 { background-color: #5cb85c; } /* 绿色 - 已完成 */
.status-badge.开发中 { background-color: #007bff; } /* 蓝色 - 开发中 */


/* --- 以下是新增的样式 --- */
.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}
.tab-button {
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  color: #777;
  border-bottom: 2px solid transparent; /* 占位 */
}
.tab-button.active {
  color: hsla(160, 100%, 37%, 1);
  border-bottom: 2px solid hsla(160, 100%, 37%, 1);
  font-weight: bold;
}
.empty-state {
  padding: 2rem;
  text-align: center;
  color: #777;
  font-style: italic;
}
/* -------------------- */
</style>
