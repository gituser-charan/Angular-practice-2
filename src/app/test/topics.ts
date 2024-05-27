

export interface Topics{
    topics_covered? : number;
    topics_needtobe_covered? : number;
    total_topics? : number;
}

export interface TopicsList{
    id:number;
    name:string;
    start_time:Time;
    end_time:Time;
    duration?:number | string;
}

export interface Time {
    hours: number;
    minutes: number;
    seconds: number;
  }
