import aifianLogo from '../assets/aifian.png'
import info from '../assets/info.jpg'
import side1 from '../assets/side1.png'
import side2 from '../assets/side2.png'
import side31 from '../assets/side3_1.jpg'
import side32 from '../assets/side3_2.png'
import side4 from '../assets/side4.png'
import work11 from '../assets/work1-1.png'
import work12 from '../assets/work1-2.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
// import work31 from '../assets/work3_1.png'
// import work32 from '../assets/work3_2.png'
// import work33 from '../assets/work3_3.png'
// import work34 from '../assets/work3_4.png'
// import work35 from '../assets/work3_5.png'
// import work36 from '../assets/work3_6.png'
import work41 from '../assets/work4-1.png'
import work42 from '../assets/work4-2.jpg'
import work43 from '../assets/work4-3.jpg'

const data = {
  information: {
    name: '張庭瑋 (Chang Ting-Wei)',
    email: 'b97201019@gmail.com',
    tel: '0922-426226',
    language: ['TOEIC 790', 'JLPT N1'],
    img: info,
    link: {
      github: 'https://github.com/KakeruChang',
      medium: 'https://medium.com/@b97201019'
    }
  },
  introduction: {
    Chinese:
      '畢業於台大數學系，從小便有旺盛的求知慾，大學時期除了本科外，也因為對日本文化感到有興趣而開始學習日文，並於畢業後考取了JLPT N1，就業時雖因安穩而選擇了公務員作為第一份工作，而後因厭倦了無法學習新東西的生活，毅然決然地邁向了工程師之路。',
    English:
      "I graduated with a Bachelor's in Mathematics from National Taiwan University. Being an avid learner since childhood, apart from focusing on my major during college, I also begin to learn the Japanese language because of my interest in Japanese culture, finally qualifying for JLPT N1 after graduation. I chose to become a civil servant as my first job due to the security that it offered, but I eventually became tired of the dull life and sought to learn something new. Therefore I left my job and embarked on the path to learn to be a programmer."
  },
  skills: [
    {
      title: 'JavaScript',
      content: [
        'React.js',
        'React Native',
        'Redux',
        'Next.js',
        'Typescript',
        'Jest',
        'detox',
        'Vue.js'
      ]
    },
    {
      title: 'Layout',
      content: [
        'Tailwind',
        'styled-components',
        'Shopify / restyle',
        'Bootstrap'
      ]
    }
  ],
  works: [
    {
      title: 'aifian',
      img: [aifianLogo],
      company: 'Coumishe',
      appLink: {
        google:
          'https://play.google.com/store/apps/details?id=com.adenovo.aifian&hl=zh_TW&gl=US&showAllReviews=true',
        ios: 'https://apps.apple.com/tw/app/aifian/id1447838651'
      },
      descriptions: [
        'collaborate with teams of front-end, back-end developers, designers and product managers to develop new features',
        'rewrite old component from style-components to restyle design system for unifying UI style',
        'rewrite old class component and HOC to function component and hook',
        'rewrite JavaScript file to TypeScript file',
        'write unit and end-to-end test to save testing time'
      ],
      type: 'App',
      framework: 'React Native',
      isTeam: true
    },
    {
      title: 'elderly_housing',
      img: [work41, work42, work43],
      company: 'United Daily News',
      link: [
        'https://udn.com/newmedia/2021/elderly_housing/',
        'https://udn.com/newmedia/2021/elderly_housing/solution',
        'https://udn.com/newmedia/2021/elderly_housing/story'
      ],
      type: 'Web',
      framework: 'Vue 2',
      isTeam: false
    },
    {
      title: 'six-cities',
      img: [
        // work31, work32, work33, work34, work35, work36,
        work3
      ],
      company: 'United Daily News',
      link: [
        // 'https://vip.udn.com/newmedia/2021/cities/Taipei',
        // 'https://vip.udn.com/newmedia/2021/cities/New-Taipei',
        // 'https://vip.udn.com/newmedia/2021/cities/Taoyuan',
        // 'https://vip.udn.com/newmedia/2021/cities/Taichung',
        // 'https://vip.udn.com/newmedia/2021/cities/Tainan',
        // 'https://vip.udn.com/newmedia/2021/cities/Kaohsiung',
        'https://vip.udn.com/newmedia/2021/cities/'
      ],
      type: 'Web',
      framework: 'Vue 2',
      isTeam: false
    },
    {
      title: '108-education-collection',
      img: [work2],
      company: 'United Daily News',
      link: ['https://udn.com/newmedia/12-Year-Basic-education/'],
      type: 'Web',
      framework: 'Vue 3',
      isTeam: false
    },
    {
      title: '12-years-education',
      img: [work11, work12],
      company: 'United Daily News',
      link: [
        'https://udn.com/newmedia/2020/12-years-education/',
        'https://udn.com/newmedia/2020/12-years-education/poll'
      ],
      type: 'Web',
      framework: 'Vue 2',
      isTeam: false
    }
  ],
  sideProject: [
    {
      title: 'Use React Native to make an App without Expo',
      img: [side4],
      content: [
        '33 tutorial articles of React Native',
        'React hooks / Redux',
        'TypeScript / ESLint-airbnb',
        'Firebase / Async Storage',
        'i18n',
        'Scheduled Notification',
        'Redirect to detail as clicking on the notification'
      ],
      demo: 'https://ithelp.ithome.com.tw/users/20121828/ironman/3042'
    },
    {
      title: 'Imitating of Linksmate',
      img: [side1],
      content: [
        'React hooks / Redux',
        'Bootstrap4 / RWD',
        'firebase',
        'Estimate the phone rate on homepage',
        'Apply for your own account by clicking "申し込む" button, and complete the steps for registering.',
        'Log in and view detail  (such as circular progress bar which can reveal the data left ) in my page (マイページ)]'
      ],
      // demo: 'https://react-hook-demo.herokuapp.com/#/',
      demo: '',
      demoPlace: 'Heroku',
      source: 'https://github.com/KakeruChang/react-hook-demo/tree/master'
    },
    {
      title: 'Imitating of 5xRuby',
      img: [side2],
      content: ['React hooks', 'Bootstrap4 / RWD', 'Webpack'],
      // demo: 'https://five-ruby-webpack.herokuapp.com/',
      demo: '',
      demoPlace: 'Heroku',
      source: 'https://github.com/KakeruChang/5xruby-webpack'
    },
    {
      title: 'Japan Travel Website (with CMS)',
      img: [side31, side32],
      content: [
        'Vue / Vuex',
        'Bootstrap4 / RWD',
        'firebase',
        'user can either use keywords or choose area to find the spot they want to go',
        'user who has the administration authority  can access to the CMS'
      ],
      demo: 'https://kakeruchang.github.io/shop_demo/#/HomePage',
      demoPlace: 'Github Page',
      source: 'https://github.com/KakeruChang/3.0test'
    }
  ],
  experience: [
    {
      name: 'Software Engineer | Coumishe Co., Ltd.',
      duration: 'Mar 2021 ~ Present',
      content: [
        'Maintain aifian mobile app and develop new features (React Native)',
        'develop CMS for aifian mobile app (React and Tailwind)',
        'Collaborate with teams of front-end, back-end developers, designers and product managers'
      ]
    },
    {
      name: 'Front-End Developer | United Daily News',
      duration: 'May 2020 ~ Mar 2021',
      content: [
        'Collaborate with team of web designers and product team members to create new RWD web content with Vue',
        'Collaborate with back end developer',
        'Maintain and update content for existing website and common component'
      ]
    },
    {
      name: 'Atmark Solution Inc.',
      duration: 'Sep 2019 ~ Mar 2020',
      content: [
        'React (Function & Class component)',
        'React Hooks.Redux',
        'Making member system with CRUD by Spring Boot and MySQL (also by Laravel)'
      ]
    },
    {
      name: 'Hex School ( Online Course )',
      duration: 'Dec 2018 ~ Aug 2019',
      content: ['Vue', 'Bootstrap4', 'RWD', 'HTML5 / CSS3 / JavaScript (ES6)']
    },
    {
      name: 'Local Tax Bureau of Keelung City',
      duration: 'Mar 2015 ~ Dec 2018',
      content: ['As a Tax Officer, mainly in charge of Land Tax']
    },
    {
      name: 'National Taiwan University',
      duration: 'Sep 2009 ~ Jun 2012',
      content: ['Bachelor of Science in Mathematics']
    }
  ]
}

export default data
