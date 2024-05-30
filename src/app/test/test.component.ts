import { Component, OnInit } from '@angular/core';
import { Topics } from './topics';
import { TopicsList } from './topics';
import { Time } from './topics';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  work = 'practice session';
  myname = 'Charan Teja M';
  hideName = false;

  topics: Topics = {
    topics_covered: 2.5,
    topics_needtobe_covered: 14.5,
    total_topics: 17,
  };

  topiclist: TopicsList[] = [];

  topicSelected! : TopicsList;

  toggle() {
    this.hideName = !this.hideName;
  }
  constructor() { }

  ngOnInit(): void{
    this.topiclist = [

      {
        id: 1,
        name: "Introduction",
        start_time: { hours: 0, minutes: 0, seconds: 0 },
        end_time: { hours: 0, minutes: 42, seconds: 8 },
        duration: 42 + ' minutes'
      },
      {
        id: 2,
        name: "Typescript",
        start_time: { hours: 0, minutes: 42, seconds: 9 },
        end_time: { hours: 2, minutes: 20, seconds: 23 },
        duration: 98 + ' minutes'
      },
      {
        id: 3,
        name: "Angular Installation and Basics",
        start_time: { hours: 2, minutes: 20, seconds: 24 },
        end_time: { hours: 4, minutes: 44, seconds: 53 },
        duration: 144 + ' minutes'
      },
      {
        id: 4,
        name: "Lifecycle Hook and Component Communication",
        start_time: { hours: 4, minutes: 44, seconds: 53 },
        end_time: { hours: 6, minutes: 44, seconds: 55 },
        duration: 120 + ' minutes'
      },
      {
        id: 5,
        name: "Dependency Injection",
        start_time: { hours: 6, minutes: 44, seconds: 55 },
        end_time: { hours: 7, minutes: 41, seconds: 4 },
        duration: 57 + ' minutes'
      },
      {
        id: 6,
        name: "HttpClient and RxJs",
        start_time: { hours: 7, minutes: 41, seconds: 4 },
        end_time: { hours: 9, minutes: 35, seconds: 6 },
        duration: 114 + ' minutes'
      },
      {
        id: 7,
        name: "Routing Basics",
        start_time: { hours: 9, minutes: 35, seconds: 6 },
        end_time: { hours: 10, minutes: 25, seconds: 45 },
        duration: 50 + ' minutes'
      },
      {
        id: 8,
        name: "Template Driven Forms",
        start_time: { hours: 10, minutes: 25, seconds: 45 },
        end_time: { hours: 11, minutes: 49, seconds: 53 },
        duration: 84 + ' minutes'
      },
      {
        id: 9,
        name: "Advanced Routing",
        start_time: { hours: 11, minutes: 49, seconds: 53 },
        end_time: { hours: 13, minutes: 8, seconds: 49 },
        duration: 79 + ' minutes'
      },
      {
        id: 10,
        name: "Route Guards",
        start_time: { hours: 13, minutes: 8, seconds: 49 },
        end_time: { hours: 13, minutes: 30, seconds: 44 },
        duration: 22 + ' minutes'
      },
      {
        id: 11,
        name: "Reactive Forms",
        start_time: { hours: 13, minutes: 30, seconds: 44 },
        end_time: { hours: 15, minutes: 57, seconds: 10 },
        duration: 147 + ' minutes'
      },
      {
        id: 12,
        name: "CanDeactivate Guard",
        start_time: { hours: 15, minutes: 57, seconds: 10 },
        end_time: { hours: 16, minutes: 15, seconds: 4 },
        duration: 18 + ' minutes'
      },
      {
        id: 13,
        name: "Custom Pipe",
        start_time: { hours: 16, minutes: 15, seconds: 4 },
        end_time: { hours: 16, minutes: 25, seconds: 39 },
        duration: 10 + ' minutes'
      },
      {
        id: 14,
        name: "Resolve Guard",
        start_time: { hours: 16, minutes: 25, seconds: 39 },
        end_time: { hours: 16, minutes: 45, seconds: 46 },
        duration: 20 + ' minutes'
      },
      {
        id: 15,
        name: "Global Error Handling",
        start_time: { hours: 16, minutes: 45, seconds: 46 },
        end_time: { hours: 16, minutes: 50, seconds: 8 },
        duration: 5 + ' minutes'
      },
      {
        id: 16,
        name: "Testing Basics",
        start_time: { hours: 16, minutes: 50, seconds: 8 },
        end_time: { hours: 17, minutes: 15, seconds: 44 },
        duration: 25 + ' minutes'
      },
      {
        id: 17,
        name: "Deployment and CI/CD",
        start_time: { hours: 17, minutes: 15, seconds: 44 },
        end_time: { hours: 17, minutes: 28, seconds: 6 },
        duration: 13 + ' minutes'
      }



    ]
  }
  selecttopic(topic : TopicsList){
    this.topicSelected= topic;
  }
}
