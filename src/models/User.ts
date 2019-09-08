import { Model } from './Model';
import { Collection } from './Collection';
import { Attributes } from './Attributes';
import { EventHandler } from './EventHandler';
import { ApiSync } from './ApiSync';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
	static buildUser(data: UserProps): User {
		return new User(
			new Attributes<UserProps>(data),
			new EventHandler(),
			new ApiSync<UserProps>(rootUrl)
		);
	}

	static buildUserCollection(): Collection<User, UserProps> {
		return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
			User.buildUser(json)
		);
	}

	setRandomAge(): void {
		const age = Math.round(Math.random() * 100);
		this.set({ age });
	}
}
