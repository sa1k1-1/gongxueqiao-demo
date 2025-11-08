import { createRouter, createWebHistory } from 'vue-router'

// 我们稍后会在 'src/views/' 文件夹中创建这些组件
import HomePage from '../views/HomePage.vue'
import ProjectDetailPage from '../views/ProjectDetailPage.vue'
import MyProjectsPage from '../views/MyProjectsPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  // 这里是我们的“页面蓝图”
  routes: [
    {
      path: '/', // 网站的根目录 (例如 http://localhost:5173/)
      name: 'home', // 页面名字：项目广场
      component: HomePage
    },
    {
      // 动态路由：':id' 是一个占位符，代表项目的ID
      path: '/project/:id', // 例如 /project/p1
      name: 'project-detail', // 页面名字：项目详情
      component: ProjectDetailPage,
      props: true // 允许路由将 :id 作为 prop 传递给组件
    },
    {
      path: '/my-projects', // “我的项目”页
      name: 'my-projects',
      component: MyProjectsPage
    },
    {
      path: '/profile', // “个人中心”页
      name: 'profile',
      component: ProfilePage
    }

    // 我们删除了默认的 /about 页面
  ]
})

export default router
