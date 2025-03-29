import { createRouter, createWebHistory } from 'vue-router'

const siteUrl = 'https://meu-portfolio-vue-chi.vercel.app/'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Meu portfolio | Samuel.ziger',
      description: 'Meu portifolio com meus projetos e experiências profissionais na área de desenvolvimento web, design e programação.',
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    meta: {
      title: 'Meu currículo | Samuel.ziger',
      description: 'Um resumo da minha trajetória profissional, com experiências e habilidades adquiridas ao longo do tempo.',
    },
    component: () => import('../views/Curriculum.vue'),
  },
  {
    path: '/open-source',
    name: 'Source',
    meta: {
      title: 'Meus projetos open source | Samuel.ziger',
      description: 'Projetos open source que desenvolvi e compartilhei com a comunidade, contribuindo para o avanço do conhecimento e da tecnologia.',
    },
    component: () => import('../views/Source.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: {
      title: 'Suas dúvidas | Samuel.ziger',
      description: 'Entre em contato comigo para tirar suas dúvidas ou discutir sobre projetos e oportunidades de colaboração.',
    },
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: 'Página não encontrada| Samuel.ziger',
      description: 'Essa página não existe | Samuel.ziger',
    },
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  document.title = to.meta['title']
  document.querySelector('link[rel="canonical"]').href = siteUrl + to.path
  document.querySelector('meta[name="description"]').setAttribute("content", to.meta['description'])
})

export default router
