import { Component, Input } from '@angular/core';
import { RequestsService } from './requests.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers:  [ RequestsService ]
})
export class HelloComponent  {
  constructor(private requests: RequestsService) {
    
  }

  
  @Input() name: string;

  showConfig() {
    this.requests.getConfig()
    .subscribe((data: Config) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
    });
  }
}
