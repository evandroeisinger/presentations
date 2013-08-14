#Workflow

### Custom Developer Tools

       /* Mac */
       ~/Library/Application Support/Google/Chrome Canary/Default/User StyleSheets/Custom.css
       /* Windows */
       C:\Users\YourUsername\AppData\Local\Google\Chrome\UserData\Default\User StyleSheets\Custom.css

* Workspaces

### Sublime Packges

* Bracket Hightlighter
* Emmet
* Live Reload
* Prefixr
* Sass
* SideBarEnhancements
* SublimeCodeIntel
* Theme Soda

### [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
* Google Chrome Extension
* Sublime Packge

### [Emmet](http://docs.emmet.io)

- Sublime Text 2
- TextMate 1.x
- Eclipse/Aptana
- Coda 1.6 and 2.x
- Espresso
- Notepad++
- PSPad
- Brackets

### Sprites
#### Instalar o [Compass](compass-style.org)

	[ gem install compass ]

#### Instalar o Compass no projeto

	[ compass create Compass ]

#### Configurar o Compass no projeto

	http_path = "http://project/workflow/icons"
	css_dir = "../css"
	sass_dir = "sass"
	images_dir = "../images"
	javascripts_dir = "javascripts"

#### Configurar o serviço processamento de Sprite

	@import "icon/*.png";

	@include all-icon-sprites; 

#### Compilar o Compass para processar a Sprite
	
	[ compass compile ]