import { User } from './models/User';

const user = new User({ name: 'Alan', age: 25 });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
	console.log('Alan has been changed');
});

user.trigger('change');
