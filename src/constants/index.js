const navLinks = [
  {
    name: 'Работы',
    link: '#work',
  },
  {
    name: 'Опыт',
    link: '#experience',
  },
  // {
  //   name: 'Skills',
  //   link: '#skills',
  // },
  {
    name: 'Отзывы',
    link: '#testimonials',
  },
]

const words = [
  { text: 'Идеи', imgPath: '/images/ideas.svg' },
  { text: 'Объятия', imgPath: '/images/embrace.svg' },
  { text: 'Поцелуи', imgPath: '/images/kiss.svg' },
  { text: 'Взгляды', imgPath: '/images/eyes.svg' },
  { text: 'Мечты', imgPath: '/images/dream.svg' },
  { text: 'Моменты', imgPath: '/images/moments.svg' },
  { text: 'Эмоции', imgPath: '/images/emotions.svg' },
  { text: 'Образы', imgPath: '/images/image.svg' },
]

const counterItems = [
  { value: 3, suffix: '+', label: 'Года опыта' },
  { value: 200, suffix: '+', label: 'Выполненных работ' },
  { value: 100, suffix: '%', label: 'Довольных клиентов' },
]

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png',
  },
  {
    imgPath: '/images/logos/company-logo-2.png',
  },
  {
    imgPath: '/images/logos/company-logo-3.png',
  },
  {
    imgPath: '/images/logos/company-logo-4.png',
  },
  {
    imgPath: '/images/logos/company-logo-5.png',
  },
  {
    imgPath: '/images/logos/company-logo-6.png',
  },
  {
    imgPath: '/images/logos/company-logo-7.png',
  },
  {
    imgPath: '/images/logos/company-logo-8.png',
  },
  {
    imgPath: '/images/logos/company-logo-9.png',
  },
  {
    imgPath: '/images/logos/company-logo-10.png',
  },
  {
    imgPath: '/images/logos/company-logo-11.png',
  },
]
const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Качество Превыше Всего',
    desc: 'Создаю фотографии высочайшего уровня с вниманием к каждой детали и настроению.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Открытое Общение',
    desc: 'Всегда на связи, чтобы услышать ваши идеи и воплотить их в жизнь.',
  },
  {
    imgPath: '/images/time.png',
    title: 'Пунктуальность',
    desc: 'Ценю ваше время - снимки готовы точно в оговоренные сроки без компромиссов в качестве.',
  },
]

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg',
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png',
  },
  {
    name: 'Project Manager',
    imgPath: '/images/logos/git.svg',
  },
]

const techStackIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
]

const expCards = [
  {
    review:
      'Рита привнесла в нашу студию не только техническое мастерство, но и творческий взгляд. Ее работы значительно повысили качество наших фотосессий и удовлетворенность клиентов. Ее подход к созданию кадров бесценен для создания незабываемых впечатлений.',
    imgPath: '/images/exp1.png',
    logoPath: '/images/camera.png',
    title: 'Профессиональный фотограф',
    // date: 'Январь 2023 - Настоящее время',
    responsibilities: [
      'Проведение индивидуальных и групповых фотосессий в студии и на выезде',
      'Сотрудничество со стилистами и визажистами для создания гармоничных образов',
      'Обработка фотографий с сохранением естественности и вниманием к деталям',
    ],
  },
  {
    review:
      'Вклад Риты в развитие нашего свадебного агентства был исключительным. Она подходит к каждой съемке с творческим мышлением и умением находить beauty в каждом моменте.',
    imgPath: '/images/exp2.png',
    logoPath: '/images/wedding.png',
    title: 'Свадебный фотограф',
    // date: 'Июнь 2020 - Декабрь 2023',
    responsibilities: [
      'Организация и проведение свадебных фотосессий "под ключ"',
      'Работа с парами для создания комфортной атмосферы и искренних эмоций',
      'Создание фотоисторий, которые точно передают emotions и уникальность каждого торжества',
    ],
  },
  {
    review:
      'Работа Риты над коммерческими проектами принесла высокий уровень качества и эффективности. Она создала решения, которые усилили визуальное восприятие брендов и соответствовали бизнес-целям компаний.',
    imgPath: '/images/exp3.png',
    logoPath: '/images/job.png',
    title: 'Коммерческий фотограф',
    // date: 'Март 2019 - Май 2020',
    responsibilities: [
      'Создание контента для брендов, включая предметную и портретную съемку',
      'Разработка визуальных концепций в соответствии с айдентикой компаний',
      'Взаимодействие с маркетинговыми командами для реализации проектов на основе целевой аудитории',
    ],
  },
]

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
]

const testimonials = [
  {
    name: 'Алексей Иванов',
    mentions: '@alex_photo_love',
    review:
      'Рита - настоящий волшебник! Она смогла поймать самые искренние эмоции нашей семьи. Каждый кадр - это отдельная история, которая будет согревать нас долгие годы. Спасибо за такие живые и душевные фото!',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Дмитрий Петров',
    mentions: '@dima_wedding',
    review:
      'Работать с Ритой было невероятно комфортно! Она превратила нашу свадебную фотосессию в настоящую сказку. Внимание к деталям и умение создать расслабленную атмосферу - это то, что отличает профессионала. Все гости в восторге от снимков!',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Артем Козлов',
    mentions: '@artem_style',
    review:
      'Сотрудничество с Ритой - это абсолютное удовольствие! Ее профессионализм, чуткость и dedication к созданию исключительных результатов были заметны на каждом этапе. Энтузиазм Риты к каждой детали съемки действительно впечатляет. Если вы хотите не просто фотографии, а настоящие произведения искусства, которые подчеркнут вашу индивидуальность - Рита ваш идеальный фотограф.',
    imgPath: '/images/client2.png',
  },
  {
    name: 'Максим Смирнов',
    mentions: '@max_travel',
    review:
      'Рита - настоящий профессионал! Она превратила нашу обычную прогулку в удивительную фотосессию. Получились свежие, современные снимки, которые идеально передают настроение и легко смотрятся. Восхитительная работа!',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Сергей Волков',
    mentions: '@serg_business',
    review:
      'Профессионализм Риты в создании портретов действительно впечатляет! Она сделала серию снимков для моего бренда, и с их запуском узнаваемость компании значительно выросла. Каждый кадр точно передает философию бренда. Настоящий мастер своего дела!',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Иван Новиков',
    mentions: '@ivan_dad',
    review:
      'Работать с Ритой было сплошным удовольствием! Она прекрасно поняла наши пожелания и создала фото, которые превзошли все ожидания. Ее умение находить beauty в обычных моментах и работать с естественным светом - выше всяких похвал. Настоятельно рекомендую!',
    imgPath: '/images/client6.png',
  },
]

const socialImgs = [
  {
    name: 'insta',
    imgPath: '/images/insta.png',
  },
  {
    name: 'fb',
    imgPath: '/images/fb.png',
  },
  {
    name: 'x',
    imgPath: '/images/x.png',
  },
  {
    name: 'linkedin',
    imgPath: '/images/linkedin.png',
  },
]

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
}
