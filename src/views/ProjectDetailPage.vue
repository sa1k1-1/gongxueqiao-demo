<script setup>
import { computed } from 'vue'
// 1. (新) 同时导入 mockUser，我们需要检查它的状态
import { mockProjects, mockUser } from '@/mock/db.js'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// 2. (不变) 查找项目详情
const project = computed(() => {
  return mockProjects.find(p => p.id === props.id)
})

// 3. (新逻辑) 检查当前用户与此项目的关系
const userProjectStatus = computed(() => {
  const userProject = mockUser.myProjects.find(p => p.projectId === props.id);
  // 返回状态 (例如 '开发中', '已申请')，如果没找到则返回 null
  return userProject ? userProject.status : null;
})

// (不变) 模拟申请功能
function applyForProject() {
  alert(`成功申请项目：${project.value.title}！\n\n(这是一个演示，数据未真实提交)`)
}

// 4. (新功能) 模拟交付功能
function deliverProject() {
  alert(`已提交项目：${project.value.title}！\n\n(这是一个演示，等待企业验收)`)
}
</script>

<template>
  <main class="project-detail">
    <div v-if="project">

      <div class="detail-header">
        <h1>{{ project.title }}</h1>
        <div class="reward">￥{{ project.reward }}</div>
      </div>
      <div class="company-info">...</div>
      <div class="tags">...</div>
      <div class="detail-body">

        <div v-if="userProjectStatus === '开发中'" class="requirements-box">
          <h2><i class="icon">🚀</i> 具体需求说明</h2>
          <p>这是一个内部需求说明框，仅对已接受项目的开发者可见。</p>
          <ul>
            <li>需求文档: <a href="#">点击下载需求文档.pdf</a></li>
            <li>交付标准: 项目需打包为Docker镜像提交。</li>
            <li>验收SOP: ...</li>
          </ul>
        </div>
        <h2>项目描述</h2>
        <p>{{ project.description }}</p>

        <h2>技能要求</h2>
        <ul>
          <li v-for="(req, index) in project.requirements" :key="index">
            {{ req }}
          </li>
        </ul>
      </div>

      <div class="button-container">

        <button v-if="!userProjectStatus" @click="applyForProject" class="apply-button">
          立即申请
        </button>

        <button v-else-if="userProjectStatus === '开发中'" @click="deliverProject" class="deliver-button">
          交付项目
        </button>

        <button v-else-if="userProjectStatus === '已申请'" class="apply-button disabled" disabled>
          申请审核中
        </button>

        <button v-else-if="userProjectStatus === '已完成'" class="apply-button disabled" disabled>
          项目已完成
        </button>

      </div>
    </div>

    <div v-else>
      <h1>未找到项目</h1>
      <p>您要查找的项目不存在或已被删除。</p>
    </div>
  </main>
</template>

<style scoped>
/* (大部分样式不变, 只在底部添加新样式) */
.project-detail { max-width: 800px; margin: 0 auto; padding: 0 1rem; }
.detail-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
.detail-header h1 { margin: 0; font-size: 1.75rem; }
.reward { font-size: 1.5rem; font-weight: bold; color: #d9534f; white-space: nowrap; padding-left: 1rem; }
.company-info { display: flex; align-items: center; gap: 0.75rem; margin-top: 1.5rem; color: #555; }
.logo { width: 32px; height: 32px; border-radius: 4px; border: 1px solid #eee; }
.cycle { margin-left: auto; font-style: italic; font-size: 0.9rem; }
.tags { display: flex; gap: 0.5rem; margin-top: 1rem; }
.tag { background-color: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; }
.detail-body { margin-top: 2rem; }
.detail-body h2 { font-size: 1.25rem; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; margin-top: 2rem; }
.detail-body ul { padding-left: 1.5rem; line-height: 1.8; }

/* (apply-button 样式不变) */
.apply-button { display: block; width: 100%; padding: 0.75rem 1rem; margin: 3rem 0; font-size: 1.1rem; font-weight: bold; color: #fff; background-color: hsla(160, 100%, 37%, 1); border: none; border-radius: 8px; cursor: pointer; transition: background-color 0.2s; }
.apply-button:hover { background-color: hsla(160, 100%, 32%, 1); }


/* --- 以下是新增/修改的样式 --- */
.requirements-box {
  background-color: #fffbef; /* 醒目的淡黄色背景 */
  border: 1px solid #ffeeba;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.requirements-box h2 {
  margin-top: 0;
  color: #856404;
}
.requirements-box ul {
  margin-bottom: 0.5rem;
}

/* 交付按钮样式 */
.deliver-button {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 3rem 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff; /* 醒目的蓝色 */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.deliver-button:hover {
  background-color: #0056b3;
}

/* 灰色禁用的按钮样式 */
.apply-button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.apply-button.disabled:hover {
  background-color: #ccc;
}
/* -------------------- */
</style>
