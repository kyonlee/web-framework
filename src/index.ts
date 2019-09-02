import { User } from './models/User';

const user = new User({ name: 'Alan', age: 25 });

// user.attributes.get('name');
// user.attributes.get('age');
// user.attributes.get('id');

console.log(user.attributes.get('name'));
console.log(user.attributes.get('age'));
console.log(user.attributes.get('id'));

user.events.on('click', () => {
	console.log('clicked');
});

user.events.trigger('click');

// user.sync.save();
