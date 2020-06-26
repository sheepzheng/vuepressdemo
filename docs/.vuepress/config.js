module.exports = {
	title : 'zxy\'s blog',
	description : '个人网站',
	// head : [ //html <head>
	// 	['link',{rel: 'icon',href: '/logo.jpg'}],
	// ],
	// base : '/',
	markdown: {
		lineNumbers:false
	},
	themeConfig: {
		nav:[
			{text:'前端基础',link: '/accumulate/'},
			{text:'算法',link: '/algorithum/'},
			{text:'微博',link: 'https://baidu.com'}
		],
		sidebar: 'auto',
		sidebarDepth:2
	}
};
