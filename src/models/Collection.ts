import axios, { AxiosResponse } from 'axios';

import { EventHandler } from './EventHandler';

export class Collection<T, K> {
	models: T[] = [];
	events: EventHandler = new EventHandler();

	constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		axios.get(this.rootUrl).then((response: AxiosResponse) => {
			// response.data.forEach((value: UserProps) => {
			// 	this.models.push(this.deserialize(value));
			// });

			const fetchData = response.data.map((value: K) => {
				return this.deserialize(value);
			});

			this.models = fetchData;
			this.events.trigger('change');
		});
	}
}
