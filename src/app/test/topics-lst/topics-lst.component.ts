import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TopicsList } from '../topics';
import { Time } from '../topics';

@Component({
  selector: 'app-topics-lst',
  templateUrl: './topics-lst.component.html',
  styleUrl: './topics-lst.component.scss'
})
export class TopicsLstComponent {
  @Input()  topics: TopicsList[]=[];

  
  formatTime(time: Time): string {
    return `${this.padZero(time.hours)}:${this.padZero(time.minutes)}:${this.padZero(time.seconds)}`;
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
  @Output() topicSelected = new EventEmitter<TopicsList>();
  
  selecttopic(topic : TopicsList){
    this.topicSelected.emit(topic);
  }
}
