generalSCG.controller("shortcutg", function($scope) {
	$scope.study = [ 	{label: 'Deep Learning - Inteligencia Artificial', url: 'http://deeplearningbook.com.br/', img: 'https://www.clinks.com.br/wp-content/uploads/2018/02/relacao-inteligencia-artificial-sistema-cognitivo.png'}, 
						{label: 'Udemy', url: 'https://www.udemy.com/', img: 'https://logo.clearbit.com/udemy.com'}, 
						{label: 'Coursera', url: 'https://pt.coursera.org/', img: 'https://cdn6.aptoide.com/imgs/e/8/6/e86471635e2d0656bc77a32f8b9066e2_icon.png?w=128'}, 
						{label: 'Class Central', url: 'https://www.classcentral.com/collection/top-free-online-courses', img: 'https://d2.alternativeto.net/dist/icons/coursera_76129.png?width=128&height=128&mode=crop&upscale=false'}, 
						{label: 'Alison', url: 'https://alison.com/pt-BR/cursos-de-certificado', img: 'https://static-s.aa-cdn.net/img/gp/20600008806432/JcOYjy5wl5uCc4RkPGJru0HMgxJo9gU70DfgovOTmClLasfwE0UoeY5ebykRAuG_A5U=w300?v=1'}, 
						{label: 'EDX', url: 'https://www.edx.org/', img: 'https://miro.medium.com/fit/c/256/256/1*4EJywszrvCscJBsmQlXB8w.jpeg'}, 
						{label: 'Future Learn', url: 'https://www.futurelearn.com/', img: 'https://miro.medium.com/fit/c/256/256/1*No_5DlBQPdlZHyoLfyUMhQ.png'}, 
						{label: 'Open', url: 'https://www.open.edu/openlearn/free-courses', img: 'https://www.openoffice.org/images/AOO_logos/orb.jpg'},
						{label: 'Visualização de Mapas Iterativos com Python', url: 'https://minerandodados.com.br/visualizando-mapas-interativos-com-python/', img: 'https://www.python.org/static/opengraph-icon-200x200.png'}, 
						{label: 'Algoritmo de Machine Learning', url: 'https://paulovasconcellos.com.br/como-criar-seu-primeiro-aplicativo-de-machine-learning-7b6af291ba11', img: 'https://www.python.org/static/opengraph-icon-200x200.png'} 
					];
	$scope.lineSocial = [	{label: 'Facebook', url: 'https://www.facebook.com/', img: 'https://cdn.pixabay.com/photo/2017/08/20/10/30/facebook-2661207_960_720.jpg'}, 
							{label: 'Instagram', url: 'https://www.instagram.com/', img: 'https://images.vexels.com/media/users/3/147098/isolated/lists/931095c4442a6b69f717233f80aa0a68-botao-de-foto-do-instagram.png'}, 
							{label: 'Twitter', url: 'https://twitter.com/', img: 'https://img.icons8.com/nolan/2x/twitter.png'}, 
							{label: 'Gmail', url: 'https://gmail.com/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjLEZ5e7SHOdhu5oEBfcqZW0lV8CIluwQTxZyxvyBEXp8Lo8LTA'}, 
							{label: 'Reddit', url: 'https://www.reddit.com', img: 'https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_reddit-512.png'}, 
							{label: 'Linkedin', url: 'https://www.linkedin.com/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1TVPHx0gOK-Zq0wb-VsD4gfpyEENGcQ2PnbrQAIIxL-Kw2XE'}, 
							{label: 'Google Drive', url: 'https://drive.google.com', img: 'https://lh3.googleusercontent.com/BjEoTf5LtJenRfAf8Xmmdh3JzbyOEKaerqnRyNcwZ9l1ZQocnJP0h1QvuLelI16PNs9LilHQ=w128-h128-e365'}, 
							{label: 'Whatsapp Web', url: 'https://www.whatsapp.com/?lang=pt_br', img: 'https://dl1.cbsistatic.com/i/2016/05/11/93d7eae4-8cab-4e76-b4e4-dd932d302bf3/8d7c6881e1f2a951bef40e039e58b587/imgingest-8323235902858999630.png'}, 
							{label: 'Pinterest', url: 'https://br.pinterest.com/', img: 'http://cinematografico.com.br/wp-content/uploads/2013/09/pinterest.png'}, 
							{label: 'Outlook', url: 'https://outlook.live.com/owa/', img: 'https://newsignature.com/wp-content/uploads/2019/04/outlook.png'},
							{label: 'PSN', url: 'https://www.playstation.com/pt-br/network/', img: 'https://apprecs.org/ios/images/app-icons/256/29/441051689.jpg'},
							{label: 'YoPmaiL', url: 'http://www.yopmail.com/en/', img: 'https://uncomocorreo.com/wp-content/uploads/2017/03/yopmail-logo.png'}
						];

	$scope.shortcut = [	{label: 'Biblioteca Digital', url: 'http://gen.lib.rus.ec/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MfOPQiixF9KfQauqvkIabFWDfgiDjVgWAjWYMWEaGewVnAiNFQ'},
						{label: 'Amazon', url: 'https://www.amazon.com.br/', img: 'https://joaquimlivraria.files.wordpress.com/2012/09/amazon_icon.png?w=660'}, 
						{label: 'Amazon Music', url: 'https://music.amazon.com.br/', img: 'https://www.macfn.com/data/2016/12/Amazon-Music.jpg'}, 
						{label: 'Prime Video', url: 'https://www.primevideo.com/', img: 'https://cdn6.aptoide.com/imgs/c/6/f/c6fbff829fa21abf6037e25e37472498_icon.png?w=256'}, 
						{label: 'Trello', url: 'https://trello.com/', img: 'https://miro.medium.com/fit/c/256/256/1*F0xe1DGvxCLs8YQLuIzuUQ.png'}, 
						{label: 'Youtube', url: 'https://www.youtube.com/', img: 'https://lh3.googleusercontent.com/KhY28aTw30hEJXooMF-_rQqwMIIqofFvasbZJtEpvlgHQwLXKP3KW0OoCTtoYpDNn_U=w128'},
						{label: 'Draw.io', url: 'https://www.draw.io/', img: 'https://lh3.googleusercontent.com/dtke8de00hrk5frYXfrfrQx_TpP1JYFmMlVAJ_UhuUoQl8W9_eUR4m62dPKj5TyAryXKIfyypZY=w128-h128-e365'}
						];

	$scope.project = [	{label: 'Lyrics Project', url: 'https://1995.netlify.com/', img: 'https://pbs.twimg.com/profile_images/422137684014792704/GZfNf9ti.png'}, 
						{label: 'Movies DBZN', url: 'https://moviedbzn.netlify.com/', img: 'http://www.pkicon.com/icons/8384/Dragon-Ball-256.png'} 
					 ];
});