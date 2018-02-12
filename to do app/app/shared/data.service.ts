import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService{
	createDb(){
		const todos = [
			{
				title: 'Изучить JS',
				completed: true
			},
			{
				title: 'Изучить Angular 2',
				completed: false
			},
			{
				title: 'Написать приложени',
				completed: false
			}	
		];
		return { todos };
	}
}