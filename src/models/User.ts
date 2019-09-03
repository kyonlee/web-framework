import { Attributes } from './Attributes';
import { EventHandler } from './EventHandler';
import { Sync } from './Sync';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
	public attributes: Attributes<UserProps>;
	public events: EventHandler = new EventHandler();
	public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

	constructor(data: UserProps) {
		this.attributes = new Attributes<UserProps>(data);
	}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}
}
