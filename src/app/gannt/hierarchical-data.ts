import { GanttDependency } from '@progress/kendo-angular-gantt';
import * as kendoAngularGantt from '@progress/kendo-angular-gantt';

/**
 * NOTE: Enum declaration here is for demo compilation purposes only!
 * In the usual case include it as an import from the Gantt:
 *
 * import { DependencyType } from '@progress/kendo-angular-gantt';
 */
export const enum DependencyType {
  FF = 0, // finish-finish - task B can't finish before task A is finished
  FS = 1, // finish-start - task B can't start before task A is finished
  SF = 2, // start-finish - task A can't finish before Task B starts
  SS = 3  // start-start - task B can't start before task A starts
}

export interface Task {
  id: number;
  title: string;
  start: Date;
  end: Date;
  completionRatio: number;
  subtasks?: Task[];
}

export const tasks: Task[] = [
  {
    id: 7,
    title: 'Software validation, research and implementation',
    start: new Date('2014-06-02T00:00:00.000Z'),
    end: new Date('2014-07-12T00:00:00.000Z'),
    completionRatio: 0.45708333333333334,
    subtasks: [
      {
        id: 18,
        title: 'Project Kickoff',
        start: new Date('2014-06-02T00:00:00.000Z'),
        end: new Date('2014-06-02T00:00:00.000Z'),
        completionRatio: 0.23
      },
      {
        id: 11,
        title: 'Research',
        start: new Date('2014-06-02T00:00:00.000Z'),
        end: new Date('2014-06-07T00:00:00.000Z'),
        completionRatio: 0.5766666666666667,
        subtasks: [
          {
            id: 19,
            title: 'Validation with Customers',
            start: new Date('2014-06-02T00:00:00.000Z'),
            end: new Date('2014-06-04T00:00:00.000Z'),
            completionRatio: 0.25
          },
          {
            id: 20,
            title: 'Market Research',
            start: new Date('2014-06-02T00:00:00.000Z'),
            end: new Date('2014-06-03T02:00:00.000Z'),
            completionRatio: 0.82
          },
          {
            id: 39,
            title: 'Functional and Technical Specification',
            start: new Date('2014-06-04T00:00:00.000Z'),
            end: new Date('2014-06-07T00:00:00.000Z'),
            completionRatio: 0.66
          }
        ]
      },
      {
        id: 12,
        title: 'Design',
        start: new Date('2014-06-09T00:00:00.000Z'),
        end: new Date('2014-06-14T00:00:00.000Z'),
        completionRatio: 0.6,
        subtasks: [
          {
            id: 22,
            title: 'UI Design',
            start: new Date('2014-06-09T00:00:00.000Z'),
            end: new Date('2014-06-11T00:00:00.000Z'),
            completionRatio: 0.56
          },
          {
            id: 23,
            title: 'HTML Prototype',
            start: new Date('2014-06-11T00:00:00.000Z'),
            end: new Date('2014-06-14T00:00:00.000Z'),
            completionRatio: 0.64
          }
        ]
      },
      {
        id: 13,
        title: 'Implementation',
        start: new Date('2014-06-11T00:00:00.000Z'),
        end: new Date('2014-07-02T00:00:00.000Z'),
        completionRatio: 0.77,
        subtasks: [
          {
            id: 24,
            title: 'Prototype',
            start: new Date('2014-06-11T00:00:00.000Z'),
            end: new Date('2014-06-17T00:00:00.000Z'),
            completionRatio: 0.77
          },
          {
            id: 26,
            title: 'Architecture',
            start: new Date('2014-06-17T00:00:00.000Z'),
            end: new Date('2014-06-18T00:00:00.000Z'),
            completionRatio: 0.82
          },
          {
            id: 27,
            title: 'Data Layer',
            start: new Date('2014-06-18T00:00:00.000Z'),
            end: new Date('2014-06-24T00:00:00.000Z'),
            completionRatio: 0.5
          },
          {
            id: 28,
            title: 'Unit Tests',
            start: new Date('2014-06-18T00:00:00.000Z'),
            end: new Date('2014-06-27T00:00:00.000Z'),
            completionRatio: 0.68
          },
          {
            id: 29,
            title: 'UI and Interaction',
            start: new Date('2014-06-27T00:00:00.000Z'),
            end: new Date('2014-07-02T00:00:00.000Z'),
            completionRatio: 0.6
          }
        ]
      },
      {
        id: 14,
        title: 'Testing',
        start: new Date('2014-06-30T00:00:00.000Z'),
        end: new Date('2014-07-05T00:00:00.000Z'),
        completionRatio: 0.52,
        subtasks: [
          {
            id: 32,
            title: 'Integration Testing',
            start: new Date('2014-06-30T00:00:00.000Z'),
            end: new Date('2014-07-05T00:00:00.000Z'),
            completionRatio: 0.94
          },
          {
            id: 33,
            title: 'Load Testing',
            start: new Date('2014-06-30T00:00:00.000Z'),
            end: new Date('2014-07-05T00:00:00.000Z'),
            completionRatio: 0.1
          }
        ]
      },
      {
        id: 17,
        title: 'Release',
        start: new Date('2014-07-12T00:00:00.000Z'),
        end: new Date('2014-07-12T00:00:00.000Z'),
        completionRatio: 0
      },
      {
        id: 30,
        title: 'Documentation',
        start: new Date('2014-06-23T00:00:00.000Z'),
        end: new Date('2014-07-05T00:00:00.000Z'),
        completionRatio: 0.14,
        subtasks: [
          {
            id: 34,
            title: 'Structure',
            start: new Date('2014-06-23T00:00:00.000Z'),
            end: new Date('2014-06-26T00:00:00.000Z'),
            completionRatio: 0.28
          },
          {
            id: 35,
            title: 'Articles',
            start: new Date('2014-06-26T00:00:00.000Z'),
            end: new Date('2014-07-05T00:00:00.000Z'),
            completionRatio: 0
          }
        ]
      },
      {
        id: 31,
        title: 'Demos',
        start: new Date('2014-06-30T00:00:00.000Z'),
        end: new Date('2014-07-12T00:00:00.000Z'),
        completionRatio: 0.82,
        subtasks: [
          {
            id: 36,
            title: 'Structure',
            start: new Date('2014-06-30T00:00:00.000Z'),
            end: new Date('2014-07-02T00:00:00.000Z'),
            completionRatio: 0.94
          },
          {
            id: 37,
            title: 'Design',
            start: new Date('2014-07-02T00:00:00.000Z'),
            end: new Date('2014-07-05T00:00:00.000Z'),
            completionRatio: 0.8
          },
          {
            id: 38,
            title: 'Demos',
            start: new Date('2014-07-03T00:00:00.000Z'),
            end: new Date('2014-07-12T00:00:00.000Z'),
            completionRatio: 0.72
          }
        ]
      }
    ]
  }
];

export const dependencies: GanttDependency[] = [
  {
    id: 528,
    fromId: 18,
    toId: 19,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 533,
    fromId: 22,
    toId: 23,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 534,
    fromId: 23,
    toId: 24,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 535,
    fromId: 24,
    toId: 26,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 536,
    fromId: 26,
    toId: 27,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 537,
    fromId: 26,
    toId: 28,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 538,
    fromId: 27,
    toId: 29,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 539,
    fromId: 28,
    toId: 29,
    type: kendoAngularGantt.DependencyType.FF
  },
  {
    id: 540,
    fromId: 29,
    toId: 32,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 541,
    fromId: 29,
    toId: 33,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 543,
    fromId: 29,
    toId: 36,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 551,
    fromId: 13,
    toId: 29,
    type: kendoAngularGantt.DependencyType.FF
  },
  {
    id: 544,
    fromId: 34,
    toId: 35,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 545,
    fromId: 32,
    toId: 33,
    type: kendoAngularGantt.DependencyType.FF
  },
  {
    id: 546,
    fromId: 33,
    toId: 17,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 547,
    fromId: 35,
    toId: 17,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 548,
    fromId: 38,
    toId: 17,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 549,
    fromId: 36,
    toId: 37,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 550,
    fromId: 37,
    toId: 38,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 553,
    fromId: 18,
    toId: 20,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 554,
    fromId: 20,
    toId: 39,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 555,
    fromId: 19,
    toId: 39,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 556,
    fromId: 39,
    toId: 22,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 888,
    fromId: 29,
    toId: 28,
    type: kendoAngularGantt.DependencyType.SS
  },
  {
    id: 777,
    fromId: 7,
    toId: 11,
    type: kendoAngularGantt.DependencyType.SF
  }
];

export const simpleTasks: Task[] = [
  {
    id: 7,
    title: 'Software validation, research and implementation',
    start: new Date('2014-06-02T00:00:00.000Z'),
    end: new Date('2014-06-19T00:00:00.000Z'),
    completionRatio: 0.45708333333333334,
    subtasks: [
      {
        id: 18,
        title: 'Project Kickoff',
        start: new Date('2014-06-02T00:00:00.000Z'),
        end: new Date('2014-06-02T00:00:00.000Z'),
        completionRatio: 0.23
      },
      {
        id: 11,
        title: 'Research',
        start: new Date('2014-06-02T00:00:00.000Z'),
        end: new Date('2014-06-07T00:00:00.000Z'),
        completionRatio: 0.5766666666666667,
        subtasks: [
          {
            id: 19,
            title: 'Validation with Customers',
            start: new Date('2014-06-02T00:00:00.000Z'),
            end: new Date('2014-06-04T00:00:00.000Z'),
            completionRatio: 0.25
          },
          {
            id: 39,
            title: 'Functional and Technical Specification',
            start: new Date('2014-06-04T00:00:00.000Z'),
            end: new Date('2014-06-07T00:00:00.000Z'),
            completionRatio: 0.66
          }
        ]
      },
      {
        id: 13,
        title: 'Implementation',
        start: new Date('2014-06-08T00:00:00.000Z'),
        end: new Date('2014-06-19T00:00:00.000Z'),
        completionRatio: 0.77,
        subtasks: [
          {
            id: 24,
            title: 'Prototype',
            start: new Date('2014-06-08T00:00:00.000Z'),
            end: new Date('2014-06-14T00:00:00.000Z'),
            completionRatio: 0.77
          },
          {
            id: 29,
            title: 'UI and Interaction',
            start: new Date('2014-06-14T00:00:00.000Z'),
            end: new Date('2014-06-19T00:00:00.000Z'),
            completionRatio: 0.6
          }
        ]
      },
      {
        id: 17,
        title: 'Release',
        start: new Date('2014-06-19T00:00:00.000Z'),
        end: new Date('2014-06-19T00:00:00.000Z'),
        completionRatio: 0
      }
    ]
  }
];

export const simpleDependencies: GanttDependency[] = [
  {
    id: 528,
    fromId: 18,
    toId: 19,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 529,
    fromId: 19,
    toId: 39,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 535,
    fromId: 24,
    toId: 29,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 551,
    fromId: 13,
    toId: 29,
    type: kendoAngularGantt.DependencyType.FF
  },
  {
    id: 777,
    fromId: 7,
    toId: 11,
    type: kendoAngularGantt.DependencyType.SF
  },
  {
    id: 556,
    fromId: 39,
    toId: 24,
    type: kendoAngularGantt.DependencyType.FS
  },
  {
    id: 546,
    fromId: 29,
    toId: 17,
    type: kendoAngularGantt.DependencyType.FS
  },
];
