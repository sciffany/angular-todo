import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from 
'@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from "../models/Todo";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `${this.todosUrl}${this.todosLimit}`);
  };

  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }

  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    console.log(url);
    return this.http.put(url, todo, httpOptions);
  }

  addTodo(todo:any):Observable<Todo> {
    const url = `${this.todosUrl}`
    this.http.post<Todo>(url, todo, httpOptions);
  }

}
