export interface Team {
  id: string;
  name: string;
  nubmerOfMembers: number;
  status: number;
  numberOfDocuments: number;
}

export enum TaskStatus {
  Missed,
  InProgress,
  Completed,
}

export interface Task {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  status: TaskStatus;
  missedDeadlineInDays?: number;
}

export interface Message {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  text: string;
  date: Date;
}

export interface MockedData {
  teams: Team[];
  tasks: Task[];
  messages: Message[];
}
