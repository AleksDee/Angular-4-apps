
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './todo';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService{

	private apiUrl = 'api/todos';

	todos: Todo[] = [];

	constructor(private http: Http){}

	getTodos(): Promise<Todo[]> {
		return this.http.get(this.apiUrl)
						.toPromise()
						.then(res => res.json().data)
						.then(todos => this.todos = todos)
						.catch(this.handleError);
	}

	createTodo(title: string){
		let todo = new Todo(title);

		this.todos.push(todo);
	}

	deleteTodo(todo: Todo){
		let index = this.todos.indexOf(todo);
		if (index > -1) {
			this.todos.splice(index, 1);
		}
	}

	toggleTodo(todo: Todo){
		todo.completed = !todo.completed;
	}

	private handleError(error: any){
		console.error('Произошла ошибка', error);
		return Promise.reject(error.message || error);
	}
}