<template>
  <div id="contact" class="content">
    <h1>Pedido de informação</h1>
    <hr class="hr-gray" />
    <section class="form accordion" id="accordionContact">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingContact">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseContact"
            aria-expanded="true"
            aria-controls="collapseOne">
            Formulário De Contato
          </button>
        </h2>
        <div
          id="collapseContact"
          class="accordion-collapse collapse show"
          aria-labelledby="headingContact"
          data-bs-parent="#accordionContact">
          <div class="accordion-body">
            <p>
              Não hesite em contactar-me
              <strong
                >para qualquer pedido de informação, aconselhamento ou orçamento
                gratuito</strong
              >
              Sobre o seu projeto. Você pode me contatar por telefone ou
              preencher preencher o formulário abaixo. Eu responderei o mais
              rápido possível:
            </p>
            <transition name="fade" mode="out-in">
              <p v-if="send" class="alert alert-info">
                Merci, votre email a bien été envoyé.
              </p>
            </transition>
            <transition name="fade" mode="out-in">
              <p v-if="error" class="alert alert-danger">
                Désolé une erreur est survenue, veuillez réessayer
                ultérieurement.
              </p>
            </transition>
            <form
              id="form"
              @submit.prevent="submit"
              method="post"
              class="g-2 needs-validation"
              novalidate>
              <div class="row mb-3">
                <div class="col-md-6 mb-3 mb-sm-3">
                  <label for="form-name" class="form-label">Nome</label>
                  <input
                    id="form-name"
                    v-model="name"
                    type="text"
                    class="form-control" />
                  <div class="invalid-tooltip">Deixe seu nome</div>
                </div>
                <div class="col-md-6 ml-md-3">
                  <label for="form-society" class="form-label">Empresa</label>
                  <input
                    id="form-society"
                    v-model="society"
                    type="text"
                    class="form-control" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 mb-3 mb-sm-3">
                  <label for="form-phone" class="form-label">Telefone</label>
                  <input
                    id="form-phone"
                    v-model="phone"
                    type="tel"
                    class="form-control" />
                  <div class="invalid-tooltip">Me indque o seu telefone</div>
                </div>
                <div class="col-md-6 ml-md-3">
                  <label for="form-email" class="form-label">Email</label>
                  <input
                    id="form-email"
                    v-model="email"
                    type="email"
                    class="form-control" />
                  <div class="invalid-tooltip">Me indque o seu email</div>
                </div>
              </div>
              <div class="mb-3">
                <label for="form-message" class="form-label"
                  >Qual e a sua Demanda ?</label
                >
                <textarea
                  id="form-message"
                  v-model="message"
                  class="form-control"
                  rows="5"></textarea>
                <div class="invalid-tooltip">Me indque a sua demanda</div>
              </div>
              <div class="mb-3">
                <div id="g-recaptcha" class="captcha"></div>
                <div class="invalid-tooltip">Relaize o captcha</div>
              </div>
              <p class="info-rgpd">
                <i
                  >As informações enviadas através deste formulário serão
                  utilizadas apenas para responder à sua solicitação e não serão
                  repassadas a terceiros.</i
                >
              </p>
              <div class="mb-3">
                <button type="submit" id="form-submit" class="btn btn-primary">
                  Enivar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="accordion privacy" id="accordionPrivacy">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingPrivacy">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePrivacy"
            aria-expanded="true"
            aria-controls="collapseOne">
            Política de Privacidade
          </button>
        </h2>
        <div
          id="collapsePrivacy"
          class="accordion-collapse collapse"
          aria-labelledby="headingPrivacy"
          data-bs-parent="#accordionPrivacy">
          <div class="accordion-body">
            <div
              class="container-fluid"
              id="ppms_cm_privacy_settings"
              data-editor-centralize="true"
              data-main-container="true"
              data-root="true">
              <div class="row" data-disable-select="true">
                <div class="col-12">
                  <p>
                    Este site usa serviços externos como
                    <b>Google Analytics</b> e <b>reCAPTCHA</b> para analisar o
                    tráfego de visitantes, melhorar a experiência do usuário e
                    proteger o formulário de contato. Nesse sentido,
                    <b>são armazenados cookies</b> no navegador que podem ser
                    excluídos nas configurações de privacidade. Observe abaixo a
                    lista de cookies utilizados pelo site:
                  </p>
                </div>
                <div class="row cookie-list">
                  <div class="col-12">
                    <b>_ga :</b>
                    <span
                      >Usado para distinguir usuários (expira após 2 anos)</span
                    >
                  </div>
                  <div class="col-12">
                    <b>_gid :</b>
                    <span>
                      Usado para distinguir usuários (expira após 24
                      horas)</span
                    >
                  </div>
                  <div class="col-12">
                    <b>_ga_[ID] :</b>
                    <span
                      >Usado para persistir o estado da sessão (expira após 2
                      anos)</span
                    >
                  </div>
                  <div class="col-12">
                    <b>_GRECAPTCHA :</b>
                    <span>
                      Executado para fornecer análise de risco protegendo
                      formulários</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="accordion mention" id="accordionMention">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingMention">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseMention"
            aria-expanded="true"
            aria-controls="collapseOne">
            Avisos Legais
          </button>
        </h2>
        <div
          id="collapseMention"
          class="accordion-collapse collapse"
          aria-labelledby="headingMention"
          data-bs-parent="#accordionMention">
          <div class="accordion-body">
            <p>
              O site e o nome de domínio<b>Samuel.ziger</b> São propriedade de:
              <br /><br />
              Sr
              <img
                src="~@/assets/img/photo-title.png"
                width="115"
                height="70"
                class="img-title" />
              Ziger<br />
              <span class="personal"></span>
              <button
                type="button"
                @click="showInfo"
                class="btn btn-primary show-info">
                Ver informação</button
              ><br />
              <span>
                O site <b>Samuel.ziger</b> é otimizado para navegadores de
                desktop e dispositivos móveis de última geração (Firefox, Edge,
                Chrome, Safari, Opera). O site é hospedado pela empresa
                <b>Vercel</b>.
              </span>
              <br /><br />
              <span>
                Este site constitui uma obra da qual <b>Sr Samuel.ziger</b> é
                autor do Código de Propriedade Intelectual. Todo o código-fonte
                do site está disponível sob a <b>Licença do MIT</b> na
                plataforma Github, exceto as imagens do site. As fotografias,
                textos, slogans, desenhos, imagens, sequências animadas com ou
                sem som, bem como todas as obras integradas no site são
                propriedade do autor ou de terceiros que autorizaram a sua
                utilização.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Scrollbar from 'smooth-scrollbar'
import anime from 'animejs/lib/anime.es.js'
import 'bootstrap/js/dist/collapse'

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      society: '',
      email: '',
      phone: '',
      message: '',
      valid: false,
      error: false,
      send: false,
      scrollBar: Scrollbar,
    }
  },
  mounted() {
    Scrollbar.init(document.querySelector('#contact'), { damping: 0.5 })
    anime({
      targets: '.content',
      opacity: 1,
      duration: 200,
      easing: 'easeInOutCirc',
    })
    this.initCaptcha()
  },
  methods: {
    showInfo() {
      const contact = `
        Taguatinga Sul <br>
        Qsd 12 Vila Mathias<br>
        CEP:72020-120<br>
        Tél. : 61-986536975<br>
        Email : samuelziger01@gmail.com`
      document
        .querySelector('.personal')
        .insertAdjacentHTML('beforeend', contact)
      document.querySelector('.show-info').remove()
    },
    submit() {
      let inputs = ['name', 'phone', 'email', 'message']
      for (let input of inputs) {
        let element = window['form-' + input]
        if (this.checkInput(input, this[input])) {
          element.classList.add('is-valid')
          element.classList.remove('is-invalid')
          this.valid = true
        } else {
          element.classList.add('is-invalid')
          element.classList.remove('is-valid')
          this.valid = false
          element.focus()
          break
        }
      }
      if (this.valid) {
        let captcha = document.getElementById('g-recaptcha')
        if (window.grecaptcha.getResponse() === '') {
          captcha.classList.add('is-invalid')
          this.valid = false
        } else {
          captcha.classList.remove('is-invalid')
        }
      }
      if (this.valid) {
        axios
          .post('https://formspree.io/f/xpzvwkrj', {
            name: this.name,
            society: this.society,
            email: this.email,
            phone: this.phone,
            message: this.message
          })
          .then((response) => {
            if (response.status === 200) {
              this.send = true
              this.error = false
              for (const input of window.form.elements) {
                input.value = ''
                input.disabled = true
                input.classList.remove('is-valid', 'is-invalid')
              }
              document.getElementById('g-recaptcha').style.display = 'none'
              window.grecaptcha.reset()
            } else {
              this.send = false
              this.error = true
            }
          })
          .catch(() => {
            this.send = false
            this.error = true
          })
      }
    },
    checkInput(type, value) {
      switch (type) {
        case 'email':
          return value.match(
            /^(([^<>()[\]\\.,;:!\s@"']+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        case 'name':
        case 'phone':
        case 'message':
          if (value !== '' && value.length > 3) return true
          break
      }
      return false
    },
    initCaptcha() {
      document.getElementById('g-recaptcha').style.display = 'block'
      if (document.getElementById('script-recaptcha') == null) {
        let script = document.createElement('script')
        script.id = 'script-recaptcha'
        script.src =
          'https://www.google.com/recaptcha/api.js?onload=onloadCaptcha&render=explicit'
        document.getElementById('app').append(script)
        let self = this
        window.onloadCaptcha = function () {
          self.renderCaptcha()
        }
      }
    },
    renderCaptcha() {
      window.grecaptcha.render('g-recaptcha', {
        sitekey: '6LfKTH0dAAAAAFEst_vWSI06N57kS59I-i9si4rQ',
        size: 'normal',
        badge: 'inline',
        callback: self.callCaptcha,
      })
    },
    callCaptcha() {
      if (window.grecaptcha.getResponse() !== '') {
        document.getElementById('g-recaptcha').classList.remove('is-invalid')
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/scss/variables';
.content {
  section.form,
  section.mention,
  section.privacy {
    background-color: #fafafa;
    border: 1px solid #c0c0c0;
    -webkit-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
    margin-bottom: 20px;
    border-radius: 3px;
    padding: 0;
    .accordion-item {
      border: 0;
      background-color: transparent;
      .accordion-header {
        border: 0;
        background-color: transparent;
        .accordion-button {
          color: inherit;
          font-size: inherit;
          text-transform: uppercase;
          background-color: transparent;
          &:hover {
            color: $color-blue;
          }
        }
        .accordion-button:not(.collapsed) {
          background-color: transparent;
          color: inherit;
        }
      }
    }
  }
  section.form {
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
    .alert-info,
    .alert-danger {
      font-family: Arial, sans-serif;
      color: #fff;
      font-weight: bold;
      border-radius: 3px;
      border: 0;
      transition: opacity 0.5s ease-in-out;
    }
    .alert-info {
      background-color: $color-blue;
    }
    .alert-danger {
      color: #fff;
      background-color: #bb060a;
    }
    form {
      input,
      textarea {
        font-size: 1.5rem;
      }
      .invalid-tooltip {
        font-size: 1.2rem;
        font-weight: bold;
        top: auto;
      }
      .info-rgpd {
        color: #565656;
        padding-left: 5px;
        border-left: 2px solid $color-blue;
      }
      .mb-3 {
        position: relative;
      }
      :deep(.captcha).is-invalid > div {
        border: 1px solid $color-red;
      }
    }
  }
  section.mention {
    .accordion-item {
      .img-title {
        width: 33px;
        height: auto;
        padding-top: 2px;
        image-rendering: high-quality;
        image-rendering: -webkit-optimize-contrast;
      }
      .show-info {
        margin-bottom: 20px;
      }
      .personal {
        display: block;
        padding-left: 10px;
        border-left: 2px solid $color-blue;
      }
    }
  }
  section.privacy {
    .data-list,
    .cookie-list {
      display: flex;
      justify-content: flex-start;
      color: #545454;
      background-color: #f7f7f7;
      border: 1px solid #dddddd;
      padding: 0;
      margin: 0;
    }
    .data-list,
    .cookie-list {
      div {
        padding: 10px;
      }
      div:nth-child(odd) {
        background-color: #fdfdfd;
      }
    }
  }
}
/* Responsive */
@media (max-width: 410px) {
  .content {
    section.form form :deep(.captcha) {
      transform: scale(0.75) !important;
      -webkit-transform: scale(0.75) !important;
      transform-origin: 0 0 !important;
      -webkit-transform-origin: 0 0 !important;
    }
  }
}
</style>
