import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
	visibleImages = [];
	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id: number){
		return IMAGES.slice(0).find(image => image.id == id)
	}

}

const IMAGES = [
	{"id": 1, "category": "boats", "caption": "View from a boat", "url": "assets/img/1.jpeg"},
	{"id": 2, "category": "boats", "caption": "Sailing the coast", "url": "assets/img/2.jpeg"},
	{"id": 3, "category": "boats", "caption": "Sunset Pier", "url": "assets/img/3.jpg"},
	{"id": 4, "category": "boats", "caption": "Sunday Afternon", "url": "assets/img/4.jpg"},
	{"id": 5, "category": "boats", "caption": "Sunset at the docks", "url": "assets/img/5.jpeg"},
	{"id": 6, "category": "camping", "caption": "Camping trip", "url": "assets/img/6.jpeg"},
	{"id": 7, "category": "camping", "caption": "Kim an Jessie", "url": "assets/img/7.jpeg"},
	{"id": 8, "category": "camping", "caption": "View from the top", "url": "assets/img/8.jpeg"},
	{"id": 9, "category": "camping", "caption": "On the trail", "url": "assets/img/9.jpeg"},
	{"id": 10, "category": "camping", "caption": "Our camping spot", "url": "assets/img/10.jpeg"},
	{"id": 11, "category": "camping", "caption": "RV Life", "url": "assets/img/11.jpeg"},
	{"id": 12, "category": "camping", "caption": "Hiking trip 2017", "url": "assets/img/12.jpeg"},
	{"id": 13, "category": "library", "caption": "Big Library", "url": "assets/img/13.jpeg"},
	{"id": 14, "category": "library", "caption": "Stacks", "url": "assets/img/14.jpeg"},
	{"id": 15, "category": "library", "caption": "Saturday Afternon", "url": "assets/img/15.jpeg"},
	{"id": 16, "category": "library", "caption": "Local library", "url": "assets/img/16.jpeg"},
	{"id": 17, "category": "library", "caption": "Nice library", "url": "assets/img/17.jpeg"}
];