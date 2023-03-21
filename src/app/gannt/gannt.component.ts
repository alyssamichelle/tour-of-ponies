import { Component, OnInit } from '@angular/core';
import { GanttDependency, GanttModule } from "@progress/kendo-angular-gantt";
import { Task, tasks, dependencies } from "./hierarchical-data";

@Component({
    selector: 'app-gannt',
    templateUrl: './gannt.component.html',
    styleUrls: ['./gannt.component.css'],
    standalone: true,
    imports: [GanttModule]
})
export class GanntComponent implements OnInit {
  public data: Task[] = tasks;
  public dependencies: GanttDependency[] = dependencies;
  constructor() { }

  ngOnInit(): void {
  }

}