// src/mock/db.js

// 代表当前登录的用户
export const mockUser = {
  id: 'u1',
  name: '覃航海',
  avatarUrl: '/spi.jpg',
  major: '软件工程',
  grade: '大三',
  skills: ['Java', 'Spring Boot', 'MySQL', 'Vue.js', 'UI/UX设计', 'React'],

  // --- 这是关键改动 ---
  // 增加 '开发中' 状态
  myProjects: [
    { projectId: 'p1', status: '开发中' }, // 将 p1 设为开发中
    { projectId: 'p3', status: '已完成' },
    { projectId: 'p5', status: '已申请' }  // p5 保持“已申请”
  ]
  // --------------------
};

// 代表项目广场的数据库 (保持不变)
export const mockProjects = [
  {
    id: 'p1',
    companyName: 'XX科技',
    companyLogo: 'https://via.placeholder.com/40',
    title: '开发一个校园二手书交易小程序',
    reward: 800,
    cycle: '2周',
    tags: ['小程序', 'Vue.js', 'UI设计'],
    description: '我们正在寻找一名熟悉Vue或小程序开发的学生，帮助我们快速搭建一个校园二手书交易平台的前端原型。',
    requirements: [
      '熟悉 Vue.js 或 微信小程序开发',
      '能根据UI设计图还原页面',
      '有良好的沟通能力'
    ],
    status: 'OPEN'
  },
  {
    id: 'p2',
    companyName: '某餐饮咨询公司',
    companyLogo: 'https://via.placeholder.com/40',
    title: '爬取并分析本市奶茶店竞品数据',
    reward: 500,
    cycle: '1周',
    tags: ['Python', '数据分析', '爬虫'],
    description: '需要爬取大众点评上本市排名前50的奶茶店数据，并进行简单的数据可视化分析。',
    requirements: [
      '熟悉 Python 及 Scrapy/Pandas 库',
      '有数据爬取和反爬经验者优先',
    ],
    status: 'OPEN'
  },
  {
    id: 'p3',
    companyName: '某初创企业',
    companyLogo: 'https://via.placeholder.com/40',
    title: '企业官网Spring Boot后端接口开发',
    reward: 1500,
    cycle: '3周',
    tags: ['Java', 'Spring Boot', '后端', 'MySQL'],
    description: '为我们的新版企业官网开发一套基于Spring Boot的Restful API接口，用于内容管理和用户查询。',
    requirements: [
      '精通 Java 和 Spring Boot 框架',
      '熟悉 MySQL 数据库设计',
      '了解 Restful API 设计规范'
    ],
    status: 'OPEN'
  },
  {
    id: 'p4',
    companyName: '集美大学创业中心',
    companyLogo: 'https://via.placeholder.com/40',
    title: '“工学桥”平台Logo与VI设计',
    reward: 300,
    cycle: '3天',
    tags: ['Logo', 'PS', '设计'],
    description: '为我们的“工学桥”平台设计一套Logo和基础的VI视觉规范。',
    requirements: [
      '设计专业优先',
      '有相关作品集'
    ],
    status: 'OPEN'
  },
  {
    id: 'p5',
    companyName: '校园新媒体工作室',
    companyLogo: 'https://via.placeholder.com/40',
    title: '秋季招新活动短视频策划与剪辑',
    reward: 400,
    cycle: '1周',
    tags: ['短视频', '剪辑', '策划', 'PR'],
    description: '负责工作室秋季招新宣传视频的全流程，包括但不限于脚本策划、拍摄辅助和后期剪辑包装。',
    requirements: [
      '熟练使用 Premiere Pro 或 Final Cut Pro',
      '有抖音/B站运营经验者优先',
      '脑洞大，有创意'
    ],
    status: 'OPEN'
  }
];
export const mockAllSkills = [
  'Java',
  'Spring Boot',
  'MySQL',
  'Vue.js',
  'UI/UX设计',
  'React',
  'Python',
  'Node.js',
  'Go',
  'Docker',
  'Kubernetes',
  'Git',
  'Figma',
  'PR',
  'AE',
  'C++',
  'C#',
  'Android',
  'iOS'
];
// --------------------
