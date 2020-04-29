import { Component, Input } from '@angular/core';
import { RequestsService } from './requests.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
  providers:  [ RequestsService ]
})
export class HelloComponent  {
  constructor(private requests: RequestsService) {
    
  }

  config: Object;
  @Input() name: string;

  showConfig() {
    this.requests.getConfig()
    .subscribe((data) => this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
    });
  }
}
