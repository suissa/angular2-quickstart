import {Component, Template, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'meu-app'
})
@Template({
  inline: '<h1>Olá {{ nome }}</h1>'
})
// Component controller
class MyAppComponent {
  constructor() {
    this.nome = 'Suissa';
  }
}
bootstrap(MyAppComponent);