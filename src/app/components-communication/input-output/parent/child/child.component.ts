import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  fromChild = new FormControl('');
  @Input() parentMessage = 'Hello From parent';
  @Output() messageFromchild = new EventEmitter();

  get message() {
    return this.fromChild.value;
  }

  sendDataToParent(): void {
    if (this.message) {
      this.messageFromchild.emit(this.message);
    }
  }
}
