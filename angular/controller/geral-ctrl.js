generalSCG.controller("shortcutg", function($scope) {
	$scope.study = [ 	{label: 'Academia[PDF] - Casa do Codigo', url: 'https://www.academia.edu/', img: 'https://a.academia-assets.com/assets/academia-logo-redesign-2015-A-e26cea4e7b60442d1bf312743a2d56ececd63a3d1541baea464697dc3478746e.svg'}, 
						{label: 'Algoritmo de Machine Learning', url: 'https://paulovasconcellos.com.br/como-criar-seu-primeiro-aplicativo-de-machine-learning-7b6af291ba11', img: 'https://www.python.org/static/opengraph-icon-200x200.png'},
						{label: 'Alison', url: 'https://alison.com/pt-BR/cursos-de-certificado', img: 'https://static-s.aa-cdn.net/img/gp/20600008806432/JcOYjy5wl5uCc4RkPGJru0HMgxJo9gU70DfgovOTmClLasfwE0UoeY5ebykRAuG_A5U=w300?v=1'}, 
						{label: 'Class Central', url: 'https://www.classcentral.com/collection/top-free-online-courses', img: 'https://d2.alternativeto.net/dist/icons/coursera_76129.png?width=128&height=128&mode=crop&upscale=false'}, 
						{label: 'Coursera', url: 'https://pt.coursera.org/', img: 'https://cdn6.aptoide.com/imgs/e/8/6/e86471635e2d0656bc77a32f8b9066e2_icon.png?w=128'}, 
						{label: 'Deep Learning - Inteligencia Artificial', url: 'http://deeplearningbook.com.br/', img: 'https://www.clinks.com.br/wp-content/uploads/2018/02/relacao-inteligencia-artificial-sistema-cognitivo.png'}, 
						{label: 'EDX', url: 'https://www.edx.org/', img: 'https://miro.medium.com/fit/c/256/256/1*4EJywszrvCscJBsmQlXB8w.jpeg'}, 
						{label: 'Future Learn', url: 'https://www.futurelearn.com/', img: 'https://miro.medium.com/fit/c/256/256/1*No_5DlBQPdlZHyoLfyUMhQ.png'}, 
						{label: 'Open', url: 'https://www.open.edu/openlearn/free-courses', img: 'https://www.openoffice.org/images/AOO_logos/orb.jpg'},
						{label: 'Udemy', url: 'https://www.udemy.com/', img: 'https://logo.clearbit.com/udemy.com'}, 
						{label: 'Visualização de Mapas Iterativos com Python', url: 'https://minerandodados.com.br/visualizando-mapas-interativos-com-python/', img: 'https://www.python.org/static/opengraph-icon-200x200.png'},
						{label: 'Duolingo', url: 'https://www.duolingo.com/', img: 'https://d35aaqx5ub95lt.cloudfront.net/favicon.ico'}
					];
	$scope.lineSocialOriginal = [	{label: 'Facebook', url: 'https://www.facebook.com/', img: 'https://cdn.pixabay.com/photo/2017/08/20/10/30/facebook-2661207_960_720.jpg'}, 
									{label: 'Gmail', url: 'https://gmail.com/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjLEZ5e7SHOdhu5oEBfcqZW0lV8CIluwQTxZyxvyBEXp8Lo8LTA'}, 
									{label: 'Instagram', url: 'https://www.instagram.com/', img: 'https://images.vexels.com/media/users/3/147098/isolated/lists/931095c4442a6b69f717233f80aa0a68-botao-de-foto-do-instagram.png'}, 
									{label: 'Linkedin', url: 'https://www.linkedin.com/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1TVPHx0gOK-Zq0wb-VsD4gfpyEENGcQ2PnbrQAIIxL-Kw2XE'}, 
									{label: 'Outlook', url: 'https://outlook.live.com/owa/', img: 'https://newsignature.com/wp-content/uploads/2019/04/outlook.png'},
									{label: 'Pinterest', url: 'https://br.pinterest.com/', img: 'http://cinematografico.com.br/wp-content/uploads/2013/09/pinterest.png'}, 
									{label: 'PSN', url: 'https://www.playstation.com/pt-br/network/', img: 'https://apprecs.org/ios/images/app-icons/256/29/441051689.jpg'},
									{label: 'Reddit', url: 'https://www.reddit.com', img: 'https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_reddit-512.png'}, 
									{label: 'Twitter', url: 'https://twitter.com/', img: 'https://img.icons8.com/nolan/2x/twitter.png'}, 
									{label: 'Whatsapp Web', url: 'https://www.whatsapp.com/?lang=pt_br', img: 'https://dl1.cbsistatic.com/i/2016/05/11/93d7eae4-8cab-4e76-b4e4-dd932d302bf3/8d7c6881e1f2a951bef40e039e58b587/imgingest-8323235902858999630.png'} 
								];
	$scope.lineSocialStorage = [ 	{label: 'Google Drive', url: 'https://drive.google.com', img: 'https://lh3.googleusercontent.com/BjEoTf5LtJenRfAf8Xmmdh3JzbyOEKaerqnRyNcwZ9l1ZQocnJP0h1QvuLelI16PNs9LilHQ=w128-h128-e365'}, 
									{label: 'Onedrive', url: 'https://onedrive.live.com/', img: 'https://updraftplus.com/wp-content/uploads/2015/05/onedrive-360.png'}
							   ];
	$scope.lineSocialTemp = [ {label: 'YoPmaiL', url: 'http://www.yopmail.com/en/', img: 'https://uncomocorreo.com/wp-content/uploads/2017/03/yopmail-logo.png'}
							];

	$scope.shortcut = [ {label: 'Amazon Music', url: 'https://music.amazon.com.br/', img: 'https://www.macfn.com/data/2016/12/Amazon-Music.jpg'}, 
						{label: 'Biblioteca Digital', url: 'http://gen.lib.rus.ec/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MfOPQiixF9KfQauqvkIabFWDfgiDjVgWAjWYMWEaGewVnAiNFQ'},
						{label: 'Prime Video', url: 'https://www.primevideo.com/', img: 'https://cdn6.aptoide.com/imgs/c/6/f/c6fbff829fa21abf6037e25e37472498_icon.png?w=256'}, 
						{label: 'Trello', url: 'https://trello.com/', img: 'https://miro.medium.com/fit/c/256/256/1*F0xe1DGvxCLs8YQLuIzuUQ.png'}, 
						{label: 'Youtube', url: 'https://www.youtube.com/', img: 'https://lh3.googleusercontent.com/KhY28aTw30hEJXooMF-_rQqwMIIqofFvasbZJtEpvlgHQwLXKP3KW0OoCTtoYpDNn_U=w128'},
						{label: 'Draw.io', url: 'https://www.draw.io/', img: 'https://lh3.googleusercontent.com/dtke8de00hrk5frYXfrfrQx_TpP1JYFmMlVAJ_UhuUoQl8W9_eUR4m62dPKj5TyAryXKIfyypZY=w128-h128-e365'}, 
						{label: 'Crunhyroll', url: 'https://www.crunchyroll.com/', img: 'https://carlisletheacarlisletheatre.org/images/crunchyroll-logo-icon-4.png'}
						];

	$scope.shortcutBuy = [ {label: 'Amazon', url: 'https://www.amazon.com.br/', img: 'https://joaquimlivraria.files.wordpress.com/2012/09/amazon_icon.png?w=660'}, 
						{label: 'Buscape', url: 'https://www.buscape.com.br/', img: 'https://lh3.googleusercontent.com/pWIxTECpBBsKa0LXMynkw6TU5FRSr65aoMHsCcbpbG9Zj6KvqirfRawcaF6fbB2HibDMcpjGT1w=w128-h128-e365'}, 
						{label: 'Mercado Livre', url: 'https://www.mercadolivre.com.br/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoecdHPc2rQjhpniqIudIUjanPpX0i9dTl926EmzAnj4u28-5&s'}, 
						{label: 'Bondfaro', url: 'https://www.bondfaro.com.br/', img: 'https://i.pinimg.com/originals/a4/33/1d/a4331da4f660ed1aea3d6f16995c11ee.png'}, 
						{label: 'OLX', url: 'https://www.olx.com.br/', img: 'https://img.olx.com.br/thumbs256x256/73/737904097064444.jpg'}, 
						{label: 'AliExpress', url: 'https://pt.aliexpress.com/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4GNQse9wJcStMxAQz_eU8dmecpIGyyndzyII9c7TIA8md5D1&s'}, 
						{label: 'Peixe Urbano', url: 'https://www.peixeurbano.com.br/', img: 'data:image/png;base64,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'}, 
						{label: 'Ebay', url: 'https://www.ebay.com/', img: 'https://logospng.org/download/ebay/logo-ebay-256.png'}, 
						{label: 'Zoom', url: 'https://www.zoom.com.br/', img: 'http://www.superdownloads.com.br/imagens/screenshots/6/2/ico-67782,256.jpg'}
						];

	$scope.project = [	{label: 'Lyrics Project', url: 'https://1995.netlify.com/', img: 'https://pbs.twimg.com/profile_images/422137684014792704/GZfNf9ti.png'}, 
						{label: 'Movies DBZN', url: 'https://moviedbzn.netlify.com/', img: 'http://www.pkicon.com/icons/8384/Dragon-Ball-256.png'} 
					 ];
	$scope.jobsUSACal = [	{label: 'California Jobing',url: 'https://california.jobing.com/',img: 'https://icon-library.net/images/icon-j/icon-j-14.jpg'},
							{label: 'California Jobing',url: 'https://www.california.jobs/',img: 'https://projects.sfchronicle.com/shared/logos/sfletter_c_black_on_gray.png'},
							{label: 'Teach California',url: 'https://www.teachcalifornia.org/Steps/Jobs',img: 'https://uploads-ssl.webflow.com/5a24e6b119e5440001d480f4/5a36bf06c87d66000138611b_TC%20webclip.png'},
							{label: 'Iconorbit',url: 'https://iconorbit.com/icons/256-watermark/1804201616511176811-hot%20sun%20icon.jpg',img: 'https://iconorbit.com/icons/256-watermark/1804201616511176811-hot%20sun%20icon.jpg'},
							{label: 'AGCareers',url: 'https://www.agcareers.com/california-jobs.cfm',img: 'https://aasg.chirpingmustard.com/avatars/011-ag-logo.png'},
							{label: 'Indeed',url: 'https://www.indeed.com/l-California-jobs.html',img: 'http://pngimg.com/uploads/letter_i/letter_i_PNG72.png'},
							{label: 'Career',url: 'https://www.careerjet.com/immigration-jobs/california-370.html',img: 'https://pbs.twimg.com/profile_images/3366855626/359799c70e188b7ead0fc0558980a09f.png'},
							{label: 'Snag a Job',url: 'https://www.snagajob.com/states/ca',img: 'https://i1.wp.com/surgiu.com.br/wp-content/uploads/2019/06/Logo-S-Surgiu-1.jpg?fit=256%2C256'},
							{label: 'Monster',url: 'https://www.monster.com/',img: 'https://pt.seaicons.com/wp-content/uploads/2016/05/Letter-M-blue-icon.png'}
					 	]; 
   $scope.jobsBra = [	{label: 'Indeed',url: 'https://www.indeed.com/l-California-jobs.html',img: 'http://pngimg.com/uploads/letter_i/letter_i_PNG72.png'}
					];
});