#GRUNT.js

![](http://mikemclin.net/mmwp/wp-content/uploads/2013/04/xgoin-hog-wild-with-grunt.png.pagespeed.ic.GUa2SmjuY2.png)

O Grunt é uma ferramenta CLI (Command Line Interface) desenvolvida em Node, gerenciada pelo utilitário NPM (Node Package Manager) e que serve, especificamente, para **automatizar** tarefas que estão no dia a dia do desenvolvedor Front-End: minificação, compilação, concatenação de arquivos, validação de códigos, testes unitários e diversas outras funcionalidades integradas, como: Sass, Compass, CoffeeScript, Require.js, Jasmine e etc.

### Por que?

Pelo simples fato de automatizar tarefas e não ser um **MONSTRO** de 7 cabeças.

Basta pensar no tempo perdido toda vez que é necessário concatenar e minificar seus arquivos de CSS e JavaScript, executar testes e linting nos arquivos de JavaScript, otimizar imagens, e se estiver usando um pré-processador? Compilar arquivos.

É simples, quanto mais prático se torna o seu workflow, mais produtivo ele se torna. 

Esta é a principal função de um automatizador de tarefas como o Grunt.js.

### Instalando

Para utilizar Grunt.js em um projeto é necessário ter o [Node.js](http://nodejs.org/) instalado em sua máquina, pois além dele ser construído em JavaScript/C++, ele também vem com o utilitário NPM para trabalhar com as suas dependências. Após a instalação do Node, abra seu terminal ou console e vamos instalar o Grunt. 

Obs: Caso esteja utilizando Windows rode o seu console em modo de admnistrador, caso esteja nas plataformas Linux/Unix utilize `sudo`. Notem, que estamos instalando o `grunt-cli`, o qual possibilita utilizar múltiplas versões do grunt na mesma máquina simultâneamente.

    $ npm install -g grunt-cli

Não se assuste! Provavelmente você verá diversas requisições *http* sendo feitas e depois o *path* de onde o grunt foi instaldo.

    npm http GET https://registry.npmjs.org/grunt-cli
    npm http 304 https://registry.npmjs.org/grunt-cli
    npm http GET https://registry.npmjs.org/nopt
    npm http GET https://registry.npmjs.org/resolve
    npm http GET https://registry.npmjs.org/findup-sync
    npm http 304 https://registry.npmjs.org/findup-sync
    npm http 304 https://registry.npmjs.org/resolve
    npm http 304 https://registry.npmjs.org/nopt
    npm http GET https://registry.npmjs.org/abbrev
    npm http GET https://registry.npmjs.org/glob
    npm http GET https://registry.npmjs.org/lodash
    npm http 304 https://registry.npmjs.org/abbrev
    npm http 304 https://registry.npmjs.org/glob
    npm http 304 https://registry.npmjs.org/lodash
    npm http GET https://registry.npmjs.org/minimatch
    npm http GET https://registry.npmjs.org/inherits
    npm http GET https://registry.npmjs.org/graceful-fs
    npm http 304 https://registry.npmjs.org/graceful-fs
    npm http 304 https://registry.npmjs.org/minimatch
    npm http 304 https://registry.npmjs.org/inherits
    npm http GET https://registry.npmjs.org/lru-cache
    npm http GET https://registry.npmjs.org/sigmund
    npm http 304 https://registry.npmjs.org/lru-cache
    npm http 304 https://registry.npmjs.org/sigmund
    /usr/local/bin/grunt -> /usr/local/lib/node_modules/grunt-cli/bin/grunt

Pronto, agora o Grunt foi instalado! Basta colocarmos a mão na massa e utilizá-lo em um projeto.

### Primeiros passos

Agora que temos o Grunt instalado em nosso ambiente, podemos inserir ele em nossos projetos e, é neste momento, que a magia começa a aparecer! Todo a material trabalhado nesta introdução ao Grunt, está disponível [aqui](https://github.com/evandroeisinger/presentations/tree/master/grunt). A pasta `complete` é um projeto totalmente integrado com o Grunt e a pasta `todo` é um projeto para implantarmos o Grunt.

**Primeiro**: para inserirmos o Grunt em um projeto, temos que criar 2 arquivos na raiz do mesmo: `package.json` e `Gruntfile.js`.

O `package.json` é o arquivo de configuração do NPM, onde o Grunt informa as suas dependências. Nele podemos colocar diversas propriedades. Para mais informações dê uma olhada na [documentação](https://npmjs.org/doc/json.html) ou no [guia interativo](http://package.json.nodejitsu.com). Inicialmente iremos criar um `package.json` com esta estrutura:

    {
      "name": "gruntProjects",
      "version": "0.0.1",
      "author": "Evandro Eisinger <evandroeisinger@gmail.com>",
      "description": "Simple grunt introduction."
    }

Com o nosso `package.json` configurado, vamos iniciar a configuração do arquivo `Gruntfile.js`. Este arquivo, é composto pela função `module.exports` que engloba todo o código. Nele é definido o carregamento dos plugins, `grunt.loadNpmTasks( 'plugin-name' );`, a configuração de tarefas customizadas, `grunt.registerTask( 'task-name', [ 'task', 'task' ] );`, e a configuração das tarefas do projeto, `grunt.initConfig({});`.

    module.exports = function( grunt ) {
 
        // set task config
        grunt.initConfig({    
        });

        // load plugins
        //grunt.loadNpmTasks( 'plugin' );
    
        // set custom tasks
        //grunt.registerTask( 'default', ['task'] );

    }

Pronto, após salvar o seu `Gruntfile.js`, podemos realmente iniciar o Grunt em seu projeto.

**Segundo**: para iniciarmos o Grunt.js no projeto, teremos que executar o seguinte comando pelo terminal/console dentro do *path* do projeto:

    $ npm install grunt --save-dev

Novamente serão listadas diversas requisições HTTP. Após a instalação, podemos abrir o arquivo `package.json` e verificar o que foi feito:

    {
         "name": "gruntProject",
         "version": "0.0.1",
         "author": "Evandro Eisinger <evandroeisinger@gmail.com>",
         "description": "Simple grunt introduction.",
         "devDependencies": {
             "grunt": "~0.4.1"
         }
    }

Podemos verificar que foi inserido um objeto `devDependecies`, que é o local onde é feito o cadastro das dependências do Grunt. Esta ação ocorreu devido ao uso da opção `--save-dev`, que automaticamente insere as dependências do projeto no `package.json` utilizado pelo `npm`. Caso esteja em um projeto que já possua o Grunt e ele já esteja configurado com o arquivos `package.json` e `Gruntfile.js`, basta executar o comando para que sejam baixadas todas as dependências definidas no projeto: 

    $ npm install 

**Terceiro**: com o Grunt instalado no projeto, apenas nos resta instalar os plugins desejados, configurá-los e criar as tarefas.

#### Instalando Plugins

Todas as tarefas existentes no Grunt.js são baseadas em plugins. Estes são desenvolvidos tanto pela comunidade quanto pelo próprios desenvolvedores. Existe uma extensa [lista](http://gruntjs.com/plugins), que facilita a busca dos plugins do nosso interesse. Nesta introdução irei mostrar apenas alguns, no entanto, já servem para muita coisa. 

Aqui vai a lista dos plugins que iremos utilizar:

* grunt-contrib-jshint : Validação de arquivos .js
* grunt-contrib-concat : Concatenação de arquivos
* grunt-contrib-uglify : Minificação de arquivos .js
* grunt-contrib-sass   : Processa arquivos .scss
* grunt-contrib-cssmin : Minificação de arquivos .css
* grunt-contrib-watch  : Verifica mudanças em arquivos


Para instalar um plugin em nosso projeto basta executar o seguinte comando:

    $ npm install nome-do-plugin


Então, vamos instalar os nossos plugins executando os seguintes comandos:

    $ npm install grunt-contrib-jshint --save-dev
    $ npm install grunt-contrib-concat --save-dev
    $ npm install grunt-contrib-uglify --save-dev
    $ npm install grunt-contrib-sass --save-dev
    $ npm install grunt-contrib-cssmin --save-dev
    $ npm install grunt-contrib-watch --save-dev

Após a sua instalação, veja novamente o seu `package.json` e perceba que todos os plugins foram adicionados como dependências:

    {
      "name": "gruntProject",
      "version": "0.0.1",
      "author": "Evandro Eisinger <evandroeisinger@gmail.com>",
      "description": "Simple grunt introduction.",
      "devDependencies": {
        "grunt": "~0.4.1",
        "grunt-contrib-uglify": "~0.2.2",
        "grunt-contrib-jshint": "~0.6.2",
        "grunt-contrib-concat": "~0.3.0",
        "grunt-contrib-watch": "~0.5.1",
        "grunt-contrib-sass": "~0.4.1",
        "grunt-contrib-cssmin": "~0.6.1"
      }
    }

#### Carregando plugins

Opa! Depois de instalarmos os nossos plugins, basta carregá-los em nosso `Gruntfile.js` utilizando a função `grunt.loadNpmTasks()`:

    module.exports = function( grunt ) {
 
        // set task config
        grunt.initConfig({    
        });

        // load plugins
        grunt.loadNpmTasks( 'grunt-contrib-jshint' );
        grunt.loadNpmTasks( 'grunt-contrib-concat' );
        grunt.loadNpmTasks( 'grunt-contrib-uglify' );
        grunt.loadNpmTasks( 'grunt-contrib-watch' );
        grunt.loadNpmTasks( 'grunt-contrib-sass' );
        grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    
    }

#### Configurando tarefas

Dentro do método `grunt.initConfig`, realizamos a configuração das tarefas destes plugins. Cada plugin se torna um objeto dentro desta função e cada plugin possuí sua configuração, que pode ser analisada em sua documentação. Como por exemplo o plugin de [concatenação](https://npmjs.org/package/grunt-contrib-concat) ou de [minificação JavaScript](https://npmjs.org/package/grunt-contrib-uglify).  

    module.exports = function( grunt ) {
 
        // set task config
        grunt.initConfig({

	    // jshint options
	    jshint : {
	        all : ['js/main.js']
	    },

	    // concat options
	    concat : {
	        task: {
	            src: [ 'css/general.css', 'css/desktop.css' ],
	            dest: 'css/style.css'
	        }
	    },

	    // js minifcation options
	    uglify : {
	        task : {
	        	options : {
	        		report : 'gzip',
	        		compress : true,
	        		mangle : false
	        	},
	            files : {
	                'js/main.min.js' : ['js/main.js']
	            }
	        }
	    },

	    // css minifcation options
		cssmin: {
		  	task : {
		  		options : {
		  			report : 'gzip'
		  		},
		    	files : { 
		    		'css/style.min.css': [ 'css/style.css' ] 
		    	}
			}
		},

	    // sass options
	    sass : {
			task : {
		      files: {
		    	   'css/desktop.css' : 'scss/desktop.scss',
		           'css/general.css' : 'scss/general.scss'
		      }
		    },
		},

	    // watch options
	    watch : {
		  js : {
		  	files : [ 'js/main.js' ],
		    tasks : [ 'jshint', 'uglify' ]
		  },
		  sass : {
		  	files : [ 'scss/*.scss' ],
		  	tasks : [ 'sass', 'concat', 'cssmin' ]
		  }
		}
        });

        // load plugins
        grunt.loadNpmTasks( 'grunt-contrib-jshint' );
        grunt.loadNpmTasks( 'grunt-contrib-concat' );
        grunt.loadNpmTasks( 'grunt-contrib-uglify' );
        grunt.loadNpmTasks( 'grunt-contrib-watch' );
        grunt.loadNpmTasks( 'grunt-contrib-sass' );
        grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

    }

**OMG!** Neste exato momento já podemos testar todas as tarefas criadas! Se executarmos no terminal/console:  `grunt ` + o nome de um plugin, por exemplo: `grunt concat` ou `grunt sass`, iremos executar a tarefa! Prático, não?

#### Tarefas personalizadas 

Para melhorar ainda mais o nosso workflow, é possível criar tarefas personalizadas! Que possibilitam a execução linear de várias tarefas existentes. Posso criar uma tarefa que teste meus arquivos Javascript e se der tudo certo, os concatene. Ou criar uma tarefa, onde toda vez que um arquivo Sass for salvo, ele execute a compilação para o arquivo de saída CSS e o minifique! Existem muitas possibilidades! Para criar estas tarefas customizadas, utilizamos método, `grunt.registerTask()`:

    module.exports = function( grunt ) {
 
        // set task config
        grunt.initConfig({
            /* ... */
        });

        // load plugins
        /* ... */

        // set custom tasks
        //grunt.registerTask( 'custom-task-name', ['task-name', 'other-task'] );

    }

**No nosso exemplo**, iremos criar apenas 3:

    // set custom tasks
    grunt.registerTask( 'default', [ 'watch' ] );
    grunt.registerTask( 'build', [ 'uglify' ,'jshint', 'sass', 'concat', 'cssmin' ] );
    grunt.registerTask( 'test', [ 'uglify' ,'jshint' ] );

* **'grunt'**: esta tarefa irá observar as mudanças realizadas nos arquivos desejados, perceba que não é necessário utilizar default, pois este nome já vinculado a tarefa grunt;
* **'grunt build'**: esta tarefa irá minificar os arquivos Javascript, testá-los, concatená-los e depois minificá-los; 
* **'grunt test'**: esta tarefa irá apenas minificar e testar os arquivos Javascript;



### Pronto!
Basicamente é isso! Nesta introdução tivemos uma visão geral aplicada de como funciona o Grunt. O mais incrível é que a cada semana coisas novas surgem e vão alimentando esta ferramenta que não para de crescer. 

## Obrigado!