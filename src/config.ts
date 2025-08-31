import type {
	CommentConfig,
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import { getTranslateLanguageFromConfig } from "./utils/language-utils";

// 默认网站语言设置; Define site language
const SITE_LANG = "zh_CN"; // 网站语言, 英'en', 简中'zh_CN', 日'ja'; Language code, e.g., 'en', 'zh_CN', 'ja', etc.

export const siteConfig: SiteConfig = {
	title: "Mizuki",
	subtitle: "One demo website",

	lang: SITE_LANG,

	themeColor: {
		hue: 210, // 默认颜色; Default hue for theme color, range from 0 to 360. e.g., red: 0, cyan: 200, teal: 250, pink: 345
		fixed: false, // 隐藏选色板; Hide theme color picker for visitors
	},
	translate: {
		enable: true, // 启用自动翻译; Enable translation feature
		service: "client.edge", // 使用edge浏览器翻译功能; Use Edge browser translation service
		defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG), // 自动设置翻译语言; Automatically set default translation language based on site language
		showSelectTag: false, // 是否默认启用语言下拉列表; Don't show default language selection dropdown, use custom button
		autoDiscriminate: true, // 自动检测用户语言; Automatically detect user language
		ignoreClasses: ["ignore", "banner-title", "banner-subtitle"], // 要忽略的css类; CSS class names to ignore for translation
		ignoreTags: ["script", "style", "code", "pre"], // 要忽略翻译的html标签; HTML tags to ignore for translation
	},
	banner: {
		enable: true, // 启用横幅头像 (暂时关闭以节省加载时间)

		// 支持多个图像, 当数量大于一时默认启用轮播
		src: {
			desktop: [
				"assets/desktop-banner/1.webp",
				"assets/desktop-banner/2.webp",
				"assets/desktop-banner/3.webp",
				"assets/desktop-banner/4.webp",
				"assets/desktop-banner/5.webp",
				"assets/desktop-banner/6.webp",
				"assets/desktop-banner/7.webp",
				"assets/desktop-banner/8.webp",
				"assets/desktop-banner/9.webp",
				"assets/desktop-banner/10.webp",
				"assets/desktop-banner/11.webp",
				"assets/desktop-banner/12.webp",
				"assets/desktop-banner/13.webp",
				"assets/desktop-banner/14.webp",
				"assets/desktop-banner/15.webp",
				"assets/desktop-banner/16.webp",
				"assets/desktop-banner/17.webp",
				"assets/desktop-banner/18.webp",
				"assets/desktop-banner/19.webp",
				"assets/desktop-banner/20.webp",
				"assets/desktop-banner/21.webp",
				"assets/desktop-banner/22.webp",
				"assets/desktop-banner/23.webp",
				"assets/desktop-banner/24.webp",
				"assets/desktop-banner/25.webp",
				"assets/desktop-banner/26.webp",
				"assets/desktop-banner/27.webp",
				"assets/desktop-banner/28.webp",
				"assets/desktop-banner/29.webp",
				"assets/desktop-banner/30.webp",
				"assets/desktop-banner/31.webp",
				"assets/desktop-banner/32.webp",
				"assets/desktop-banner/33.webp",
				"assets/desktop-banner/34.webp",
				"assets/desktop-banner/35.webp",
				"assets/desktop-banner/36.webp",
				"assets/desktop-banner/37.webp",
				"assets/desktop-banner/38.webp",
				"assets/desktop-banner/39.webp",
				"assets/desktop-banner/40.webp",
				"assets/desktop-banner/41.webp",
				"assets/desktop-banner/42.webp",
				"assets/desktop-banner/43.webp",
				"assets/desktop-banner/44.webp",
				"assets/desktop-banner/45.webp",
				"assets/desktop-banner/46.webp",
				"assets/desktop-banner/47.webp",
				"assets/desktop-banner/48.webp",
				"assets/desktop-banner/49.webp",
				"assets/desktop-banner/50.webp",
				"assets/desktop-banner/51.webp",
				"assets/desktop-banner/52.webp",
				"assets/desktop-banner/53.webp",
				"assets/desktop-banner/54.webp",
				"assets/desktop-banner/55.webp",
				"assets/desktop-banner/56.webp",
				"assets/desktop-banner/57.webp",
				"assets/desktop-banner/58.webp",
				"assets/desktop-banner/59.webp",
				"assets/desktop-banner/60.webp",
				"assets/desktop-banner/61.webp",
				"assets/desktop-banner/62.webp",
				"assets/desktop-banner/63.webp",
				"assets/desktop-banner/64.webp",
				"assets/desktop-banner/65.webp",
				"assets/desktop-banner/66.webp",
				"assets/desktop-banner/67.webp",
				"assets/desktop-banner/68.webp",
				"assets/desktop-banner/69.webp",
				"assets/desktop-banner/70.webp",
				"assets/desktop-banner/71.webp",
				"assets/desktop-banner/72.webp",
				"assets/desktop-banner/73.webp",
			], // 桌面端横幅图像
			mobile: [
				"assets/mobile-banner/1.webp",
				"assets/mobile-banner/10.webp",
				"assets/mobile-banner/100.webp",
				"assets/mobile-banner/101.webp",
				"assets/mobile-banner/102.webp",
				"assets/mobile-banner/103.webp",
				"assets/mobile-banner/104.webp",
				"assets/mobile-banner/7.webp",
				"assets/mobile-banner/8.webp",
				"assets/mobile-banner/9.webp",
				"assets/mobile-banner/10.webp",
				"assets/mobile-banner/11.webp",
				"assets/mobile-banner/12.webp",
				"assets/mobile-banner/13.webp",
				"assets/mobile-banner/14.webp",
				"assets/mobile-banner/15.webp",
				"assets/mobile-banner/16.webp",
				"assets/mobile-banner/17.webp",
				"assets/mobile-banner/18.webp",
				"assets/mobile-banner/19.webp",
				"assets/mobile-banner/20.webp",
				"assets/mobile-banner/21.webp",
				"assets/mobile-banner/22.webp",
				"assets/mobile-banner/23.webp",
				"assets/mobile-banner/24.webp",
				"assets/mobile-banner/25.webp",
				"assets/mobile-banner/26.webp",
				"assets/mobile-banner/27.webp",
				"assets/mobile-banner/28.webp",
				"assets/mobile-banner/29.webp",
				"assets/mobile-banner/30.webp",
				"assets/mobile-banner/31.webp",
				"assets/mobile-banner/32.webp",
				"assets/mobile-banner/33.webp",
				"assets/mobile-banner/34.webp",
				"assets/mobile-banner/35.webp",
				"assets/mobile-banner/36.webp",
				"assets/mobile-banner/37.webp",
				"assets/mobile-banner/38.webp",
				"assets/mobile-banner/39.webp",
				"assets/mobile-banner/40.webp",
				"assets/mobile-banner/41.webp",
				"assets/mobile-banner/42.webp",
				"assets/mobile-banner/43.webp",
				"assets/mobile-banner/44.webp",
				"assets/mobile-banner/45.webp",
				"assets/mobile-banner/46.webp",
				"assets/mobile-banner/47.webp",
				"assets/mobile-banner/48.webp",
				"assets/mobile-banner/49.webp",
				"assets/mobile-banner/50.webp",
				"assets/mobile-banner/51.webp",
				"assets/mobile-banner/52.webp",
				"assets/mobile-banner/53.webp",
				"assets/mobile-banner/54.webp",
				"assets/mobile-banner/55.webp",
				"assets/mobile-banner/56.webp",
				"assets/mobile-banner/57.webp",
				"assets/mobile-banner/58.webp",
				"assets/mobile-banner/59.webp",
				"assets/mobile-banner/60.webp",
				"assets/mobile-banner/61.webp",
				"assets/mobile-banner/62.webp",
				"assets/mobile-banner/63.webp",
				"assets/mobile-banner/64.webp",
				"assets/mobile-banner/65.webp",
				"assets/mobile-banner/66.webp",
				"assets/mobile-banner/67.webp",
				"assets/mobile-banner/68.webp",
				"assets/mobile-banner/69.webp",
				"assets/mobile-banner/70.webp",
				"assets/mobile-banner/71.webp",
				"assets/mobile-banner/72.webp",
				"assets/mobile-banner/73.webp",
				"assets/mobile-banner/74.webp",
				"assets/mobile-banner/75.webp",
				"assets/mobile-banner/76.webp",
				"assets/mobile-banner/77.webp",
				"assets/mobile-banner/78.webp",
				"assets/mobile-banner/79.webp",
				"assets/mobile-banner/80.webp",
				"assets/mobile-banner/81.webp",
				"assets/mobile-banner/82.webp",
				"assets/mobile-banner/83.webp",
				"assets/mobile-banner/84.webp",
				"assets/mobile-banner/85.webp",
				"assets/mobile-banner/86.webp",
				"assets/mobile-banner/87.webp",
				"assets/mobile-banner/88.webp",
				"assets/mobile-banner/89.webp",
				"assets/mobile-banner/90.webp",
				"assets/mobile-banner/91.webp",
				"assets/mobile-banner/92.webp",
				"assets/mobile-banner/93.webp",
				"assets/mobile-banner/94.webp",
				"assets/mobile-banner/95.webp",
				"assets/mobile-banner/96.webp",
				"assets/mobile-banner/97.webp",
				"assets/mobile-banner/98.webp",
				"assets/mobile-banner/99.webp",
				"assets/mobile-banner/100.webp",
				"assets/mobile-banner/101.webp",
				"assets/mobile-banner/102.webp",
				"assets/mobile-banner/103.webp",
				"assets/mobile-banner/104.webp",
				"assets/mobile-banner/105.webp",
				"assets/mobile-banner/106.webp",
				"assets/mobile-banner/107.webp",
				"assets/mobile-banner/108.webp",
				"assets/mobile-banner/109.webp",
				"assets/mobile-banner/110.webp",
				"assets/mobile-banner/111.webp",
				"assets/mobile-banner/112.webp",
				"assets/mobile-banner/113.webp",
				"assets/mobile-banner/114.webp",
				"assets/mobile-banner/115.webp",
				"assets/mobile-banner/116.webp",
				"assets/mobile-banner/117.webp",
				"assets/mobile-banner/118.webp",
				"assets/mobile-banner/119.webp",
				"assets/mobile-banner/120.webp",
				"assets/mobile-banner/121.webp",
				"assets/mobile-banner/122.webp",
				"assets/mobile-banner/123.webp",
				"assets/mobile-banner/124.webp",
				"assets/mobile-banner/125.webp",
				"assets/mobile-banner/126.webp",
				"assets/mobile-banner/127.webp",
				"assets/mobile-banner/128.webp",
				"assets/mobile-banner/129.webp",
				"assets/mobile-banner/130.webp",
				"assets/mobile-banner/131.webp",
				"assets/mobile-banner/132.webp",
				"assets/mobile-banner/133.webp",
				"assets/mobile-banner/134.webp",
				"assets/mobile-banner/135.webp",
				"assets/mobile-banner/136.webp",
				"assets/mobile-banner/137.webp",
				"assets/mobile-banner/138.webp",
				"assets/mobile-banner/139.webp",
				"assets/mobile-banner/140.webp",
				"assets/mobile-banner/141.webp",
				"assets/mobile-banner/142.webp",
				"assets/mobile-banner/143.webp",
				"assets/mobile-banner/144.webp",
				"assets/mobile-banner/145.webp",
				"assets/mobile-banner/146.webp",
				"assets/mobile-banner/147.webp",
				"assets/mobile-banner/148.webp",
				"assets/mobile-banner/149.webp",
				"assets/mobile-banner/150.webp",
				"assets/mobile-banner/151.webp",
				"assets/mobile-banner/152.webp",
				"assets/mobile-banner/153.webp",
				"assets/mobile-banner/154.webp",
				"assets/mobile-banner/155.webp",
				"assets/mobile-banner/156.webp",
				"assets/mobile-banner/157.webp",
				"assets/mobile-banner/158.webp",
			], // 移动端横幅图像
		}, // 本地横幅图像

		position: "top", // 横幅图像对齐方式, 仅支持 'top', 'center'(默认), 'bottom'.

		carousel: {
			enable: true, // 启用时轮播横幅图像(每次加载页面时打乱) 否则随机选一张播放
			interval: 3, // 横幅图像切换时间 (s)
		},

		homeText: {
			enable: true, // 主页自定义字体 (已弃用/改用为类apple的hello)
			title: "Mizuki", //

			subtitle: [
				"One demo website",
				"Carousel Text1",
				"Carousel Text2",
				"Carousel Text3",
			], // 主页轮播字幕
			typewriter: {
				enable: true, // 启用字母打字机效果 (逐字输出)

				speed: 100, // 输出速度 (ms/word)
				deleteSpeed: 50, // 字母删除速度 (ms/word)
				pauseTime: 2000, // 完整显示后短暂停留 (ms)
			},
		},

		credit: {
			enable: false, // 显示横幅图像源文本; Display banner image source text

			text: "Describe", // 要显示的源文本; Source text to display
			url: "", // (可选)链接到原作者url; (Optional) URL link to original artwork or artist page
		},
	},
	toc: {
		enable: true, // 启用目录; Enable table of contents feature
		depth: 3, //目录层数(数值越大显示优先级越高) TOC depth, 1-6, 1 means only show h1 headings, 2 means show h1 and h2 headings, and so on
	},
	favicon: [
		//  Leave empty to use default favicon
		// {
		//   src: '/favicon/icon.png',    // Icon file path
		//   theme: 'light',              // Optional, specify theme 'light' | 'dark'
		//   sizes: '32x32',              // Optional, icon size
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		LinkPreset.Anime,
		LinkPreset.Diary,
		{
			name: "GitHub",
			url: "https://github.com/matsuzaka-yuki", // Internal links should not include base path as it will be automatically added

			external: true, // Show external link icon and open in new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to /src directory. If starts with '/', relative to /public directory
	name: "Xcpmd",
	bio: "亻尔女子",
	links: [
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/1510782270",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/profiles/76561199145605421",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Xcpmd",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (like background color) have been overridden, see astro.config.mjs file.
	// Please choose a dark theme as this blog theme currently only supports dark backgrounds
	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
	enable: false, // Enable the comment function. When it is set to false, the comment component will not be displayed in the article area.
	twikoo: {
		envId: "https://app.twikoo.js.org",
	},
};
