<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div id="source" class="content">
    <h1>Projetos de código aberto</h1>
    <hr class="hr-gray" />
    <section class="project cookie-wall">
      <h2>Phot Now</h2>
      <span class="archived">Arquivo</span>
      <img
        src="~@/assets/img/photo-title.png"
        class="logo"
        width="102"
        height="25"
        alt="jQuery write less, do more" />
      <img
        src="~@/assets/img/photo-title.png"
        class="logo dark"
        width="102"
        height="25"
        alt="jQuery write less, do more" />
      <p>
        Criação de um site para a Photo Now, com recursos de navegação entre
        páginas e integração de sistemas de pagamento via API.
      </p>
      <a
        href="https://github.com/Samuel-Ziger/Site-Photo-Now.git"
        target="_blank"
        class="btn btn-primary"
        title="Projet cookieWall sur Github"
        ><i class="bi bi-github"></i> Veja o Projeto</a
      >
      <a
        href="https://site-photo-now.web.app/"
        target="_blank"
        class="btn btn-primary"
        title="Librairie cookieWall pour développeur web"
        ><i class="bi bi-window"></i> Ver site</a
      >
    </section>
    <section class="project cookie-wall">
      <h2>Meu Portfolio Dev</h2>
      <span class="archived">Arquivo</span>
      <img
        src="~@/assets/img/html.png"
        class="logo"
        width="50"
        height="40"
        alt="HTML" />
      <img
        src="~@/assets/img/html.png"
        class="logo dark"
        width="50"
        height="40"
        alt="HTML" />
      <p>
        Um site de portfólio pessoal para mostrar meus projetos e habilidades
        como desenvolvedor web. O site é responsivo e otimizado para
        dispositivos móveis, com uma interface de usuário moderna e atraente. O
        portfólio inclui uma seção de projetos, onde os visitantes podem ver
        exemplos do meu trabalho, bem como uma seção de habilidades, onde
        destaco minhas
      </p>
      <a
        href="https://github.com/Samuel-Ziger/Site-Photo-Now.git"
        target="_blank"
        class="btn btn-primary"
        title="Projet cookieWall sur Github"
        ><i class="bi bi-github"></i> Veja o Projeto</a
      >
      <a
        href="https://meu-portfolio-developer2.vercel.app/about.html"
        target="_blank"
        class="btn btn-primary"
        title="Librairie cookieWall pour développeur web"
        ><i class="bi bi-window"></i> Ver site</a
      >
    </section>
    <section class="project portfolio-vue">
      <h2>Portfolio Vue</h2>
      <img
        src="~@/assets/img/source-vuejs.png"
        class="logo"
        width="65"
        height="25"
        alt="Vuejs" />
      <img
        src="~@/assets/img/source-vuejs.dark.png"
        class="logo dark"
        width="65"
        height="25"
        alt="Vuejs" />
      <p>
        Código-fonte deste portfólio online criado com Vuejs e Bootstrap para
        descobrir este framework JavaScript.
      </p>
      <a
        href="https://github.com/Samuel-Ziger/Meu-portfolio-vue.git"
        target="_blank"
        class="btn btn-primary"
        title="Projet rwdKit sur Github"
        ><i class="bi bi-github"></i> Veja o Projeto</a
      >
    </section>
    <section class="project portfolio-vue">
      <h2>Sistema de Pontos ( em vue )</h2>
      <img
        src="~@/assets/img/source-vuejs.png"
        class="logo"
        width="65"
        height="25"
        alt="Vuejs" />
      <img
        src="~@/assets/img/source-vuejs.dark.png"
        class="logo dark"
        width="65"
        height="25"
        alt="Vuejs" />
      <p>
        Código-fonte do projeto de sistema de gerenciamento e registro de
        funcionário atraves de um sistema de pontos.
      </p>
      <a
        href="https://github.com/Samuel-Ziger/sistema-pontos-clinica.git"
        target="_blank"
        class="btn btn-primary"
        title="Projet rwdKit sur Github"
        ><i class="bi bi-github"></i> Veja o Projeto</a
      >
    </section>
    <section class="project portfolio-vue">
      <h2>Curso de Java</h2>
      <img
        src="~@/assets/img/java.png"
        class="logo"
        width="50"
        height="40"
        alt="Vuejs" />
      <img
        src="~@/assets/img/java.png"
        class="logo dark"
        width="50"
        height="40"
        alt="Vuejs" />
      <p>
        Código-fonte do curso em java a onde eu mostro meus primeiros passos com
        a linguagem, com o intuito de ajudar iniciantes a entenderem os
        conceitos básicos de programação.
      </p>
      <a
        href="https://github.com/Samuel-Ziger/curso-de-java.git"
        target="_blank"
        class="btn btn-primary"
        title="Projet rwdKit sur Github"
        ><i class="bi bi-github"></i> Veja o Projeto</a
      >
    </section>
    <section class="project portfolio-vue">
      <h2>Curso de Go(Golang)</h2>
      <img
        src="~@/assets/img/go-lang.png"
        class="logo"
        width="50"
        height="40"
        alt="Vuejs" />
      <img
        src="~@/assets/img/go-lang.png"
        class="logo dark"
        width="50"
        height="40"
        alt="Vuejs" />
      <p>
        Código-fonte do curso em Go a onde eu mostro aprendizado atráves do curso da udemy.
      </p>
      <a
        href="https://github.com/Samuel-Ziger/curso-de-Go.git"
        target="_blank"
        class="btn btn-primary"
        title="Projet rwdKit sur Github"
        ><i class="bi bi-github"></i> Veja o Projeto</a
      >
    </section>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'
import anime from 'animejs/lib/anime.es.js'

export default {
  name: 'Source',
  data() {
    return {
      scrollBar: Scrollbar,
    }
  },
  mounted() {
    this.scrollBar = Scrollbar.init(document.querySelector('#source'), {
      damping: 0.5,
    })
    anime({
      // eslint-disable-next-line prettier/prettier
      targets: '.content',
      opacity: 1,
      // eslint-disable-next-line prettier/prettier
      duration: 150,
      easing: 'easeInOutCirc',
    })
  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/scss/variables';
.content {
  section.project {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #c0c0c0;
    -webkit-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    h2,
    .logo {
      float: left;
    }
    .logo {
      margin: 2px 0 0 15px;
      &.dark {
        display: none;
      }
    }
    .archived {
      font-size: 1.1rem;
      font-weight: bold;
      padding: 2px 10px 3px;
      margin-left: 10px;
      border-radius: 5px;
      background-color: $color-blue;
      color: white;
      float: right;
    }
    p {
      clear: both;
      padding-top: 7px;
      text-shadow: 0 0 0.2em #fafafa, 0 0 0.2em #fafafa, 0 0 0.2em #fafafa;
    }
    .btn {
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: uppercase;
      background-color: $color-blue;
      i {
        font-size: 1.5rem;
        margin-right: 5px;
      }
      &:hover {
        background-color: $color-blue-hover;
      }
      &:last-child {
        margin-left: 20px;
      }
    }
    &.portfolio-vue {
      background: #fafafa url('~@/assets/img/banner-portfoliovue.jpg') no-repeat
        right center;
      .btn {
        margin-left: 0;
      }
    }
    &.twig-request {
      background: #fafafa url('~@/assets/img/banner-twigrequest.jpg') no-repeat
        right center;
      .btn {
        margin-left: 0;
      }
    }
    &.cookie-wall {
      background: #fafafa url('~@/assets/img/banner-cookiewall.jpg') no-repeat
        right center;
    }
    &.rwdkit {
      background: #fafafa url('~@/assets/img/banner-rwdkit.jpg') no-repeat right
        center;
    }
  }
}
/* Responsive */
@media (max-width: 768px) {
  .content section.project {
    background: #fafafa !important;
    .btn {
      display: block;
      width: 100%;
      margin: 15px 0 0 !important;
    }
  }
}
</style>
