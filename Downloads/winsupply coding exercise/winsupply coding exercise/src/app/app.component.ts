import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  tasks = [];
  userTask = {
    name: '',
    date: '',
    assigned: ''
  };
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.tasks = this.taskService.getTask();
  }
  onSubmitClick() {
    this.tasks.unshift(this.userTask);
    this.userTask = {
      name: '',
      date: '',
      assigned: ''
    };
  }
  onRemoveClick(index) {
    this.tasks.splice(index, 1);
  }
}
