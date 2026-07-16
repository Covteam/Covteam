import type {
	DirectionItem,
	FooterGroup,
	RecruitmentData,
	SiteLink,
} from '../types/content';

export const navigationLinks: SiteLink[] = [
	{ href: '#top', label: '团队主页' },
	{ href: '#directions', label: '研究方向' },
	{ href: '#honor', label: '历史得奖' },
	{ href: '#member', label: '现役成员' },
	{ href: '#lookfor', label: '招新招募' },
	{ href: '#retired', label: '退役成员' },
];

// 实验室方向
export const directions: DirectionItem[] = [
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

export const footerGroups: FooterGroup[] = [
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
			{ href: 'https://github.com/covteam', label: 'GitHub', external: true },
			{
				href: 'https://ctftime.org/team/35801',
				label: 'CTFtime',
				external: true,
			},
			{
				href: 'https://ctftime.org/team/411206',
				label: 'CTFtime New',
				external: true,
			},
		],
	},
	{
		title: '其他资源',
		links: [{ href: 'mailto:covteam@yeah.net', label: '联系我们' }],
	},
];

// 获得的奖项
export const achievements: string[] = [
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

export const recruitment: RecruitmentData = {
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
	news: ['招新一般定在上半学期和下半学期的期中', '具体时间请关注招新群'],
};
