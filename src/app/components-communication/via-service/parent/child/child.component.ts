import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommunicationService } from 'src/app/service';

@Component({
  selector: 'app-child',

  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnDestroy {
  constructor(private communicationService: CommunicationService) {}

  fromChild = new FormControl('');
  parentMessage = '';
  messageFromchild = '';

  get message() {
    return this.fromChild.value;
  }

  sendDataToParent(): void {
    if (this.message) {
      console.log(this.message);

      this.communicationService.messageFromChild.next(this.message);
    } else {
      this.communicationService.messageFromChild.next('');
    }
  }

  ngOnInit(): void {
    this.getDataFromParent();
  }

  getDataFromParent(): void {
    this.communicationService.messageFromParent.subscribe((data) => {
      this.parentMessage = data;
    });
  }
  ngOnDestroy(): void {
    this.communicationService.messageFromChild.unsubscribe();
  }
}
