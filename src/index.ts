// import { User } from './models/User';

// const user = User.buildUser({ id: 2 });

// user.on('change', () => {
// 	console.log(user);
// });

// user.fetch();

import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
	console.log(collection);
});

collection.fetch();
collection.fetch();
