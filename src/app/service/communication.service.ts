import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  messageFromParent = new BehaviorSubject('');
  messageFromChild = new BehaviorSubject('');
}
