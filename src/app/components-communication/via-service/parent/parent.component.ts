import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommunicationService } from 'src/app/service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, OnDestroy {
  constructor(private communicationService: CommunicationService) {}
  ngOnDestroy(): void {
    this.communicationService.messageFromChild.unsubscribe();
  }
  messageForm = new FormControl('');
  messageFromParent = '';
  messageFromChild = '';
  get message() {
    return this.messageForm.value;
  }
  sendDataToChild(): void {
    if (this.message) {
      this.communicationService.messageFromParent.next(this.message);
    } else {
      this.communicationService.messageFromParent.next('');
    }
  }
  ngOnInit(): void {
    this.dataFromChild();
  }

  dataFromChild(): void {
    this.communicationService.messageFromChild.subscribe((data) => {
      console.log(data);

      this.messageFromChild = data;
    });
  }
}
