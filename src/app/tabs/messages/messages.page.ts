import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SMS} from '@ionic-native/sms/ngx';
import {TwillioService} from '../../services/twillio.service';
import {IonContent, IonGrid} from '@ionic/angular';
import {Message} from '../../models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  @ViewChild(IonContent) contentArea: IonContent;
  @ViewChild(IonGrid, {read: ElementRef}) chatList: ElementRef;
  number: string;
  msg: string;
  sms: SMS = new SMS();
  messages: Message[];
  currentUser = '+15149005541';
  private mutationObserver: MutationObserver;
  constructor(public twillio: TwillioService) {
    this.number = '+15147427841';
  }

  ngOnInit() {
    this.retrieveSMS();
    this.ionViewDidLoad();
  }
  ionViewDidLoad() {

    this.mutationObserver = new MutationObserver(() => {
      this.contentArea.scrollToBottom(300);
    });

    this.mutationObserver.observe(this.chatList.nativeElement, {
      childList: true
    });

  }

  sendSms() {
    this.twillio.send(this.number, this.msg)
        .subscribe((res) => {
          this.msg = '';
          this.messages.push(new Message(res));
        });
  }

  retrieveSMS(): void {
    this.twillio.retrieve()
        .subscribe(res => {
          this.messages = res;
        });
  }
}
