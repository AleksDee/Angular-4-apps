import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
	{
		"id": 1,
		"name": "Red Square",
		"date": new Date('06/01/2017'),
		"distance": 12.9,
		"comments": "Cold",
		"gpxData": "../../assets/gpx/day1.gpx"
	},
	{
		"id": 2,
		"name": "Chistie Prudi",
		"date": new Date('08/02/2017'),
		"distance": 7.1,
		"comments": "Hot",
		"gpxData": "../../assets/gpx/day2.gpx"
	},
	{
		"id": 3,
		"name": "Main Bike Trials",
		"date": new Date('03/15/2017'),
		"distance": 8.4,
		"comments": "Nice day, cool temps",
		"gpxData": "../../assets/gpx/day3.gpx"
	},
	{
		"id": 3,
		"name": "Sokolniki",
		"date": new Date('03/15/2017'),
		"distance": 12.2,
		"comments": "Rainy day",
		"gpxData": "../../assets/gpx/day4.gpx"
	}
]