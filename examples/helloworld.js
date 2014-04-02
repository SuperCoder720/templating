import {ComponentDirective} from 'templating';
import {promise as greetTemplate} from './greet.html';

@ComponentDirective({
  selector: 'exp-hello',
  template: greetTemplate
})
export class FirstComponent {
  constructor() {
  }
  greet(name) {
    return 'Hello '+name;
  }
}
