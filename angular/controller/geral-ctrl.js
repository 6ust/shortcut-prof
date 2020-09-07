generalSCG.controller("shortcutg", function($scope) {
	$scope.study = [ 	
						{label:'Academia[PDF] - Casa do Codigo', url:'https://www.academia.edu/', img:'../img/study/academy.png'}, 
						{label:'Algoritmo de Machine Learning', url:'https://paulovasconcellos.com.br/como-criar-seu-primeiro-aplicativo-de-machine-learning-7b6af291ba11', img:'../img/study/python.png'}, 
						{label:'Alison', url:'https://alison.com/pt-BR/cursos-de-certificado', img:'../img/study/alison.png'}, 
						{label:'Class Central', url:'https://www.classcentral.com/collection/top-free-online-courses', img:'../img/study/coursera.png'}, 
						{label:'Coursera', url:'https://pt.coursera.org/', img:'../img/study/coursera.png'}, 
						{label:'Deep Learning - Inteligencia Artificial', url:'http://deeplearningbook.com.br/', img:'../img/study/deep-learn.png'}, 
						{label:'EDX', url:'https://www.edx.org/', img:'../img/study/edx.png'}, 
						{label:'Future Learn', url:'https://www.futurelearn.com/', img:'../img/study/future.png'}, 
						{label:'Open', url:'https://www.open.edu/openlearn/free-courses', img:'../img/study/open.png'}, 
						{label:'Udemy', url:'https://www.udemy.com/', img:'../img/study/udemy.png'}, 
						{label:'Visualização de Mapas Iterativos com Python', url:'https://minerandodados.com.br/visualizando-mapas-interativos-com-python/', img:'../img/study/python.png'}, 
						{label:'Duolingo', url:'https://www.duolingo.com/', img:'../img/study/duolingo.png'}

					];

	$scope.studyCert = [ 	{label: 'EDX', url: 'https://www.edx.org/', img: '../img/study-cert/edx-logo.png'}, 
							{label: 'Fundação Bradesco', url: 'https://www.ev.org.br/', img: '../img/study-cert/bradesco-logo.png'}
						];

	$scope.lineSocialOriginal = [	{label:'Facebook', url:'https://www.facebook.com/', img:'../img/soc-original/facebook.png'}, 
									{label:'Gmail', url:'https://gmail.com/', img:'../img/soc-original/gmail.png'}, 
									{label:'Instagram', url:'https://www.instagram.com/', img:'../img/soc-original/instagram.png'}, 
									{label:'Linkedin', url:'https://www.linkedin.com/', img:'../img/soc-original/linkedin.png'}, 
									{label:'Outlook', url:'https://outlook.live.com/owa/', img:'../img/soc-original/outlook.png'}, 
									{label:'Pinterest', url:'https://br.pinterest.com/', img:'../img/soc-original/pintrest.png'}, 
									{label:'PSN', url:'https://www.playstation.com/pt-br/network/', img:'../img/soc-original/psn.png'}, 
									{label:'Reddit', url:'https://www.reddit.com', img:'../img/soc-original/reddit.png'}, 
									{label:'Telegram', url:'https://web.telegram.org/#/im', img:'../img/soc-original/telegram.png'}, 
									{label:'Twitter', url:'https://twitter.com/', img:'../img/soc-original/twitter.png'}, 
									{label:'Whatsapp Web', url:'https://www.whatsapp.com/?lang=pt_br', img:'../img/soc-original/whatsapp.png'}
								];

	$scope.lineSocialStorage = [ {label:'Google Drive', url:'https://drive.google.com', img:'../img/soc-storage/gdrive.png'}, 
								 {label:'Onedrive', url:'https://onedrive.live.com/', img:'../img/soc-storage/onedrive.png'} 
							   ];

	$scope.lineSocialTemp = [ {label: 'YoPmaiL', url: 'http://www.yopmail.com/en/', img: '../img/soc-temp/yopmail.png'}
							];

	$scope.shortcut = [     {label:'Amazon Music', url:'https://music.amazon.com.br/', img:'./img/shortc/music.png'}, 
							{label:'Biblioteca Digital', url:'http://gen.lib.rus.ec/', img:'./img/shortc/book.png'}, 
							{label:'Union Mangá', url:'http://unionleitor.top/manga', img:'./img/shortc/union.png'}, 
							{label:'Prime Video', url:'https://www.primevideo.com/', img:'./img/shortc/prime.png'}, 
							{label:'Trello', url:'https://trello.com/', img:'./img/shortc/trello.png'}, 
							{label:'Youtube', url:'https://www.youtube.com/', img:'./img/shortc/youtube.png'}, 
							{label:'Draw.io', url:'https://www.draw.io/', img:'./img/shortc/drawio.png'}, 
							{label:'Crunhyroll', url:'https://www.crunchyroll.com/', img:'./img/shortc/crunchroll.png'}
						];

	$scope.shortcutBuy = [  {label:'Amazon', url:'https://www.amazon.com.br/', img:'./img/buy/amazon.png'}, 
							{label:'Buscape', url:'https://www.buscape.com.br/', img:'./img/buy/buscape.png'}, 
							{label:'Mercado Livre', url:'https://www.mercadolivre.com.br/', img:'./img/buy/mercado-livre.png'}, 
							{label:'Bondfaro', url:'https://www.bondfaro.com.br/', img:'./img/buy/bondfaro.png'}, 
							{label:'OLX', url:'https://www.olx.com.br/', img:'./img/buy/ol.png'}, 
							{label:'AliExpress', url:'https://pt.aliexpress.com/', img:'./img/buy/ali-express.png'}, 
							{label:'Peixe Urbano', url:'https://www.peixeurbano.com.br/', img:'./img/buy/peixe-urbano.png'}, 
							{label:'Ebay', url:'https://www.ebay.com/', img:'./img/buy/ebay.png'}, 
							{label:'Zoom', url:'https://www.zoom.com.br/', img:'./img/buy/zoom.png'}
						];

	$scope.project = [  
						{label: 'Recipes Remember', url: 'https://recipesremember.wordpress.com/', img: '../img/project/cook.png'} 
					 ];

	$scope.project = [		
						{label:'Lyrics Project', url:'https://1995.netlify.com/', img:'../img/project/flag.png'}, 
						{label:'Movies DBZN', url:'https://moviedbzn.netlify.com/', img:'../img/project/esfera.png'}, 
						{label:'Recipes and Cocktails', url:'https://recipesandcocktail.wordpress.com/', img:'../img/project/drink.png'}, 
						{label: 'Github', url: 'https://github.com/6ust', img: '../img/project/github.png'}, 
						{label: 'Template Pessoal em desenvolvimento', url: 'http://temp001.netlify.app/', img: '../img/project/lion.png'}, 
						{label: 'Game GIT: A Kripta', url: 'https://github.com/6ust/a-kripta-protG', img: '../img/project/kripta.png'} 
					 ];
});