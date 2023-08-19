import { MockedData, TaskStatus } from '@/types';
import Avatar_2 from '@/assets/Avatar_2.png';

const mock: MockedData = {
  teams: [
    {
      id: '1',
      name: 'Команда 1',
      nubmerOfMembers: 15,
      status: 78,
      numberOfDocuments: 4,
    },
    {
      id: '2',
      name: 'Команда денна',
      nubmerOfMembers: 5,
      status: 50,
      numberOfDocuments: 2,
    },
    {
      id: '3',
      name: 'Команда нічна 1',
      nubmerOfMembers: 10,
      status: 10,
      numberOfDocuments: 0,
    },
    {
      id: '4',
      name: 'Команда 2',
      nubmerOfMembers: 35,
      status: 100,
      numberOfDocuments: 8,
    },
    {
      id: '5',
      name: 'Команда 3',
      nubmerOfMembers: 7,
      status: 25,
      numberOfDocuments: 1,
    },
  ],
  tasks: [
    {
      id: '1',
      name: 'Завдання 1',
      status: TaskStatus.InProgress,
      startDate: new Date(2023, 1, 20),
      endDate: new Date(2023, 9, 20),
    },
    {
      id: '2',
      name: 'Завдання 2',
      status: TaskStatus.Completed,
      startDate: new Date(2023, 7, 17),
      endDate: new Date(2023, 7, 20),
    },
    {
      id: '3',
      name: 'Завдання 33',
      status: TaskStatus.Missed,
      startDate: new Date(2022, 12, 25),
      endDate: new Date(2022, 12, 31),
      missedDeadlineInDays: 12,
    },
  ],
  messages: [
    {
      id: '1',
      author: {
        name: 'Олексій Іваченко',
        avatar: Avatar_2,
      },
      text: 'Розширення проєкту',
      date: new Date(2022, 11, 20),
    },
    {
      id: '2',
      author: {
        name: 'Олексій Іваченко',
        avatar: Avatar_2,
      },
      text: 'Доєднався до команди "Команда 3"',
      date: new Date(2022, 7, 20),
    },
  ],
};

export default mock;
