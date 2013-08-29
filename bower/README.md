## Bower.js

![](http://bower.io/img/bower-logo.png)

O [Bower](http://bower.io) é uma ferramenta CLI, (Command Line Interface), desenvolvida em Node. Utiliza o utilitário NPM (Node Package Manager) e o sistema de versionamento GIT, para **gerenciar** seus pacotes. Desenvolvido pelo Twitter, com a intenção de facilitar o gerenciamento das dependências dos projetos, tornou-se uma das principais ferramentas de gerenciamento front-end. 

### Por que?

Pela facilidade de gerenciar os pacotes de terceiros no projeto, isto é, os famosos plugins/frameworks/templates/snippets que são inseridos em um projeto. Podemos de forma muito pratica inserir e atualizar estes componentes, facilitando o processo de carregamento das dependências de um projeto.

### Instalando

Para utilizar Bower.js em um projeto é necessário ter o [Node.js](http://nodejs.org/) instalado em sua máquina e também o sistema [GIT](http://git-scm.com) de versionamento. Após a instalação do Node e do GIT, abra seu terminal ou console e vamos instalar o Bower. 

**Obs**: Caso esteja utilizando Windows rode o seu console em modo de admnistrador, caso esteja nas plataformas Linux/Unix utilize `sudo`.

    $ npm install -g bower

Opa! Provavelmente você verá diversas requisições *http* sendo feitas e depois o *path* de onde o Bower foi instalado:

    npm http GET https://registry.npmjs.org/bower
    npm http 200 https://registry.npmjs.org/bower
    npm http GET https://registry.npmjs.org/bower/-/bower-1.2.5.tgz
    npm http 200 https://registry.npmjs.org/bower/-/bower-1.2.5.tgz
    [..]
    /usr/local/bin/bower -> /usr/local/lib/node_modules/bower/bin/bower
    bower@1.2.5 /usr/local/lib/node_modules/bower

Pronto, o Bower foi instalado! Só nos resta utilizarmos em um projeto.

### Iniciando um projeto Bower

Agora que temos o Bower instalado em nosso ambiente, podemos inseri-lo em nossos projetos. Neste exato momento, todo aquele esforço que temos de buscar componentes, baixa-los e inseri-los em um projeto, começa a se distanciar. **Obs:** Todo a material trabalhado nesta introdução ao Bower, está disponível [aqui](https://github.com/evandroeisinger/presentations/tree/master/bower). A pasta `complete` é um projeto já gerenciado pelo Bower, a pasta `todo` é um projeto para implantarmos o Bower e a pasta `test` para testarmos o carregamento das dependências de um projeto pelo Bower.

Para inserir o Bower em um projeto, basta executamos o seguinte comando na pasta raiz do mesmo: **Obs:** Utilize o projeto `todo` para testar esta funcionalidade.

    bower init

Ao executar o comando, serão feitas 12 perguntas que refletem na configuração do projeto:

`[?] name: ` Nome do projeto; (**Obrigatório**)

`[?] version: (1.0.0) ` Versão do projeto; 

`[?] description: ` Descrição do projeto;

`[?] main file: ` Lista de arquivos a serem publicados, separados por vírgula;

`[?] keywords: ` Palavras chave do projeto;

`[?] authors: ` Autores do projeto, separados por virgula;

`[?] license: ` Tipo de lincença;

`[?] homepage: ` URL do projeto; 

`[?] set currently installed components as dependencies? (Y/n) ` Instalar componentes já existentes no projeto;

`[?] add commonly ignored files to ignore list? (Y/n) ` Ignorar arquivos padrões do Bower;

`[?] would you like to mark this package as private which prevents it from being accidentally published to the registry? (y/N) ` Definir como projeto privado, removendo a possibilidade de publicar este setup;

`[?] Looks good? (Y/n) ` Finalizar configuração do Bower.  

Neste exato momento, já temos o Bower configurado no projeto. Podemos visualizar que na pasta do projeto foi criado o arquivo `bower.json`, ele é responsável por todo o controle das dependências do projeto, também existe o arquivo `.bowerrc` que não é criado por padrão e possibilita outras [definições](https://docs.google.com/document/d/1APq7oA9tNao1UYWyOm8dKqlRP2blVkROYLZ2fLIjtWc/edit#heading=h.4pzytc1f9j8k). Desta forma, iremos realizar mais uma configuração, resposável pela definição do nome da pasta de destino dos componentes. Para isto, é necessário criar o arquivo `.bowerrc`, que segue o mesmo estilo do `bower.json`:

    {
        "directory" : "components"
    } 

Agora, com o arquivo `.browerrc` criado, podemos seguir adiante, mas antes de instalarmos os componentes, iremos abordar mais uma de suas funcionalidades, a busca por componentes.

### Buscando componentes

Existem duas formas para buscarmos componentes, a primeira é utilizando CLI e a outra é acessando o [repositório](http://sindresorhus.com/bower-components), onde são listados todos os componentes Bower. Para listarmos por CLI, executamos o comando, `bower search`, que nos retornara todos os componentes existentes **não faça isso ;)**. Provavelmente você já tem ideia do quer encontrar, então utiliza-se o mesmo comando anterior acrescentado pelo o que você quer, `bower search palavra-chave`. Por exemplo, queremos encontrar o famoso jQuery para inserir em nosso projeto, `bower search jquery` e nos será retornado uma lista de todos os componentes jQuery existentes:

    jquery git://github.com/components/jquery.git
    jquery-ui git://github.com/components/jqueryui
    jquery.cookie git://github.com/carhartl/jquery-cookie.git
    jquery-placeholder git://github.com/mathiasbynens/jquery-placeholder.git
    jquery-file-upload git://github.com/blueimp/jQuery-File-Upload.git
    jasmine-jquery git://github.com/velesin/jasmine-jquery
    jquery.ui git://github.com/jquery/jquery-ui.git
    [...]

Voilá! Encontramos o nosso componente jQuery e vários outros. Uma dica para verificar sua veracidade, acesse a url referente ao repositório e tira suas conclusões.

### Versões do componente

Bom, já encontramos o componente do jQuery! Entretanto, devido as novas atualizações precisamos utilizar uma versão específica dele. Para isso iremos utilizar outra funcionalidade do Bower, a famosa `info`! Ela permite visualizar as versões existentes daquele componente, seguindo o exemplo anterior: `bower info jquery`:

    - 2.0.3
    - 2.0.2
    - 2.0.1
    - 2.0.0
    - 1.10.2
    - 1.10.1
    - 1.10.0
    - 1.9.1
    - 1.9.0 

Feito! Encontramos a versão desejada e nos resta apenas instalar o componente.

### Instalando um componente

O Bower nos permite instalar seus diversos componentes, mas ele faz mais do que isso, ele permite adicionar componentes não vinculados a ele. É possível instalar:

* Um componente do repositório Bower, como o jquery;
* Um componente de um repositório Git, git://github.com/evandroeisinger/dribbble.git;
* Um componente de um repositório Git local;
* Um arquivo de uma URL, até mesmo um .zip ou .tar.

Show! Mas então, como se instala um componente? Simples:

Instalar um componente com sua última versão: `bower install jquery --save`
Instalar um componente com uma versão específica: `bowe install jquery#1.8.3 --save`

Em nosso projeto iremos instalar os seguintes componentes: **Obs:** Utilize o projeto `todo` para testar esta funcionalidade.

    $ bower install jquery#1.8.3 --save
    $ bower install modernizr --save
    $ bower install normalize-css --save
    $ bower install handlebars --save
    $ bower install https://gist.github.com/evandroeisinger/5109264/raw/1223c63fc691822c75ed9071acfff8a6d2f640b8/clearfix.css --save

Maravilha! Quando a instalação for concluída, você poderá visualizar duas coisas: Primeira, o arquivo `bower.js` foi atualizado com as dependências do projeto, devido ao parâmetro `--save` existente no comando. Segunda, foi criada uma pasta `components` e dentro dela estão seus componentes.

Puts, como eu faço para desinstalar um componente? Simples, basta: `bower uninstall nomde-do-componente --save` **Obs:** Utilize o projeto `todo` para testar esta funcionalidade.

Pronto, a **mágica** está feita! Agora você pode utilizar seus componentes no projeto sem nenhum problema.

### Listar componentes utilizados

Caso você queira visualizar os componentes existentes em seu projeto, basta executar o comando: `bower list` **Obs:** Utilize o projeto `complete` para testar esta funcionalidade.
    
    Introduction to Bower.js#1.0.0 /Users/Evandro/Projects/presentations/bower/complete
    ├── clearfix#e-tag:75cfd12b8
    ├── handlebars#1.0.0
    ├── jquery#2.0.3
    ├── modernizr#2.6.2
    └── normalize-css#2.1.3
    
### Carregar dependências

Depois que você configura um projeto com o Bower, não é necessário adicionar as dependências junto com a build de desenvolvimento. Basta deixar os arquivos `bower.json` e `.bowerrc` que é possível realizar o carregamento dos componentes, para isto, basta executar o comando: **Obs:** Utilize o projeto `test` para testar esta funcionalidade.

    bower install

Pronto, o seu ambiente atualizado! Agora é possível ver que a pasta `components` foi criada e suas dependências baixadas.

### Considerações finais

Na minha visão, o Bower é um ótimo gerenciador de pacotes. Mas o seu real valor se torna visível na integração com outras ferramentas, como o Grunt.js. Pois falta um pouco de flexibilidade no controle dos componentes. Este valor já foi reconhecido pelo [Yeoman](http://yeoman.io), que utiliza tanto o Grunt.js como o Bower.js em sua aplicação, integrando suas funcionalidades. Esta ferramenta será a próxima a ser introduzida.

**Obrigado** 
