<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div id="certifications" class="content">
    <!--Titulo-->
    <h1>Certificações e Emblemas</h1>
    <hr class="hr-gray" />
    
    <section class="intro">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2>
              Minhas <span class="color-red">certificações</span> profissionais
            </h2>
            <p>
              Aqui você pode ver todas as certificações e emblemas que conquistei ao longo da minha carreira profissional. 
              Cada certificação representa um marco importante na minha jornada de aprendizado e desenvolvimento de habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="certifications-grid">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2>
              <span class="color-orange">Cibersegurança</span> e Tecnologia
            </h2>
          </div>
          <div class="col-12 col-md-6 col-lg-4 certification-item">
            <div class="certification-card">
              <img
                src="../assets/img/cyber-threat-management.png"
                alt="Cisco Cyber Threat Management"
                class="certification-image" />
              <div class="certification-info">
                <h3>Cisco Cyber Threat Management</h3>
                <p class="certification-description">
                  Certificação em gerenciamento de ameaças cibernéticas da Cisco, 
                  demonstrando conhecimento em identificação, análise e resposta a ameaças digitais.
                </p>
                <div class="certification-meta">
                  <span class="certification-provider">Cisco</span>
                  <span class="certification-year">2025</span>
                </div>
                <div class="certification-verify">
                  <a 
                    href="https://www.credly.com/badges/352e4844-6cdf-4ab4-a772-a73c8beb4da5/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-verify">
                    <i class="bi bi-shield-check"></i>
                    Verificar no Credly
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-md-6 col-lg-4 certification-item">
            <div class="certification-card">
              <img
                src="../assets/img/introduction-to-cybersecurity.png"
                alt="Introduction to Cybersecurity"
                class="certification-image" />
              <div class="certification-info">
                <h3>Introduction to Cybersecurity</h3>
                <p class="certification-description">
                  Certificação introdutória em cibersegurança, cobrindo os fundamentos da proteção digital, 
                  identificação de ameaças e melhores práticas de segurança da informação.
                </p>
                <div class="certification-meta">
                  <span class="certification-provider">Cisco</span>
                  <span class="certification-year">2025</span>
                </div>
                <div class="certification-verify">
                  <a 
                    href="https://www.credly.com/badges/e55f0d38-59ec-4777-9da0-7bccb9417a95/public_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-verify">
                    <i class="bi bi-shield-check"></i>
                    Verificar no Credly
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Adicione mais certificações aqui conforme necessário -->
          <div class="col-12 col-md-6 col-lg-4 certification-item">
            <div class="certification-card placeholder">
              <div class="placeholder-content">
                <i class="bi bi-plus-circle"></i>
                <p>Mais certificações em breve...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="achievements">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2>
              <span class="color-blue">Conquistas</span> e Reconhecimentos
            </h2>
            <p>
              Além das certificações formais, também busco constantemente aprimorar minhas habilidades 
              através de cursos, workshops e projetos práticos que me permitem estar sempre atualizado 
               com as mais recentes tecnologias e melhores práticas do mercado. <br/> 
<button 
  class="btn btn-primary"
  @click.prevent="$emit('navbar-navigate', $event)"
  data-name="Curriculum"
  title="Ver meu currículo"
  style="margin-top: 15px;">
  📄 Ver meu currículo
</button>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 d-flex flex-column align-items-center">
            <h2 class="text-center">
              Interessado em saber mais sobre minhas qualificações?
            </h2>
            <a
              href="/contact"
              class="btn btn-primary"
              @click.prevent="$emit('navbar-navigate', $event)"
              data-name="Contact"
              title="Entre em contato"
              >Entre em contato comigo</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'
import anime from 'animejs/lib/anime.es.js'

export default {
  name: 'Certifications',
  data() {
    return {
      scrollBar: Scrollbar,
    }
  },
  mounted() {
    this.scrollBar = Scrollbar.init(document.querySelector('#certifications'), {
      damping: 0.5,
    })
    anime({
      targets: '.content',
      opacity: 1,
      duration: 150,
      easing: 'easeInOutCirc',
    })
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
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  section.intro {
    .container-fluid {
      .row {
        .col-12 {
          h2 {
            margin-bottom: 20px;
          }
          
          p {
            font-size: 1.1rem;
            line-height: 1.6;
          }
        }
      }
    }
  }

  section.certifications-grid {
    .certification-item {
      margin-bottom: 30px;
    }
    
    .certification-card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
      
      .certification-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-bottom: 1px solid #eee;
      }
      
      .certification-info {
        padding: 20px;
        
        h3 {
          color: $color-dark;
          font-size: 1.3rem;
          margin-bottom: 15px;
          font-weight: 600;
        }
        
        .certification-description {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 15px;
        }
        
        .certification-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          
          .certification-provider {
            background: $color-orange;
            color: white;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: 500;
          }
          
          .certification-year {
            color: #999;
            font-size: 0.9rem;
            font-weight: 500;
          }
        }
        
        .certification-verify {
          .btn-verify {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            padding: 10px 16px;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            width: 100%;
            justify-content: center;
            
            &:hover {
              background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
              color: white;
              text-decoration: none;
            }
            
            i {
              font-size: 1rem;
            }
          }
        }
      }
      
      &.placeholder {
        background: #f8f9fa;
        border: 2px dashed #dee2e6;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .placeholder-content {
          text-align: center;
          color: #6c757d;
          
          i {
            font-size: 3rem;
            margin-bottom: 15px;
            display: block;
          }
          
          p {
            margin: 0;
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  section.achievements {
    background: #f8f9fa;
    padding: 40px 0;
    border-radius: 10px;
    
    .container-fluid {
      .row {
        .col-12 {
          p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: #666;
          }
        }
      }
    }
  }

  section.contact {
    padding: 30px;
    color: #fff;
    background-color: $color-dark;
    border-radius: 10px;
    
    h2 {
      margin-bottom: 20px;
    }
  }
}

/* Responsive */
@media (max-width: 768px) {
  .content {
    section.certifications-grid {
      .certification-card {
        .certification-info {
          padding: 15px;
          
          h3 {
            font-size: 1.1rem;
          }
          
          .certification-description {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .content {
    section {
      margin-bottom: 40px;
    }
    
    section.certifications-grid {
      .certification-card {
        .certification-image {
          height: 150px;
        }
      }
    }
  }
}
</style>
