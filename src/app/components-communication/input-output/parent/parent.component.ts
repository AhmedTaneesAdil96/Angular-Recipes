import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  messageForm = new FormControl('');
  messageFromParent = '';
  messageFromChild = '';

  get message() {
    return this.messageForm.value;
  }

  sendDataToChild(): void {
    if (this.message) {
      this.messageFromParent = this.message;
    }
  }

  dataFromChild(data: string): void {
    this.messageFromChild = data;
  }
}
