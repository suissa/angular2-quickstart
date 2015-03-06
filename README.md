#Quickstart do Angular2

Vamos fazer o [quickstart do AngularJs 2.0](https://angular.io/docs/js/latest/quickstart.html), para iniciar vamos clonar o repositório desse *quickstart*.

```
git clone https://github.com/angular/quickstart.git quickstart
```

Após finalizado nosso *clone* vamos entrar na pasta e criar 2 arquivos:

```
cd quickstart
touch index.html
touch app.es6
```

A extensão `.es6` significa que o arquivo usa a sintxa do ES6, caso seu editor não suportar utilize `.js`.

##Componentes
Agora abre o `app.es6` e inicie com o seguinte código:

```js
import {Component, Template, bootstrap} from 'angular2/angular2';
```

Nesse momento estamos importando 3 módulos (Component, Template, bootstrap) do Angular2, utilizando a sintaxe de módulos do ES6.

Depois precisamos definir um componente, nesse exemplo `meu-app`.
A UI é representada e estruturada por componentes, um componente consiste de 2 partes:

- Annotation section
- Component controller

```js
// Annotation section
@Component({
  selector: 'meu-app'
})
@Template({
  inline: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
  constructor() {
    this.name = 'Alice';
  }
}
```


###Component Annotation

Um *component annotation* fornece metadados sobre o componente. Uma *annotation* pode ser identificada por seu sinal de arroba (@).

O *@Component annotation* define a tag de HTML para o componente especificando o selector de CSS do componente.

A *@Template annotation* define o código HTML que representa o componente. Este componente usa um *template* inline, mas você também pode ter um *template* externo. Para usar um *template* externo, especifique a propriedade url e passe o caminho para o arquivo HTML.

```js
@Component({
  selector: 'meu-app' // Define a tag <meu-app></meu-app>
})
@Template({
  inline: '<h1>Hello {{ name }}</h1>' // Define um template inline para o  componente
})
```

A *annotation* acima especifica um tag HTML chamada `meu-app` e um *template* `<h1>Hello {{ name }}</h1>` para essa tag.


###O template e o component controller

O *component controller* é o suporte do *template*. Um *component controller* usa sintaxe de *class* do ES6.

```js
class MyAppComponent {
  constructor() {
    this.name = 'Suissa';
  }
}
```

*Templates* leem a partir de seus controladores de componentes. Templates têm acesso a todas as propriedades ou funções colocados no *component controller*.

Bem parecido com o que temos com o *scope* e as diretivas.

O *template* acima usa a propriedade nome através da sintaxe de dupla chaves ({{...}}). O corpo do construtor atribui "Suissa" para a propriedade nome e o *template* renderiza, "Olá Suissa" em vez de "Olá {{name}}".

##Inicialização

Na parte inferior do `app.es6`, chame a função `bootstrap()` para carregar o seu novo componente em sua página:

```js
bootstrap(MyAppComponent);
```

A função `bootstrap()` pega o *component* como um parâmetro, habilitando o *component* (assim como qualquer *component* filho) para renderizar.

##Declare o HTML

Dentro da tag `head` do `index.html`, inclua o arquivo `es6-shim.js`. (O código do es6-shim deve carregar antes de qualquer código do aplicativo.) Em seguida, instanciar o componente `meu-app` no `body`.

```html
<!-- index.html -->
<html>
  <head>
    <title>Angular 2 Quickstart</title>
    <script src="dist/es6-shim.js"></script>
  </head>
  <body>
    <h1>Angular 2 Quickstart</h1>
    <!-- O component criado em app.es6 -->
    <meu-app></meu-app>

  </body>
</html>
```

##Carregue o *component*

O último passo é carregar o módulo para o *component* `meu-app`. Para fazer isso, vamos utilizar a biblioteca do `System`, que está incluída no repositório do quickstart.

> System.js
> 
> [System](https://github.com/systemjs/systemjs) é uma biblioteca de terceiro de código aberto que adiciona a funcionalidade de carregamento de módulos ES6 para navegadores.

Para utilizarmos essa biblioteca e fazer nosso `app` funcionar adicione o seguinte código no `index.html` após `<meu-app></meu-app>`:

```js
    <script>
      // Sobrescreva os caminhos para carregar os arquivos
      System.paths = {
        'angular2/*':'/angular2/*.js', // Angular
        'rtts_assert/*': '/rtts_assert/*.js', //Runtime assertions
        'app': 'app.es6' // O meu-app component
      };

      // Pontapé inicial
      System.import('app');
    </script>
```

A propriedade `System.paths` acima especifica os caminhos para os seguintes módulos:

- O Angular framework
- Assertions opcionais para verificação de tipos em *runtime*
- O *component* a ser exibido na página

##Rode um server local

Executar um servidor HTTP local, e entrar em `index.html`.

Se você ainda não tem um servidor HTTP, você pode instalar um usando npm install -g http-server. (Se isso resultar em um erro de acesso, então você pode precisar usar sudo npm ...) Por exemplo:

```
# Do diretório que contém index.html:
npm install -g http-server  # Ou sudo npm install -g http-server
http-server                 # Cria um servidor em localhost:8080
# Em um navegador, entre em localhost:8080/
```

![Resultado da renderização](https://cldup.com/Af5p4EHtyX-1200x1200.png)

Não estranhe se demorar pois acontece, só de es6-sim é 1.2Mb. Se tiver problema pode rodar o `gulp` que ele removerá as pastas e instalará todas dependências novamente.