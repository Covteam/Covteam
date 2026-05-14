const baseImageUrl = `${import.meta.env.BASE_URL}img/`;

// 实验室方向
export const directions = [
  {
    title: '网络安全',
    description:
      '通过掌握的网络安全知识，模拟黑客攻击对企业进行渗透测试并撰写测试报告，提供漏洞解决方案。',
  },
  {
    title: '内核安全',
    description:
      '主要围绕逆向方向，学习汇编语言以及 Windows、Linux、Android、iOS 等平台的逆向知识。',
  },
  {
    title: '网络与服务器',
    description:
      '熟悉掌握计算机网络各层重要协议以及服务器相关知识，具备基础设施理解能力。',
  },
  {
    title: '网站开发',
    description:
      '覆盖现代 Web 栈与浏览器生态，能够构建兼具实用性与专业性的动态网站与服务。',
  },
];

export const footerGroups = [
  {
    title: '页面导航',
    links: [
      { href: '#top', label: '返回顶部' },
      { href: '#directions', label: '研究方向' },
      { href: '#member', label: '现役成员' },
      { href: '#retired', label: '退役成员' },
    ],
  },
  {
    title: '友情链接',
    links: [
      {href:'https://github.com/covteam',label:'Github'},
      {href:'https://ctftime.org/team/35801',label:'CTFtime'},
      {href:'https://ctftime.org/team/411206',label:'CTFtimeNew'},
    ],
  },
  {
    title: '其他资源',
    links: [
      {href:'mailto:covteam@yeah.net',label:'联系我们'},
    ],
  },
];

// 获得的奖项
export const achievements = [
  '2026 全国大学生信息安全竞赛重庆赛区三等奖',
  '2025 四川省大学生信息安全竞赛三等奖',
  '2024 全国大学生信息安全竞赛西南赛区二等奖',
  '2023 全国大学生信息安全竞赛全国三等奖',
  '2023 全国大学生信息安全竞赛西南赛区一等奖',
  '2022 全国大学生信息安全竞赛全国二等奖',
  '2021 四川省大学生信息安全竞赛三等奖',
  '2021 全国大学生信息安全竞赛全国三等奖',
  '2021 全国大学生信息安全竞赛西南赛区一等奖',
  'XCTF-SCTF 2019 第 24 名',
  'XCTF-WMCTF 2020 第 35 名',
  '2020 全国密码数学挑战赛国赛三等奖',
  '2020 四川省安洵杯信息安全大赛省二等奖',
  '2019 全国大学生信息安全竞赛西南赛区三等奖',
  '2019 四川省三叶草信息安全大赛省一等奖',
];

export const recruitment = {
  features: [
    '学习氛围浓厚，定期技术分享交流',
    '资源积淀丰富',
    '专人负责新人培养',
    '团队成员风趣幽默',
    '招新面向全校',
    '独立实验室',
    '环境整洁',
  ],
  gains: [
    '自由分享的互联网精神',
    '解决问题的能力',
    'Web 常见漏洞攻击与防御',
    '安全研发技能',
    '汇编语言',
    '各平台二进制安全知识',
    '一群人的友谊',
  ],
  hopes: [
    '积极向上，乐观开朗',
    '团结队友，善待同学',
    '热爱互联网，喜欢信息安全',
    '具备通过搜索引擎解决问题的能力',
    '可以随时访问 Google',
    '拥有独立的技术博客',
    '肯于钻研',
  ],
  news:[
    '招新一般定在上半学期和下半学期的期中',
    '具体时间请关注招新群'
  ],
};

// 现役成员
export const activeMembers = [
  {
    name: 'Spiral',
    role: 'WEB',
    image: `${baseImageUrl}Spiral.jpg`,
    link: '',
    bio: '2025 级 WEB REVERSE 我独自升级中',
  },
  {
    name: 'Nacocx',
    role: 'PWN',
    image: `${baseImageUrl}Nacocx.png`,
    link: 'https://blog.nacocx.top',
    bio: '2024 级 PWN RE WEB都会一点点',
  },
  {
    name: 'ep1phany',
    role: 'MISC',
    image: `${baseImageUrl}ep1phany.png`,
    link: '',
    bio: '2024 级 来打ctf喵',
  },
  {
    name: 'Polaris',
    role: 'WEB',
    image: `${baseImageUrl}Polaris.jpg`,
    link: '',
    bio: '2024 级 一个小趴菜',
  },
  {
    name: 'HaZardJ11',
    role: 'WEB',
    image: `${baseImageUrl}HaZardJ11.jpg`,
    link: '',
    bio: '2024 级 web菜鸡',
  },
    {
    name: 'mango',
    role: 'WEB',
    image: `${baseImageUrl}mango.jpg`,
    link: '',
    bio: '2024 级 web菜鸡',
  },
  {
    name: 'Tsing',
    role: 'WEB',
    image: `${baseImageUrl}Tsing.png`,
    link: '',
    bio: '2024 级 WEB CRYPTO  萌萌之中早已注定',
  },
  {
    name: '1',
    role: 'CRYPTO',
    image: '',
    link: '',
    bio: '2023 级',
  },
  {
    name: '2',
    role: 'WEB',
    image: '',
    link: '',
    bio: '2023 级',
  },
  {
    name: '3',
    role: 'PWN',
    image: '',
    link: '',
    bio: '2023 级',
  },
  {
    name: '4',
    role: 'RE',
    image: '',
    link: '',
    bio: '2023 级',
  },
  {
    name: '5',
    role: 'WEB',
    image: '',
    link: '',
    bio: '2023 级',
  },
  {
    name: '6',
    role: 'WEB',
    image: '',
    link: '',
    bio: '2023 级',
  },
];

// 退役成员
export const retiredMembers = [
  {
    name: 'LiuQin',
    role: 'WEB',
    image: ``,
    link: '',
    bio: '2024 级 web +misc',
  },
   {
    name: 'suki',
    role: 'WEB',
    image: ``,
    link: '',
    bio: '2024 级 web小趴菜',
  },
  {
    name: 'MEss@',
    role: 'PWN',
    image: `${baseImageUrl}Messa.jpg`,
    link: 'https://0xme3.github.io/',
    bio: '2020 级。热爱计算机，也许不是一个出色的 CTFer，但希望自己是个合格的计算机使用者。',
  },
  { name: 'Joker', role: 'PWN', image: `${baseImageUrl}joker.jpg`, link: 'https://www.j0k3r.xyz', bio: '2020 级。' },
  {
    name: 'cri1stur',
    role: 'WEB',
    image: `${baseImageUrl}cri1stur.jpg`,
    link: 'https://cri1stur.github.io',
    bio: '2021 级。walking on your way.',
  },
  {
    name: 'sohahaha',
    role: 'PWN',
    image: `${baseImageUrl}sohahaha.jpg`,
    link: 'https://sohaah.github.io/',
    bio: '2021 级。我是一个帅哥。',
  },
  {
    name: '伤心的小尾巴',
    role: 'WEB',
    image: `${baseImageUrl}sxdxwb.jpg`,
    link: 'https://blog.csdn.net/qq_59950255?type=blog',
    bio: '2020 级。走自己的路。',
  },
  { name: 'bluetuu', role: 'PWN', image: `${baseImageUrl}hy.jpg`, link: 'http://bluetuu.com/', bio: '2020 级。' },
  { name: 'kaikaix', role: 'WEB', image: `${baseImageUrl}gggvggsd.jpg`, link: 'https://kaikaix.github.io', bio: '2021 级。' },
  { name: 'zr', role: 'WEB', image: `${baseImageUrl}zr.jpg`, bio: '2020 级。' },
  { name: '于归', role: 'MISC', image: `${baseImageUrl}yugui.jpg`, bio: '2020 级。' },
  {
    name: 'Joe1sn',
    role: 'RE',
    image: `${baseImageUrl}joe1sn.jpg`,
    link: 'https://blog.joe1sn.top',
    bio: '2019 级，pwn | re 二相性选手，方向不定，热爱整活。',
  },
  {
    name: 'cnitlrt',
    role: 'PWN',
    image: `${baseImageUrl}cnitlrt.jpg`,
    link: 'https://www.jianshu.com/u/1d5ea41bdd36',
    bio: '2019 级，核心划水选手，Joe1sn 后援团团长，无情的竞赛机器。',
  },
  {
    name: 'AL4N',
    role: 'WEB',
    image: `${baseImageUrl}Alan.jpg`,
    link: 'https://www.jianshu.com/u/c3981d58af59',
    bio: '2019 级，国家一级划水运动员，covteam 护网第一人。',
  },
  { name: 'thestar', role: 'MISC', image: `${baseImageUrl}thestar.jpg`, bio: '2019 级，misc/web 选手，喜欢纸片人。' },
  {
    name: 'cxxxx',
    role: 'CRYPTO',
    image: `${baseImageUrl}cxxxx.jpg`,
    link: 'https://blog.csdn.net/m0_47305816',
    bio: '2019 级。大家都来做密码，密码组还等着新鲜血液振兴。',
  },
  {
    name: 'E4L4',
    role: 'PWN',
    image: `${baseImageUrl}e4l4.jpg`,
    link: 'https://www.jianshu.com/u/c3981d58af59',
    bio: '2019 级，pwnbye4l4^^',
  },
  { name: 'blacktea', role: 'PWN', image: `${baseImageUrl}blacktea.jpg`, bio: '2020 级，pwn20 级预备队员，实验室吟游诗人。' },
  { name: '沐蠡', role: 'WEB', image: `${baseImageUrl}muli.jpg`, bio: '2020 级，web 萌新一枚。' },
  {
    name: 'T04hig5t4',
    role: 'WEB',
    image: `${baseImageUrl}TONIGHT.jpg`,
    link: 'https://t04hig5t4.work/',
    bio: '2019 级，P 社玩家，零食消灭者，批话烂话之神。',
  },
  {
    name: 'Malabis',
    role: 'WEB',
    image: `${baseImageUrl}malabis.jpg`,
    link: 'https://www.malabis.site',
    bio: '2019 级，前 CTF 拉胯选手，现沉迷渗透与前端开发。',
  },
  {
    name: 'Noel',
    role: 'WEB',
    image: `${baseImageUrl}NOEL.jpg`,
    link: 'https://n0el4kls.github.io/',
    bio: '2019 级，熟练 Linux、Windows 单词的拼写以及 Windows 的启动。',
  },
  {
    name: 'F1ght',
    role: 'WEB',
    image: `${baseImageUrl}FIGHT.jpg`,
    link: 'http://www.fight123.top',
    bio: '2019 级，渗透开发一把抓，前端后端 Android、H5+ 主流技术都有涉猎。',
  },
  {
    name: 'jokercgyl',
    role: 'CRYPTO',
    image: `${baseImageUrl}jokercgyl.jpg`,
    bio: '2019 级，密码组拖延症患者，不过密码真的不简单。',
  },
  {
    name: 'huol20',
    role: 'WEB',
    image: `${baseImageUrl}huol20.jpg`,
    link: 'http://too0p.top/',
    bio: '2019 级，web 组划水选手，门门想会，样样稀松。',
  },
  {
    name: 'Sma11_Tim3',
    role: 'PWN',
    image: `${baseImageUrl}default-ava.jpg`,
    bio: '16 级信安。方向二进制，擅长 Windows、Linux 逆向，目前 PWN 入门中。',
  },
  {
    name: 'khuntor',
    role: 'WEB',
    image: `${baseImageUrl}default-ava.jpg`,
    bio: '实验室管理员之一，主要学习 WEB 安全方向。',
  },
  {
    name: 'Na1vEt0',
    role: 'MOBILE',
    image: `${baseImageUrl}default-ava.jpg`,
    link: 'https://naivete.cc',
    bio: '方向移动安全，主要擅长给 dalao 递 Java，喜欢二次元，嗜辣。',
  },
  {
    name: 'Jqqzzz',
    role: 'WEB',
    image: `${baseImageUrl}default-ava.jpg`,
    link: 'https://blog.csdn.net/boomjq',
    bio: '方向 WEB 安全，目前还是个垃圾。',
  },
  {
    name: 'chase',
    role: 'WEB',
    image: `${baseImageUrl}default-ava.jpg`,
    bio: '主要方向 WEB 安全，对 sql 注入、文件包含、上传和 xss 有初步了解。',
  },
  { name: 'xiafeng2333', role: '成员', image: `${baseImageUrl}default-ava.jpg`, bio: '方向 WEB。' },
  {
    name: '向帅',
    role: '网络',
    image: `${baseImageUrl}default-ava.jpg`,
    bio: '方向网络，对网络充满兴趣，喜欢学习新技术。',
  },
  { name: '121212', role: 'RE', image: `${baseImageUrl}default-ava.jpg`, bio: '方向逆向。' },
];
