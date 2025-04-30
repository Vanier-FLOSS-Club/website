// Theme and Site Configuration
// 主题与网站配置
export const themeConfig = {
  // Site Metadata | 站点数据
  siteMeta: {
    title: "Vanier FLOSS Club",
    description: "The Free/Libre and Open Source Software Club of Vanier College at Montreal, Quebec, Canada.",
    // The Welcome Message to be Shown on the Home Page
    // Optional, if not provided, a welcome + title message will be used.
    welcomeMessage: "Welcome to Vanier FLOSS Club!",
    logo: "/images/logo/logo.webp",
    // URL | 站点地址
    site: "https://vanierfloss.club",
    // Language: 'en-US' | 'zh-CN'
    // 语言: 'en-US' | 'zh-CN'
    lang: "en-US",
    // Author Information | 作者信息
    author: {
      name: "Vanier FLOSS Club",
      cover: "/images/logo/logo.webp",
      email: "vanierfloss@protonmail.com",
      link: "https://vanierfloss.club",
    },
  },
  // Internet Content Provider License / 备案信息
  // icp: "萌ICP备19700101号",
  // Website Established Since (A Full Unix Timestamp)
  // 建站时间（完整的 Unix 时间戳）
  since: "2025-05-01T00:00:00.000Z",
  // Number of Posts to Show per Page
  postSize: 8,
  // Inject
  inject: {
    // Head
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://vanierfloss.club/rss.xml",
        },
      ],
      // FontAwesome
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/css/all.css",
        },
      ],
      // Embed Code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      // DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // Navigation Bar Configuration | 导航栏配置
  nav: [
    { text: "Events", link: "/pages/categories/Events", icon: "fa-solid fa-calendar-day" },
    { text: "About Us", link: "/pages/about", icon: "fa-solid fa-address-card" },
  ],
  // Left Side Nav Menu (External Links)
  // 左侧导航栏菜单（外部链接）
  navMore: [
    {
      name: "Others",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "GitHub",
          url: "https://github.com/Vanier-FLOSS-Club",
        },
      ],
    },
  ],
  // Post Cover Configuration | 文章封面配置
  cover: {
    // Display Two Columns of Post or Not | 是否显示两列文章
    twoColumns: false,
    // Display Cover | 是否显示封面
    showCover: {
      enable: true,
      // Cover Layout: 'left' | 'right' | 'both'
      // 封面布局: 'left' | 'right' | 'both'
      coverLayout: 'both',
      // Default Covers (displayed randomly)
      // defaultCover: [
      // ]
    }
  },
  // Enable FakeGPT or Not
  fakeGPT: true,
  // Footer Information | 页脚信息
  footer: {
    // Social Links | 社交链接
    // Make add an even number of items.
    // 添加偶数个社交链接
    social: [
      {
        // If using FA Pro, use fa-envelopes.
        icon: "fa-solid fa-envelope",
        link: "mailto:vanierfloss@protonmail.com",
      },
      {
        icon: "fa-brands fa-github",
        link: "https://www.github.com/Vanier-FLOSS-Club",
      },
      {
        icon: "fa-brands fa-linkedin",
        link: "https://www.linkedin.com/company/vanier-floss-club/",
      },
      {
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/rBKb9JRQGD",
      },
    ],
    // Sitemap | 网站地图
    sitemap: [
      {
        text: "Contents",
        items: [
          { text: "Events", link: "/pages/categories/Events" },
        ],
      },
      {
        text: "Posts",
        items: [
          { text: "Recent Posts", link: "/" },
          { text: "All Categories", link: "/pages/categories" },
          { text: "All Tags", link: "/pages/tags" },
          { text: "Archives", link: "/pages/archives", newTab: true },
        ],
      },
      {
        text: "Others",
        items: [
          { text: "About Us", link: "/pages/about" },
          { text: "Privacy Policy", link: "/pages/privacy" },
          { text: "Copyright Info", link: "/pages/copyright" },
        ],
      },
    ],
  },
  // Comment System | 评论系统
  comment: {
    enable: false,
    // Comment System Type | 评论系统类型
    // artalk / twikoo
    type: "artalk",
    // Artalk
    // https://artalk.js.org/
    artalk: {
      site: "",
      server: "",
    },
    // Twikoo
    // https://twikoo.js.org/
    twikoo: {
      js: "https://cdn.jsdelivr.net/npm/twikoo/dist/twikoo.all.min.js",
      envId: "",
      lang: "zh-CN",
    },
  },
  // Right-Side Sidebar | 右侧边栏
  aside: {
    // Brief Description of the Site | 站点简介
    hello: {
      enable: true,
      text: "Hello! We are the Free/Libre and Open Source Software Club of Vanier College at Montreal, Quebec, Canada.",
    },
    // Table of Contents | 文章目录
    toc: {
      enable: true,
    },
    // Tag Display | 标签展示
    tags: {
      enable: true,
    },
    // Site Data Display | 站点数据展示
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // AI Search | AI 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "",
    apiKey: "",
    indexName: "",
  },
  // Sponsoring | 打赏, TODO
  rewardData: {
    enable: true,
    // GitHub Sponsors | GitHub 赞助
    github: "",
    // Buy Me a Coffee
    // https://www.buymeacoffee.com/
    buyMeACoffee: "",
    // Patreon
    // https://www.patreon.com/
    patreon: "",
    // Ko-fi
    // https://ko-fi.com/
    koFi: "",
    // PayPal
    // https://www.paypal.com/
    paypal: "",
    // WeChat QR Code | 微信二维码
    wechat: "",
    // Alipay QR Code | 支付宝二维码
    alipay: "",
  },
  // Fancybox for Images | 图片灯箱
  fancybox: {
    enable: true,
    js: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox/fancybox.umd.min.js",
    css: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox/fancybox.min.css",
  },
};
