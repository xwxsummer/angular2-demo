import { Component } from '@angular/core';

import { LoggerService } from './logger.service';
declare var $: any;
declare var Qrcode :any;
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  private greeting: string;
  private isShowMore: boolean;
  private msgToChild: string;
  private msgFromChild: string;

	constructor(private logger: LoggerService) {	}

  ngOnInit() {
    this.greeting = 'Angular 2';
    this.msgToChild = 'message from parent';
    this.logger.debug('应用已初始化');
     
        Qrcode.init($('[node-type=qr-btn]'));
    
  }

  receive(msg: string) {
    this.msgFromChild = msg;
  }
}
