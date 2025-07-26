const {createApp} = Vue;

const headerComponent = {
    template: `
    <header class="text-center bg-primary fw-bold text-white p-4">
        <h1>Протокол IPv6</h1>
        <p class="lead">Современный интернет протокол IPv6</p>
    </header>
    `
}

const tabsComponent = {
    props: ['tabs', 'activeTab'],
    template: `
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navigation">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="tab in tabs" :key="tab.id">
                        <a class="nav-link" :class="{ active: tab.id === activeTab }" href="#" @click.prevent="$emit('change-tab', tab.id)">
                            {{ tab.title }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}

const IPv6Component = {
    data() {
        return {
            images: [
                {id: 1, src: "img/formIPv6.avif", alt: "Пример IPv6"},
                {id: 2, src: "img/IPv6types.png", alt: "Типы IPv6"},
                {id: 3, src: "img/ipv6header.gif", alt: "Заголовок IPv6"},
                {id: 4, src: "img/comprasionIPv6.png", alt: "Сравнение IPv6"},
                {id: 5, src: "img/structureIPv6.jpg", alt: "Структура IPv6"},
                {id: 6, src: "img/tunnelIPv6.png", alt: "Туннель IPv6"}
            ],
            curIndex: 0,
            slideInterval: null
        };
    },
    mounted() {
        this.slideInterval = setInterval(() => {
            this.nextImage();
        }, 10000);
    },
    computed: {
        curImage() {
            return this.images[this.curIndex];
        }
    },
    methods: {
        prevImage() {
            this.curIndex = (this.curIndex - 1 + this.images.length) % this.images.length;
        },
        nextImage() {
            this.curIndex = (this.curIndex + 1) % this.images.length;
        }
    },
    template: `
<div class="container my-4">
    <div class="text-center mb-5">
        <h1 class="fw-bold display-5">О протоколе IPv6</h1>
    </div>

    <p class="border border-3 border-primary fs-5 rounded-3 p-3">
        <span style="color: #535fff; font-weight: bold">Протокол Интернета версии 6 (IPv6)</span> — это набор стандартных протоколов для сетевого уровня Интернета. 
        IPv6 предназначен для решения многих проблем текущей версии набора протоколов Интернета (известного как IPv4) об истощении адресов, безопасности, 
        автоматической конфигурации, расширяемости и т. д. IPv6 расширяет возможности Интернета для активации новых видов приложений, включая приложения 
        для одноранговой сети и мобильных устройств.
    </p>

    <p class="fs-5 text-justify">
        В протоколе IPv6 размер адреса составляет 128 бит. Предпочтительным является следующее представление адреса IPv6: x:x:x:x:x:x:x:x, 
        где каждая буква x — это шестнадцатиричные значения шести 16-битных элементов адреса. Диапазон адресов IPv6 составляет от 
        0000:0000:0000:0000:0000:0000:0000:0000 до ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff.
    </p>

    <div class="row d-flex align-items-stretch my-4">
        <div class="col-lg-5 col-md-12 mb-3 d-flex">
            <img src="img/IPv6.png"
             class="img-thumbnail img-fluid mx-auto"
             style="max-height: 100%; object-fit: contain;" 
             alt="IPv6">
        </div>
        <div class="col-lg-7 col-md-12">
            <h3 class="fw-bold mb-3 text-center">Формы представления:</h3>
            <ul class="fs-5 text-justify">
                <li>
                    <span style="color: #535fff; font-weight: bold">С пропуском начальных нулей</span><br>
                    Адрес IPv6 записывается с пропуском начальных нулей. Например, адрес IPv6 
                    1050:0000:0000:0000:0005:0600:300c:326b можно записать как 1050:0:0:0:5:600:300c:326b.
                </li>
                <li class="mt-3">
                    <span style="color: #535fff; font-weight: bold">Двойное двоеточие</span><br>
                    В адресе IPv6 на месте нескольких нулей ставится двойное двоеточие (::). Например, адрес IPv6 
                    ff06:0:0:0:0:0:0:c3 можно записать как ff06::c3. В одном IP-адресе двойное двоеточие может использоваться только один раз.
                </li>
            </ul>
        </div>
    </div>
    
    <div>
        <h2 class="gallery-title">Полезные картинки</h2>
        <div class="gallery-wrapper">
          <button @click="prevImage" class="gallery-btn">‹</button>
          <div class="image-container">
            <img :src="curImage.src" :alt="curImage.alt" class="gallery-image">
          </div>
          <button @click="nextImage" class="gallery-btn">›</button>
        </div>
    </div>
</div>
    `
}

const historyComponent = {
    template: `
    <div class="container my-4">
      <div class="text-center mb-5">
        <h1 class="fw-bold display-5">История IPv6</h1>
      </div>
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="(card, index) in cards" :key="index">
          <div class="card h-100 shadow border-0 d-flex flex-column">
            <div :class="'card-header bg-' + card.bg + ' text-white'">
              <strong>{{ card.title }}</strong>
            </div>
            <ul class="list-group list-group-flush flex-grow-1">
              <li
                v-for="(item, i) in card.items"
                :key="i"
                class="list-group-item d-flex align-items-start"
                style="min-height: 70px;"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
    data() {
        return {
            cards: [
                {
                    title: '1989–1994',
                    bg: 'primary',
                    items: [
                        {id: 1, text: 'Возникла проблема исчерпания IPv4-адресов'},
                        {id: 2, text: 'IETF запустила проект IP Next Generation (1992)'},
                        {id: 3, text: 'Утверждение модели IPng — 25 июля 1994'}
                    ]
                },
                {
                    title: '1995–1998',
                    bg: 'success',
                    items: [
                        {id: 1, text: 'RFC 1883 — первая спецификация IPv6 (1996)'},
                        {id: 2, text: 'Нумерация версии: 6 (5 назначена экспериментальному протоколу)'},
                        {id: 3, text: 'Определены ключевые функции: 128-битная адресация, IPsec'}
                    ]
                },
                {
                    title: '1999–2007',
                    bg: 'info',
                    items: [
                        {id: 1, text: 'IPv6 постепенно внедряется в сетевое оборудование'},
                        {id: 2, text: 'Операционные системы начинают поддержку протокола'},
                        {id: 3, text: 'Оценки исчерпания IPv4 разнятся — от 4 до 10 лет'}
                    ]
                },
                {
                    title: '2008–2011',
                    bg: 'warning',
                    items: [
                        {id: 1, text: 'Google тестирует IPv6 с 2008 года'},
                        {id: 2, text: '3 февраля 2011 — IANA распределяет последние блоки IPv4'},
                        {id: 3, text: '8 июня 2011 — Международный день IPv6 (тестирование)'}
                    ]
                },
                {
                    title: '2012–2015',
                    bg: 'danger',
                    items: [
                        {id: 1, text: '6 июня 2012 — Всемирный запуск IPv6'},
                        {id: 2, text: 'Провайдеры активируют IPv6 для пользователей'},
                        {id: 3, text: 'Сайты Google, Facebook, Bing и Yahoo переходят на IPv6'}
                    ]
                },
                {
                    title: '2016–н.в.',
                    bg: 'dark',
                    items: [
                        {id: 1, text: 'IPv6 включён по умолчанию в маршрутизаторах (Cisco, D-Link)'},
                        {id: 2, text: 'Мобильные сети LTE требуют обязательную поддержку IPv6'},
                        {id: 3, text: 'Используется в нескольких тысячах сетей по всему миру'}
                    ]
                }
            ]
        };
    }
};

const advantageComponent = {
  data() {
    return {
      advantages: [
        {
          title: 'Большее адресное пространство',
          text: 'IPv6 использует 128-битные адреса, что обеспечивает практически неограниченное количество уникальных IP-адресов.',
          color: 'success'
        },
        {
          title: 'Упрощённая маршрутизация',
          text: 'Благодаря упрощенной заголовочной информации и агрегации маршрутов IPv6 снижает нагрузку на маршрутизаторы.',
          color: 'success'
        },
        {
          title: 'Встроенная безопасность',
          text: 'IPv6 включает в себя поддержку IPsec, обеспечивая аутентификацию и шифрование данных на сетевом уровне.',
          color: 'success'
        }
      ],
      disadvantages: [
        {
          title: 'Ограниченная поддержка',
          text: 'Не все устройства и сети поддерживают IPv6, что может вызывать проблемы с совместимостью при миграции.',
          color: 'danger'
        },
        {
          title: 'Сложность миграции',
          text: 'Переход с IPv4 на IPv6 требует обновления оборудования, ПО и сетевой инфраструктуры.',
          color: 'danger'
        },
        {
          title: 'Меньший опыт использования',
          text: 'Из-за меньшего распространения IPv6 у специалистов может быть недостаточно опыта для настройки и поддержки.',
          color: 'danger'
        }
      ]
    }
  },
  template: `
  <div class="container my-4">
    <div class="text-center mb-4">
      <h1 class="fw-bold text-success">Преимущества протокола IPv6</h1>
    </div>
    <div class="row g-4">
      <div 
        v-for="(adv, index) in advantages" 
        :key="'adv-' + index" 
        class="col-sm-12 col-md-6 col-lg-4 mx-auto"
      >
        <div :class="'card h-100 shadow-sm border-' + adv.color + ' border-3'">
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">{{ adv.title }}</h5>
            <p class="card-text">{{ adv.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center my-5">
      <h1 class="fw-bold text-danger">Недостатки протокола IPv6</h1>
    </div>
    <div class="row g-4">
      <div 
        v-for="(dis, index) in disadvantages" 
        :key="'dis-' + index" 
        class="col-sm-12 col-md-6 col-lg-4 mx-auto"
      >
        <div :class="'card h-100 shadow-sm border-' + dis.color + ' border-3'">
          <div class="card-body text-center">
            <h5 class="card-title fw-bold">{{ dis.title }}</h5>
            <p class="card-text">{{ dis.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}

const questionsComponent = {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            },
            errors: {
                name: '',
                email: '',
                message: ''
            },
            touched: {
                name: false,
                email: false,
                message: false
            }
        }
    },
    methods: {
        checkEmail() {
            const templEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return templEmail.test(this.formData.email);
        },
        validateField(field) {
            this.touched[field] = true;

            if (field === 'name') {
                this.errors.name = this.formData.name.trim() ? '' : 'Поле "Имя" обязательно для заполнения';
            }

            if (field === 'email') {
                if (!this.formData.email) {
                    this.errors.email = 'Введите email';
                } else if (!this.checkEmail()) {
                    this.errors.email = 'Введите корректный email';
                } else {
                    this.errors.email = '';
                }
            }

            if (field === 'message') {
                this.errors.message = this.formData.message.trim() ? '' : 'Поле "Вопрос" обязательно для заполнения';
            }
        },
        validateAll() {
            this.validateField('name');
            this.validateField('email');
            this.validateField('message');
            return Object.values(this.errors).every(error => !error);
        },
        submitForm() {
            if (this.validateAll()) {
                this.$emit('form-submit', {
                    success: true,
                    message: 'Ваш вопрос успешно отправлен'
                });
                this.formData = {name: '', email: '', message: ''};
                this.touched = {name: false, email: false, message: false};
            } else {
                this.$emit('form-submit', {
                    success: false,
                    message: 'Пожалуйста, исправьте ошибки в форме'
                });
            }
        }
    },
    template: `
    <div class="container my-4">
        <div class="text-center mb-5">
            <h1 class="fw-bold display-5 text-primary">Вопросы</h1>
        </div>
        
        <form @submit.prevent="submitForm" novalidate>
            <div class="mb-3">
                <label for="name" class="form-label">Имя:</label>
                <input type="text" class="form-control" id="name" 
                       v-model="formData.name"
                       @input="validateField('name')"
                       @blur="validateField('name')"
                       :class="{'is-invalid': errors.name && touched.name}">
                <div class="invalid-feedback" v-if="errors.name && touched.name">{{ errors.name }}</div>
            </div>
            
            <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" 
                       v-model="formData.email"
                       @input="validateField('email')"
                       @blur="validateField('email')"
                       :class="{'is-invalid': errors.email && touched.email}">
                <div class="invalid-feedback" v-if="errors.email && touched.email">{{ errors.email }}</div>
            </div>
            
            <div class="mb-3">
                <label for="message" class="form-label">Вопрос:</label>
                <textarea class="form-control" id="message" 
                          v-model="formData.message"
                          @input="validateField('message')"
                          @blur="validateField('message')"
                          :class="{'is-invalid': errors.message && touched.message}"
                          required></textarea>
                <div class="invalid-feedback" v-if="errors.message && touched.message">{{ errors.message }}</div>
            </div>
            
            <button type="submit" class="btn btn-primary">Отправить</button>
        </form>
    </div>                 
    `
}

const comparisonComponent = {
    data() {
        return {
            comparison: [
                {
                    feature: 'Адресное пространство',
                    ipv4: '32 бита (около 4.3 млрд адресов)',
                    ipv6: '128 бит (практически неограниченное количество адресов)'
                },
                {
                    feature: 'Формат адреса',
                    ipv4: 'Десятичный (192.168.0.1)',
                    ipv6: 'Шестнадцатеричный (2001:db8::1)'
                },
                {
                    feature: 'Конфигурация',
                    ipv4: 'Ручная настройка или DHCP',
                    ipv6: 'Автоконфигурация (SLAAC)'
                },
                {
                    feature: 'Безопасность',
                    ipv4: 'Добавляется отдельно (например, через IPsec)',
                    ipv6: 'IPsec встроен в стандарт'
                },
                {
                    feature: 'Совместимость',
                    ipv4: 'Максимальная поддержка',
                    ipv6: 'Ограничена на старом оборудовании'
                },
                {
                    feature: 'Маршрутизация',
                    ipv4: 'Менее эффективная',
                    ipv6: 'Быстрая и упрощённая маршрутизация'
                }
            ]
        }
    },
    template: `
    <div class="container my-4">
      <h2 class="text-center fw-bold mb-5 display-5">Сравнение IPv4 и IPv6</h2>
      <div class="row g-4">
        <div class="col-12" v-for="(item, index) in comparison" :key="index">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-header bg-light py-3">
              <h5 class="card-title fw-bold mb-0 text-dark">{{ item.feature }}</h5>
            </div>
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-md-6 p-4 border-end border-bottom">
                  <div class="d-flex align-items-center mb-2">
                    <span class="badge bg-primary me-2">IPv4</span>
                    <span class="fw-semibold text-muted">{{ item.ipv4 }}</span>
                  </div>
                </div>
                <div class="col-md-6 p-4 border-bottom bg-light-hover">
                  <div class="d-flex align-items-center mb-2">
                    <span class="badge bg-success me-2">IPv6</span>
                    <span class="fw-semibold text-muted">{{ item.ipv6 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

const footerComponent = {
    template: `
    <div class="bg-dark text-white text-center p-3 mt-auto">
        <p>Выполнил: Фурзиков Максим. Группа 4219</p>
    </div>
    `
}

const app = createApp({
    data() {
        return {
            tabs: [
                {id: 'about', title: 'О протоколе'},
                {id: 'history', title: 'История'},
                {id: 'advantage', title: 'Преимущества/недостатки'},
                {id: 'comparison', title: 'Сравнение с IPv4'},
                {id: 'form', title: 'Вопросы'}
            ],
            activeTab: '',
            modalTitle: '',
            modalMessage: ''
        }
    },
    mounted() {
        this.activeTab = this.tabs[0].id;
    },
    methods: {
        changeTab(tabId) {
            this.activeTab = tabId;
        },
        showModal(response) {
            this.modalTitle = response.success ? 'Успех!' : 'Ошибка';
            this.modalMessage = response.message;

            const modal = new bootstrap.Modal(document.getElementById('formModal'));
            modal.show();
        }
    },
    components: {
        'header-component': headerComponent,
        'tabs-component': tabsComponent,
        'info-component': IPv6Component,
        'history-component': historyComponent,
        'advantage-component': advantageComponent,
        'comparison-component': comparisonComponent,
        'form-component': questionsComponent,
        'footer-component': footerComponent
    }
});

app.mount('#app');