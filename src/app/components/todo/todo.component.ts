import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { 
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => 
      this.todos = todos );
  }
  
  deleteTodo(todo: Todo){
    this.todos = this.todos.filter(x => x.id!=todo.id);
    this.todoService.deleteTodo(todo).subscribe(todo => 
      {console.log('delete me ' + todo);} );
  }

  addTodo(todo:any){
    console.log("test");
    this.todos.push(todo);
    // this.todoService.addTodo(todo).subscribe(todo => {
    //   this.todos.push(todo);
    // })
  }
  

}
