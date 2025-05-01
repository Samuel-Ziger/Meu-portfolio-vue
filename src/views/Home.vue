<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div id="home" class="content">
    <!--Titulo-->
    <h1>Web-Site e Programção</h1>
    <hr class="hr-gray" />
    <section class="intro">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-12 col-xl-6 intro-description">
            <h2>
              Criação
              <span class="color-red">de sites </span> profissionais
            </h2>
            <p>
              ✅ Desenvolvimento Web: Criação de sites e sistemas
              personalizados.
              <br />✅ Desenvolvimento Backend: APIs REST, banco de dados e
              lógica de negócio com Spring Boot e PHP.<br />
              ✅ Otimização de Performance: Melhorias para sites e sistemas
              lentos.<br />
              ✅ Cibersegurança: Consultoria para proteção de sistemas contra
              ameaças digitais. <br />🔥 Entre em contato e vamos transformar
              ideia em realidade!
            </p>
            <hr class="hr-gray" />
            <p>
              Das especificações até a entrada em operação, aconselho em cada
              etapa do seu projeto para determinar a melhor abordagem em termos
              de comunicação e tecnologia.
              <strong>Criar um site profissional</strong> permitirá que você
              aumente sua visibilidade nos mecanismos de busca e melhore a
              imagem de marca da sua empresa.
            </p>
            <a
              href="/curriculum"
              class="btn btn-primary"
              @click.prevent="$emit('navbar-navigate', $event)"
              data-name="Curriculum"
              title="Curriculum vitae"
              >Meu Currículo</a
            >
          </div>
          <div class="col-12 col-md-12 col-lg-12 col-xl-6 intro-carousel">
            <div
              id="carouselHome"
              class="carousel slide"
              data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselHome"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"></button>
                <button
                  type="button"
                  data-bs-target="#carouselHome"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button
                  type="button"
                  data-bs-target="#carouselHome"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src="../assets/img/developpement-web.jpg"
                    width="720"
                    height="400"
                    class="d-block w-100"
                    alt="Design de site modular" />
                  <div class="carousel-caption d-block">
                    <h3>Site totalmente modular</h3>
                    <p>Implementação do site por tijolo de software</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <img
                    src="../assets/img/arborescence-site.jpg"
                    width="720"
                    height="400"
                    class="d-block w-100"
                    alt="Estudo da arquitetura do seu site" />
                  <div class="carousel-caption d-block">
                    <h3>Arquitetura do seu site</h3>
                    <p>Pensando na estrutura de árvore do seu site</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <img
                    src="../assets/img/arborescence-page.jpg"
                    width="720"
                    height="400"
                    class="d-block w-100"
                    alt="Integração HTML para desktop e mobile" />
                  <div class="carousel-caption d-block">
                    <h3>Layout HTML otimizado</h3>
                    <p>Organização de conteúdo para desktop e celular</p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide="prev">
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide="next">
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contract">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6 freelance">
            <h2>Microempresa</h2>
            <h3><i class="bi bi-clock-history"></i>Projeto de curto prazo</h3>
            <p>
              Como trabalhador autônomo, exerço uma atividade liberal sob o
              status de microempresa. Após estudar suas necessidades e
              viabilidade, elaboro especificações e uma proposta comercial. O
              projeto é dividido em diferentes fases com validações em
              etapas-chave para reduzir riscos e atender melhor às suas
              expectativas.
            </p>
          </div>
          <div class="col-12 col-md-12 col-lg-6 employee">
            <h2>Contrato de trabalho</h2>
            <h3><i class="bi bi-calendar3"></i> Projeto de longo prazo</h3>
            <p>
              Para projetos complexos que exigem tempo de desenvolvimento, posso
              me colocar à disposição na sua empresa mediante contrato de
              trabalho. Desenvolveremos um cronograma com base em suas
              prioridades e implementaremos uma organização eficiente. Proponho
              trabalhar com uma metodologia ágil para melhorar o trabalho em
              equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="knowledge">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2>
              Descubra <span class="color-orange">os serviços</span> oferecidos
            </h2>
          </div>
          <div
            class="col-12 col-md-6 col-lg-6 col-xl-3 text-center item-responsive"
            itemscope
            itemtype="http://schema.org/Service">
            <img
              src="../assets/img/img-responsive.png"
              width="320"
              height="350"
              class="img-fluid"
              alt="Design responsivo de sites"
              itemprop="image" />
            <h3 itemprop="name">Design responsivo</h3>
            <p
              class="align-bottom"
              @click="closeKnowledge('responsive')"
              itemprop="description">
              A carta gráfica do seu site pode ser feita utilizando um template
              gratuito ou pago para reduzir o orçamento final. Se você quer um
              design mais original ou um site altamente otimizado, eu crio
              interfaces gráficas e as integro em suas páginas.
            </p>
            <button
              class="btn btn-primary"
              @click="openKnowledge('responsive')">
              Saiba mais
            </button>
          </div>
          <div
            class="col-12 col-md-6 col-lg-6 col-xl-3 text-center item-development"
            itemscope
            itemtype="http://schema.org/Service">
            <img
              src="../assets/img/img-development.png"
              width="350"
              height="350"
              class="img-fluid"
              alt="Desenvolvedor profissional"
              itemprop="image" />
            <h3 itemprop="name">Desenvolvimento</h3>
            <p
              class="align-bottom"
              @click="closeKnowledge('development')"
              itemprop="description">
              Eu crio sites com WordPress e HTML para ter um site pronto para
              uso e administrável. Para um site de demonstração ou um web, uso o
              frameworks Vue.js de acordo com suas necessidades. Entre em
              contato comigo para determinar a tecnologia ideal para seu
              projeto.
            </p>
            <button
              class="btn btn-primary"
              @click="openKnowledge('development')">
              Saiba mais
            </button>
          </div>
          <div
            class="col-12 col-md-6 col-lg-6 col-xl-3 text-center item-writing"
            itemscope
            itemtype="http://schema.org/Service">
            <img
              src="../assets/img/img-writing.png"
              width="350"
              height="350"
              class="img-fluid"
              alt="Redação de conteúdo otimizado para SEO"
              itemprop="image" />
            <h3 itemprop="name">Escrita para web</h3>
            <p
              class="align-bottom"
              @click="closeKnowledge('writing')"
              itemprop="description">
              O conteúdo do seu site é essencial para aparecer nas primeiras
              páginas dos mecanismos de busca. Ofereço-me para ajudar você a
              escrever suas páginas e artigos de forma otimizada e aconselhá-lo
              sobre como obter referências naturais em seu site..
            </p>
            <button class="btn btn-primary" @click="openKnowledge('writing')">
              Saiba mais
            </button>
          </div>
          <div
            class="col-12 col-md-6 col-lg-6 col-xl-3 text-center item-optimization"
            itemscope
            itemtype="http://schema.org/Service">
            <img
              src="../assets/img/img-optimization.png"
              width="350"
              height="350"
              class="img-fluid"
              alt="Otimização técnica de sites"
              itemprop="image" />
            <h3 itemprop="name">Otimização</h3>
            <p
              class="align-bottom"
              @click="closeKnowledge('optimization')"
              itemprop="description">
              A otimização técnica e semântica consiste em melhorar determinados
              fatores-chave para aumentar suas posições nos mecanismos de busca.
              Você já tem um site? Use uma ferramenta online como PageSpeed
              ​​​​ou GTmetrix para descobrir sua pontuação de desempenho.
            </p>
            <button
              class="btn btn-primary"
              @click="openKnowledge('optimization')">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 d-flex flex-column align-items-center">
            <h2 class="text-center">
              Precisa de conselhos, uma solicitação de informações ou um projeto
              de desenvolvimento web?
            </h2>
            <a
              href="/contact"
              class="btn btn-primary"
              @click.prevent="$emit('navbar-navigate', $event)"
              data-name="Contact"
              title="Devis pour la création d'un site Internet"
              >entre em contato comigo</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="techno">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2>
              Compartilhando
              <span class="color-blue">meu conhecimento</span> sobre Programação
            </h2>
          </div>
        </div>
        <div
          class="row techno-content"
          itemscope
          itemtype="http://schema.org/OfferCatalog">
          <h3 itemprop="name"><i class="bi bi-window"></i> Desenvolvimento</h3>
          <Techno
            name="PHP"
            logo="logo-php.png"
            desc="Linguagem de programação do lado do servidor para aplicativos, sites e APIs" />
          <Techno
            name="JavaScript"
            logo="logo-javascript.png"
            desc="Linguagem de programação do lado do cliente e do servidor para aplicativos, sites e APIs" />
          <Techno
            name="HTML"
            logo="logo-html.png"
            desc=" Linguagem de marcação para a estrutura de páginas da Internet" />
          <Techno
            name="WordPress"
            logo="logo-wordpress.png"
            desc=" Plataforma popular para criação de sites e blogs, focada em personalização e facilidade de uso." />
          <Techno
            name="jQuery"
            logo="logo-jquery.png"
            desc="Biblioteca JavaScript que simplifica a manipulação do DOM, eventos e requisições AJAX." />
          <Techno
            name="Vue.js"
            logo="logo-vuejs.png"
            desc="Framework JavaScript progressivo para a construção de interfaces de usuário dinâmicas e reativas." />
          <Techno
            name="Bootstrap"
            logo="logo-bootstrap.png"
            desc="Framework CSS responsivo que facilita o design moderno e adaptável de sites" />
          <Techno
            name="MySql"
            logo="logo-mysql.png"
            desc="Sistema de gerenciamento de banco de dados relacional, amplamente usado em aplicações web." />
          <Techno
            name="Github"
            logo="logo-github.png"
            desc="Plataforma para hospedagem de código-fonte e colaboração em projetos utilizando Git" />
          <Techno
            name="Git"
            logo="logo-git.png"
            desc="Sistema de controle de versão distribuído que permite rastrear alterações no código e trabalhar em equipe" />
        </div>
        <div
          class="row techno-content"
          itemscope
          itemtype="http://schema.org/OfferCatalog">
          <h3 itemprop="name"><i class="bi bi-globe"></i> SEO / Marketing</h3>
          <Techno
            name="Yourtext Guru"
            logo="logo-yourtext_guru.png"
            desc="Ferramenta de SEO que auxilia na otimização de textos para melhorar o ranqueamento nos buscadores." />
          <Techno
            name="Screaming Frog"
            logo="logo-screaming_frog.png"
            desc="Software de análise SEO que rastreia sites, identificando erros técnicos e oportunidades de otimização." />
          <Techno
            name="Google Analytics"
            logo="logo-google_analytics.png"
            desc="Plataforma do Google para monitoramento e análise de tráfego em sites, oferecendo insights detalhados sobre visitantes e desempenho." />
        </div>
      </div>
    </section>
    <section class="quote">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 d-flex flex-column align-items-center">
            <h2 class="text-center">
              « Uma ideia por si só não muda o mundo. O que faz a diferença é a
              execução, a determinação e as pessoas que você inspira ao longo do
              caminho. »
            </h2>
            <p class="text-center"></p>
          </div>
        </div>
      </div>
    </section>
    <section class="project">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2>
              Foco em
              <span class="color-orange">alguns</span> projetos concluídos
            </h2>
          </div>
          <div class="col-12 project-carousel">
            <div
              id="carouselProject"
              class="carousel slide"
              data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselProject"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Méca Jet d'Eau"></button>
                <button
                  type="button"
                  data-bs-target="#carouselProject"
                  data-bs-slide-to="1"
                  aria-label="Toul-Immo Rénovation"></button>
                <button
                  type="button"
                  data-bs-target="#carouselProject"
                  data-bs-slide-to="2"
                  aria-label="TextBeans"></button>
                <button
                  type="button"
                  data-bs-target="#carouselProject"
                  data-bs-slide-to="3"
                  aria-label="Topwings"></button>
                <button
                  type="button"
                  data-bs-target="#carouselProject"
                  data-bs-slide-to="4"
                  aria-label="JUICE"></button>
                <button
                  type="button"
                  data-bs-target="#carouselProject"
                  data-bs-slide-to="5"
                  aria-label="U-TEST"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <picture>
                    <img
                      src="../assets/img/interface-mecajetdeau_mob.jpg"
                      srcset="
                        ../assets/img/interface-mecajetdeau_mob.jpg 480w,
                        ../assets/img/interface-mecajetdeau.jpg     960w
                      "
                      sizes="(max-width: 767px) 480px, 960px"
                      width="480"
                      height="300"
                      class="d-block w-100"
                      alt="Desenvolvedor especializado em WordPress e Symfony" />
                  </picture>
                  <div class="carousel-caption">
                    <h3>Escreve algo sobre o projeto</h3>
                    <p>Direitos autorias sobre o projeto</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <picture>
                    <img
                      src="../assets/img/interface-toulimmo_mob.jpg"
                      srcset="
                        ../assets/img/interface-toulimmo_mob.jpg 480w,
                        ../assets/img/interface-toulimmo.jpg     960w
                      "
                      sizes="(max-width: 767px) 480px, 960px"
                      width="480"
                      height="300"
                      class="d-block w-100"
                      alt="Desenvolvedor freelance para criação de sites de qualidade" />
                  </picture>
                  <div class="carousel-caption">
                    <h3>Escreve algo sobre o projeto</h3>
                    <p>Direitos autorias sobre o projeto</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <picture>
                    <img
                      src="../assets/img/interface-textbeans_mob.jpg"
                      srcset="
                        ../assets/img/interface-textbeans_mob.jpg 480w,
                        ../assets/img/interface-textbeans.jpg     960w
                      "
                      sizes="(max-width: 767px) 480px, 960px"
                      width="480"
                      height="300"
                      class="d-block w-100"
                      alt="Webmaster freelance para desenvolvimento web" />
                  </picture>
                  <div class="carousel-caption">
                    <h3>Escreve algo sobre o projeto</h3>
                    <p>Direitos autorias sobre o projeto</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <picture>
                    <img
                      src="../assets/img/interface-topwings_mob.jpg"
                      srcset="
                        ../assets/img/interface-topwings_mob.jpg 480w,
                        ../assets/img/interface-topwings.jpg     960w
                      "
                      sizes="(max-width: 767px) 480px, 960px"
                      width="480"
                      height="270"
                      class="d-block w-100"
                      alt="Desenvolvedor freelance para aplicações web" />
                  </picture>
                  <div class="carousel-caption">
                    <h3>Escreve algo sobre o projeto</h3>
                    <p>Direitos autorias sobre o projeto</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <picture>
                    <img
                      src="../assets/img/interface-airbusds_mob.jpg"
                      srcset="
                        ../assets/img/interface-airbusds_mob.jpg 480w,
                        ../assets/img/interface-airbusds.jpg     960w
                      "
                      sizes="(max-width: 767px) 480px, 960px"
                      width="480"
                      height="300"
                      class="d-block w-100"
                      alt="Design de interface gráfica para web e mobile" />
                  </picture>
                  <div class="carousel-caption">
                    <h3>Escreve algo sobre o projeto</h3>
                    <p>Direitos autorias sobre o projeto</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <picture>
                    <img
                      src="../assets/img/interface-spherea_mob.jpg"
                      srcset="
                        ../assets/img/interface-spherea_mob.jpg 480w,
                        ../assets/img/interface-spherea.jpg     960w
                      "
                      sizes="(max-width: 767px) 480px, 960px"
                      width="480"
                      height="270"
                      class="d-block w-100"
                      alt="Desenvolvedor de aplicações web e webmaster freelance" />
                  </picture>
                  <div class="carousel-caption">
                    <h3>Escreve algo sobre o projeto</h3>
                    <p>Direitos autorias sobre o projeto</p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselProject"
                data-bs-slide="prev">
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselProject"
                data-bs-slide="next">
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="background-mountain"></div>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'
import anime from 'animejs/lib/anime.es.js'
import Techno from '@/components/Techno'
import 'bootstrap/js/dist/carousel'

export default {
  name: 'Home',
  components: {
    Techno,
  },
  data() {
    return {
      scrollBar: Scrollbar,
    }
  },
  mounted() {
    this.scrollBar = Scrollbar.init(document.querySelector('#home'), {
      damping: 0.5,
    })
    anime({
      targets: '.content',
      opacity: 1,
      duration: 150,
      easing: 'easeInOutCirc',
    })
  },
  methods: {
    openKnowledge(target) {
      const element = document
        .getElementsByClassName('item-' + target)[0]
        .getElementsByTagName('p')[0]
      element.style.pointerEvents = 'auto'
      anime({
        targets: element,
        opacity: 1,
        top: ['-200px', '0'],
        duration: 500,
        easing: 'easeInOutBack',
      })
    },
    closeKnowledge(target) {
      const element = document
        .getElementsByClassName('item-' + target)[0]
        .getElementsByTagName('p')[0]
      element.style.pointerEvents = 'none'
      anime({
        targets: element,
        opacity: 0,
        top: ['0', '300px'],
        duration: 350,
        easing: 'easeInBack',
        complete: () => {
          element.style.top = 0
        },
      })
    }
  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/scss/variables';
.content {
  section {
    position: relative;
    margin-bottom: 60px;
    h2 {
      margin-bottom: 30px;
    }
    h3 {
      margin-bottom: 10px;
    }
    p {
      text-align: justify;
    }
    i.bi {
      margin-right: 5px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  section.intro {
    .intro-description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      h2 {
        margin-bottom: 20px;
      }
      hr {
        margin: 10px 0 20px;
      }
      .btn {
        margin-top: 10px;
      }
    }
    .intro-carousel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 800px;
      margin: 0 auto;
      .carousel .carousel-inner {
        border-radius: 3px;
        .carousel-item {
          border-radius: 3px;
          transition: transform 750ms ease-in-out;
          img {
            height: auto;
          }
          .carousel-caption {
            right: 0;
            left: 0;
            bottom: 0;
            color: #fff;
            padding-bottom: 2.75rem;
            background-color: rgba(0, 0, 0, 0.75);
            p {
              text-align: center;
            }
          }
        }
      }
      span.carousel-control-prev-icon,
      span.carousel-control-next-icon {
        border-radius: 3px;
        background-size: 70%;
        background-color: $color-dark;
      }
    }
  }
  section.contract {
    .freelance,
    .employee {
      color: #fff;
      padding: 20px;
      h2 {
        margin-bottom: 20px;
      }
    }
    .freelance {
      border-radius: 3px 0 0 3px;
      background-color: $color-dark;
    }
    .employee {
      border-radius: 0 3px 3px 0;
      background-color: $color-blue-hover;
    }
  }
  section.knowledge {
    div[class*='item'] {
      position: relative;
      margin-bottom: 0;
      img {
        max-width: 200px;
        height: auto;
        z-index: 1;
      }
      h3 {
        margin: 10px auto;
      }
      p {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        opacity: 0;
        top: 0;
        left: 10px;
        width: calc(100% - 10px);
        height: 100%;
        color: #fff;
        border-radius: 5px;
        padding: 15px;
        z-index: 2;
        cursor: pointer;
        box-shadow: none;
        transition: box-shadow 200ms ease-in-out;
      }
      p:hover {
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
      }
      .btn {
        width: calc(100% - 20px);
      }
    }
    .item-responsive p {
      background-color: $color-blue;
    }
    .item-development p {
      background-color: $color-orange;
    }
    .item-writing p {
      background-color: $color-red;
    }
    .item-optimization p {
      background-color: $color-dark;
    }
  }
  section.techno {
    .techno-content {
      h3 {
        position: relative;
        padding: 10px 15px 10px 50px;
        margin-bottom: 20px;
        border-bottom: 1px solid #d5d5d5;
        i.bi {
          position: absolute;
          width: 40px;
          height: 100%;
          left: 0;
          top: 0;
          color: #818181;
          font-size: 1.5em;
          text-align: center;
          padding-top: 5px;
          border-radius: 3px 0 0 3px;
          transition: color 150ms ease-in-out;
        }
      }
      &:hover {
        i.bi {
          color: $color-orange;
        }
      }
    }
  }
  section.contact,
  section.quote {
    padding: 30px;
    color: #fff;
    background-color: $color-dark;
    h2 {
      margin-bottom: 20px;
    }
  }
  section.quote {
    h2 {
      font-size: 1.7rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  section.project {
    .project-carousel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .carousel {
        .carousel-inner {
          border-radius: 3px;
          .carousel-item {
            border-radius: 3px;
            background-color: #e3e3e3;
            transition: transform 750ms ease-in-out;
            img {
              width: auto !important;
              height: 540px;
              margin: 0 auto;
            }
            .carousel-caption {
              position: relative !important;
              color: #fff;
              right: 0;
              left: 0;
              bottom: 0;
              padding-bottom: 2.75rem;
              background-color: $color-blue-hover;
              p {
                text-align: center;
              }
            }
          }
        }
        span.carousel-control-prev-icon,
        span.carousel-control-next-icon {
          border-radius: 3px;
          background-size: 70%;
          background-color: $color-blue-hover;
        }
      }
    }
  }
}
/* Responsive */
@media (max-width: 576px) {
  .content {
    section.intro {
      .intro-carousel {
        padding: 0;
        .carousel-caption {
          position: relative;
          padding-left: 25px;
          padding-right: 25px;
          background-color: $color-dark !important;
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .content {
    section.contract {
      .freelance {
        border-radius: 5px 5px 0 0;
      }
      .employee {
        border-radius: 0 0 5px 5px;
      }
    }
    section.project {
      .project-carousel {
        .carousel.slide .carousel-inner {
          .carousel-item {
            img {
              width: 100% !important;
              height: auto;
            }
            .carousel-caption {
              padding: 1rem 1rem 2.75rem;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1199px) {
  .content {
    section.intro {
      .intro-carousel {
        margin-top: 30px;
      }
    }
    section.knowledge {
      div[class*='item'] {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
