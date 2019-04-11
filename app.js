require('./index.scss');

//获取屏幕宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

//获取HTML的DOM
let htmlDOM = document.getElementsByTagName('html')[0];

// 设置html的font-size
htmlDOM.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize', (e) => {
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

	htmlDOM.style.fontSize = htmlWidth / 10 + 'px';

})