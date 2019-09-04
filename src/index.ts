// import { User } from './models/User';

// const user = User.buildUser({ id: 2 });

// user.on('change', () => {
// 	console.log(user);
// });

// user.fetch();

import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = new Collection<User, UserProps>(
	'http://localhost:3000/users',
	(json: UserProps) => User.buildUser(json)
);

collection.on('change', () => {
	console.log(collection);
});

collection.fetch();
collection.fetch();
