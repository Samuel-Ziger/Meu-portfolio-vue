<template>
  <div id="sidebar" @mouseenter="showScroll" @mouseleave="hideScroll">
    <div class="sidebar-header">
      <div class="close" @click="close">
        <button title="Fechar Perfil">X</button>
      </div>
      <div class="photo">
        <img
          :src="getPhoto()"
          alt="Desenvolvedor web"
          width="300"
          height="356" />
      </div>
    </div>
    <div class="sidebar-content">
      <br />
      <h2>Informações</h2>
      <p class="border-blue">
        Samuel Henryk <br />
        (61)9-86536975<br />
        samuelziger01@gmail.com
      </p>
      <h2>HABILIDADES</h2>
      <p class="border-orange">
        Desenvolvimento Web <span class="attr">[4,5/5]</span><br />
        Backend & Banco de Dados <span class="attr">[4/5]</span><br />
        Gestão de Projetos <span class="attr">[3/5]</span><br />
        Design <span class="attr">[4/5]</span><br />
        Otimização de SEO <span class="attr">[3,5/5]</span><br />
        Cibersegurança & Redes <span class="attr">[3/5]</span>
      </p>
      <h2>Conhecimento</h2>
      <p class="border-red">
        <span class="title"></span><br />
        Desenvolvimento Web (Front-end & Back-end)<br />
        Arquitetura de Software, <br />
        Git, GitKraken, GitHub, SEO e Otimização de Sites<br />
        WordPress,<br />
        Cibersegurança e Redes, Yourtext.guru<br />
        Gestão de Projetos e Versionamento<br />
        <strong>Ferramentas</strong><br />
        Edição & Desenvolvimento: PhpStorm, VS Code, Postman, phpMyAdmin<br />
        Servidores & Gerenciamento: Apache, IIS, Node.js, Composer, Npm<br />
      </p>
      <p class="border-red">
        <span class="title">Linguagens</span><br />
        PHP, JavaScript, MySQL,<br />
        CSS, LESS/SCSS, HTML,<br />
        Framework :Bootstrap, Vue.js, jQuery<br />
        Java
      </p>
      <p class="border-red">
        <span class="title">Línguas Faladas</span><br />
        Português(Nativo)<br />Inglês (Intermédiario)
      </p>
      <h2>Interesses</h2>
      <p class="border-blue">
        <span class="title">Geral</span><br />
        Xadrez,Religião,Militarismo, Tecnologia
      </p>
      <p class="border-blue">
        <span class="title">Tecnologia</span><br />
        da Computação , Informação e Comunicação
      </p>
      <p class="border-blue">
        <span class="title">Esporte</span><br />
        Automobilismo, Corrida
      </p>
      <h2>Download</h2>
      <a
        href="/static/cv-samuel-henryk.pdf"
        rel="nofollow noreferrer"
        target="_blank"
        class="btn btn-primary btn-cv"
        title="Baixar CV em PDF"
        download="cv-samuel-henryk.pdf"
        ><i class="bi bi-download"></i> Baixar CV</a
      >
    </div>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'

export default {
  name: 'Sidebar',
  data() {
    return {
      open: false,
      counter: -1,
      scrollBar: Scrollbar,
    }
  },
  mounted() {
    this.scrollBar = Scrollbar.init(document.querySelector('#sidebar'), {
      damping: 0.5,
    })
    this.init()
  },
  methods: {
    init() {
      document.getElementById('sidebar').style.height =
        window.innerHeight + 'px'
    },
    close() {
      this.open = false
      this.counter = -1
      document.getElementById('sidebar').classList.remove('open')
      document.getElementsByClassName('wrapper')[0].classList.remove('sidebar')
      this.$emit('open-sidebar', false)
    },
    openSidebar() {
      this.open = true
      this.counter = 1
      document.getElementById('sidebar').classList.add('open')
      document.getElementsByClassName('wrapper')[0].classList.add('sidebar')
      this.$emit('open-sidebar', true)
    },
    toogle() {
      if (this.open) {
        this.close()
      } else {
        this.openSidebar()
      }
    },
    showScroll() {
      const scrollbar = document
        .getElementById('sidebar')
        .getElementsByClassName('scrollbar-track-y')[0]
      scrollbar.classList.add('show')
      this.scrollBar.update()
    },
    hideScroll() {
      const scrollbar = document
        .getElementById('sidebar')
        .getElementsByClassName('scrollbar-track-y')[0]
      scrollbar.classList.remove('show')
      this.scrollBar.update()
    },
    getPhoto() {
      return this.counter > 0
        ? require('../assets/img/photo-profil-' + this.counter + '.jpg')
        : require('../assets/img/photo-profil-1.jpg')
    },
  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/scss/variables';
#sidebar {
  position: absolute;
  width: 325px;
  top: 0;
  left: 0;
  height: 100vh;
  margin: 0;
  padding: 0;
  line-height: 1.3;
  background: #f1f1f1;
  border-right: 1px solid #dbdbdb;
  overflow-y: scroll;
  transform: translateX(-250px);
  transition: transform $delay-anim ease-in-out;
  box-shadow: 9px 0 11px rgba(0, 0, 0, 0.15);
  z-index: 999;
  &.open {
    transform: translateX(175px);
  }
  .sidebar-header {
    height: 200px;
    padding: 15px;
    clear: both;
    .close {
      width: 40px;
      height: 40px;
      text-align: center;
      cursor: pointer;
      float: right;
      button {
        border: 0;
        font-size: 2rem;
        color: $color-gray;
        background-color: transparent;
        transition: color 200ms ease-in-out;
      }
    }
    .close:hover button {
      color: $color-orange;
    }
    .photo {
      width: 175px;
      padding: 0 5px 5px;
      background-color: #fff;
      box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.2);
      float: left;
      img {
        width: 165px;
        height: auto;
      }
    }
  }
  .sidebar-content {
    padding: 10px;
    .img-title {
      width: 38px;
      height: auto;
      padding-top: 2px;
      image-rendering: high-quality;
      image-rendering: -webkit-optimize-contrast;
    }
    h2 {
      font-size: 1.75rem;
      color: $color-gray;
      margin-top: 20px;
      text-align: left;
      text-transform: uppercase;
    }
    p {
      width: 100%;
      font-size: 1.4rem;
      text-align: left;
      margin-top: 20px;
      padding-left: 10px;
      border-left: 2px solid;
      .title {
        font-size: 1.4rem;
        color: $color-gray;
        text-transform: uppercase;
      }
      .attr {
        font-size: 1.3rem;
        color: $color-gray;
      }
    }
    .btn {
      width: 100%;
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: uppercase;
      background-color: $color-blue;
      transition: background-color 200ms ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 12px;
      border-radius: 4px;
      color: white;
      text-decoration: none;
      
      i {
        font-size: 1.6rem;
      }
    }
    .btn:hover {
      background-color: $color-blue-hover;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  }
}
/* Responsive */
@media (max-width: 576px) {
  #sidebar {
    position: fixed;
    width: 280px;
    transform: translateX(-280px);
    z-index: 9999;
    &.open {
      transform: translateX(0);
    }
    .sidebar-header {
      height: 180px;
      .photo {
        width: 150px;
        img {
          width: 140px;
        }
      }
    }
  }
}
@media (max-width: 365px) {
  #sidebar {
    width: 260px;
    transform: translateX(-260px);
    &.open {
      transform: translateX(0);
    }
  }
}
</style>
