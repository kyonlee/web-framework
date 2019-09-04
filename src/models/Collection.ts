import axios, { AxiosResponse } from 'axios';

import { User, UserProps } from './User';
import { EventHandler } from './EventHandler';

export class Collection {
	models: User[] = [];
	events: EventHandler = new EventHandler();

	constructor(public rootUrl: string) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		axios.get(this.rootUrl).then((response: AxiosResponse) => {
			// response.data.forEach((value: UserProps) => {
			// 	const user = User.buildUser(value);
			// 	this.models.push(user);
			// });

			const users = response.data.map((value: UserProps) => {
				return User.buildUser(value);
			});

			this.models = users;
			this.events.trigger('change');
		});
	}
}
