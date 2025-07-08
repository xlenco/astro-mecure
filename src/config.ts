import type { Config } from './types';
import { getYear } from 'date-fns';
import { url } from '@/utils/url';

const config: Config = {
  title: '希乐博客',
  description: 'Xlenco的个人博客，分享技术与生活。“生命不息，折腾不止。',
  author: 'Wider',
  favicon: 'https://weavatar.com/avatar/67254b346498965226e5c91ebff66a69570b97f224d2d061e504b4eade1f00fa',
  navbar: {
    logo: undefined,
    menu: [
      {
        label: '首页',
        url: url('/'),
        icon: 'tabler:home'
      },
      {
        label: '标签',
        url: url('/tags'),
        icon: 'tabler:tag'
      },
      {
        label: '分类',
        url: url('/categories'),
        icon: 'tabler:category'
      },
      {
        label: '归档',
        url: url('/archive'),
        icon: 'tabler:archive'
      },
      {
        label: '友链',
        url: url('/friends'),
        icon: 'tabler:heart-handshake'
      },
      {
        label: '关于',
        url: url('/about'),
        icon: 'tabler:info-circle'
      },
      // {
      //   label: '菜单示例',
      //   icon: 'tabler:menu-2',
      //   children: [
      //     { label: 'SubItem1', url: '#', icon: 'tabler:circle'},
      //     { label: 'SubItem2', url: '#', icon: 'tabler:circle'},
      //     {
      //       label: 'SubItem3',
      //       icon: 'tabler:menu-2',
      //       children: [
      //         { label: 'SubItem1', url: '#', icon: 'tabler:circle'},
      //         { label: 'SubItem2', url: '#', icon: 'tabler:circle'},
      //         { label: 'SubItem3', url: '#', icon: 'tabler:circle'},
      //       ]
      //     },
      //   ]
      // },
    ],
    hasSearchToggle: true,
    hasThemeToggle: true,
  },
  false: {
    background: import('src/assets/hero-bg.jpg'),
    description: '欢迎来到银河渡舟的记事簿，看看最近我在折腾啥吧。',
    title: import('@/custom/HeroLogo.astro'),
  },
  sidebar: {
    widgets: [
      {
        name: 'profile',
        author: 'Xlenco',
        description: '总有人间一两风，吹我十万八千梦',
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=160',
        background: import('src/assets/profile-bg.jpg'),
        socialIcons: [
          {
            label: 'github',
            color: '#7c8690',
            icon: 'tabler:brand-github',
            url: 'https://github.com/xlenco'
          },
          // {
          //   label: 'bilibili',
          //   color: '#fc87b2',
          //   icon: 'tabler:brand-bilibili',
          //   url: 'https://space.bilibili.com/293591084'
          // },
          // {
          //   label: 'netease music',
          //   color: '#ff4e6a',
          //   icon: 'tabler:brand-netease-music',
          //   url: 'https://music.163.com/user/390631653'
          // },
          // {
          //   label: 'twitter',
          //   color: '#1d9bf0',
          //   icon: 'tabler:brand-twitter',
          //   url: 'https://twitter.com/vviderx'
          // },
          {
            label: 'mail',
            color: '#7562c7',
            icon: 'tabler:mail',
            url: 'mailto:xlenco@hotmail.com'
          }
        ],
      },
      {
        name: 'tag-cloud',
        sortBy: 'count',
        order: 'desc',
        limit: 30,
      },
      {
        name: 'category-tree',
        sortBy: 'count',
        order: 'desc',
        expandDepth: 2,
      },
      // {
      // name: 'component',
      //component: import('@/components/custom/Recommend.astro'),
      // },
    ]
  },
  pagination: {
    pageSize: 20,
    hasControls: true,
    hasEdges: false,
    siblings: 2,
    boundaries: 1,
  },
  article: {
    outdateTip: {
      outdateLimit: 180,
    },
    license: {
      licenseName: 'CC BY-NC-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh',
      infoText: '转载或引用本文时请注明作者及出处，不得用于商业用途。',
    }
  },
  comment: {
    // provider: 'giscus',
    // options: {
    // repo: 'izmttk/izmttk.github.io',
    // repoId: 'R_kgDOJIxtIQ',
    // category: 'General',
    // categoryId: 'DIC_kwDOJIxtIc4CU1cl',
    // mapping: 'pathname',
    // reactionsEnabled: '1',
    // emitMetadata: '0',
    // inputPosition: 'top',
    // lang: 'zh-CN',
    // },
    provider: 'waline',
    options: {
      serverURL: 'https://waline.xlenco.top/',
      meta: ['nick', 'mail', 'link'],
      requiredMeta: ['nick', 'mail'],
      wordLimit: 200,
      commentSorting: 'latest',
      login: 'disable',
      search: false,
      copyright: false,
      reaction: false,
      emoji: [
        '//unpkg.com/@waline/emojis@1.1.0/weibo',
        '//unpkg.com/@waline/emojis@1.1.0/bilibili',
        // '//cdn.jsdelivr.net/gh/GamerNoTitle/ValineCDN@master/Coolapk/',
      ],
    }
  },
  footer: {
    links: [
      { label: '更新日志', url: url('changelog') },
      { label: '引用声明', url: url('reference') },
      { label: '关于', url: url('about') },
      { label: '归档', url: url('archive') },
      { label: '友情链接', url: url('friends') },
      { label: 'Github', url: 'https://github.com/xlenco' },
    ],
    declarations: [
      `Copyright © ${getYear(new Date())} Xlenco All Rights Reserved.`,
    ],
    generator: true,
    rss: true,
    sitemap: true,
  },
  algolia: {
    appId: "LNXGBV9VXP",
    apiKey: "244e1376ee65f9b1f68643c4f40cb8ce",
    indexName: "blog_xlenco_top_lnxgbv9vxp_pages",
  }
}

export default config;
